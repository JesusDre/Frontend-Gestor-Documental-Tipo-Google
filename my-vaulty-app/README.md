# 📦 **Vaulty - Gestor Documental Tipo Google**

## 🎯 **¿Qué es Vaulty?**

**Vaulty** es una aplicación web de gestión documental similar a Google Drive, Docs y Excel. Permite a los usuarios:

- 📁 **Gestionar archivos y carpetas** en la nube (Drive)
- 📝 **Crear y editar documentos** en línea (Docs)
- 📊 **Trabajar con hojas de cálculo** colaborativas (Excel)
- 🌐 **Acceder desde cualquier dispositivo**
- 🔐 **Compartir archivos de forma segura**

Este proyecto fue diseñado en **Figma** con prototipado visual y está implementado con tecnologías modernas de desarrollo web.

---

## 🛠️ **Stack Tecnológico**

- **React 18** - Librería de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido
- **React Router v6** - Enrutamiento
- **Pnpm** - Gestor de paquetes

---

## 📁 **Estructura del Proyecto - Guía Completa**

### **🎯 Nivel Raíz**

```
my-vaulty-app/
├── .env.example          # Variables de entorno de ejemplo
├── src/                  # TODO el código fuente
└── public/               # Archivos estáticos (imágenes, iconos)
```

---

## **📂 public/ - Recursos estáticos**

Aquí van archivos que se sirven directamente al navegador sin procesar.

```
public/
├── images/      # Imágenes (logos, banners, etc.)
└── icons/       # Iconos SVG o PNG
```

**Cómo usarlo:**

```tsx
// En tus componentes
<img src="/images/logo.png" alt="Logo" />
<img src="/icons/drive-icon.svg" alt="Drive" />
```

---

## **📂 src/ - Código fuente (el corazón del proyecto)**

### **1️⃣ src/app/ - Configuración global de la app**

#### **app/routes/ - Definición de rutas**

```
routes/
├── drive/index.tsx    # Ruta /drive
├── docs/index.tsx     # Ruta /docs
└── excel/index.tsx    # Ruta /excel
```

**Cómo usarlo:**

```tsx
// En tu router (App.tsx o main router)
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@app/layout';
import { DrivePage } from '@modules/drive/components';
import { DocsPage } from '@modules/docs/components';
import { ExcelPage } from '@modules/excel/components';

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/drive" element={<DrivePage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/excel" element={<ExcelPage />} />
      </Route>
    </Routes>
  );
}
```

#### **app/layout/ - Layouts reutilizables**

```
layout/
└── MainLayout.tsx    # Componente que envuelve todas las rutas
```

**Cómo usarlo:**

```tsx
// MainLayout.tsx
export const MainLayout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Sidebar />
      <main className="main-content">
        <Outlet />  {/* Aquí se renderiza el contenido de cada ruta */}
      </main>
    </div>
  );
};
```

#### **app/bootstrap/ - Inicialización de la app**

Aquí va la lógica de inicialización, configuración global, etc.

**Cómo usarlo:**

```tsx
// bootstrap/index.ts
import { initializeTheme } from '@providers/ThemeProvider';
import { initializeLanguage } from '@providers/LocaleProvider';

export function bootstrapApp() {
  initializeTheme();
  initializeLanguage();
  // Más inicializaciones...
}

// En main.tsx
import { bootstrapApp } from '@app/bootstrap';
bootstrapApp();
createRoot(document.getElementById('root')!).render(<App />);
```

---

### **2️⃣ modules/ - Lógica específica por feature**

Cada módulo es **independiente** y puede reutilizarse.

```
modules/
├── drive/
│   ├── api/          # Llamadas HTTP para drive
│   ├── hooks/        # Custom hooks para drive
│   ├── components/   # Componentes de drive
│   ├── utils/        # Funciones auxiliares
│   └── types/        # Tipos TypeScript
├── docs/             # Misma estructura
└── excel/            # Misma estructura
```

#### **Estructura de un módulo (ejemplo: drive)**

##### **1. TYPES/ - Define los tipos de datos**

```tsx
// src/modules/drive/types/index.ts
export interface File {
  id: string;
  name: string;
  type: 'file' | 'folder';
  size: number;
  createdAt: Date;
  owner: string;
}

export interface Folder {
  id: string;
  name: string;
  files: File[];
}
```

##### **2. API/ - Llamadas al backend**

```tsx
// src/modules/drive/api/index.ts
import { env } from '@config';
import { File, Folder } from '../types';

export async function getFiles(folderId: string): Promise<File[]> {
  const response = await fetch(`${env.apiUrl}/drive/files/${folderId}`);
  return response.json();
}

export async function uploadFile(file: FormData): Promise<File> {
  const response = await fetch(`${env.apiUrl}/drive/upload`, {
    method: 'POST',
    body: file
  });
  return response.json();
}

export async function deleteFile(fileId: string): Promise<void> {
  await fetch(`${env.apiUrl}/drive/files/${fileId}`, {
    method: 'DELETE'
  });
}
```

##### **3. HOOKS/ - Lógica reutilizable**

```tsx
// src/modules/drive/hooks/index.ts
import { useState, useEffect } from 'react';
import { getFiles } from '../api';
import { File } from '../types';

export function useDriveFiles(folderId: string) {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFiles = async () => {
      setLoading(true);
      try {
        const data = await getFiles(folderId);
        setFiles(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error');
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, [folderId]);

  return { files, loading, error };
}
```

##### **4. COMPONENTS/ - Componentes visuales**

```tsx
// src/modules/drive/components/DrivePage.tsx
import { useDriveFiles } from '../hooks';
import { FileList } from '@shared/components';

export const DrivePage = () => {
  const { files, loading, error } = useDriveFiles('root');

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="drive-page">
      <h1>Mi Drive</h1>
      <FileList files={files} />
    </div>
  );
};
```

##### **5. UTILS/ - Funciones auxiliares**

```tsx
// src/modules/drive/utils/index.ts
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

export function getFileIcon(filename: string): string {
  const ext = filename.split('.').pop();
  const icons: { [key: string]: string } = {
    pdf: 'file-pdf',
    docx: 'file-word',
    xlsx: 'file-excel',
    pptx: 'file-powerpoint',
    jpg: 'file-image',
    png: 'file-image'
  };
  return icons[ext!] || 'file';
}
```

---

### **3️⃣ shared/ - Código reutilizable en todo el proyecto**

```
shared/
├── components/   # Botones, modales, spinners (uso global)
├── hooks/        # useDebounce, useLocalStorage (uso global)
├── utils/        # Funciones comunes
├── api/          # httpClient configurado
└── constants/    # Constantes globales
```

**Cómo usarlo:**

```tsx
// src/shared/api/httpClient.ts
export const httpClient = {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.json();
  },
  
  async post<T>(url: string, data: any): Promise<T> {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
};

// Uso en los módulos
import { httpClient } from '@shared/api';

export async function getFiles(folderId: string) {
  return httpClient.get(`/drive/files/${folderId}`);
}
```

```tsx
// src/shared/components/index.ts
export { FileList } from './FileList';
export { Button } from './Button';
export { Modal } from './Modal';
export { LoadingSpinner } from './LoadingSpinner';

// Uso en cualquier componente
import { Button, Modal } from '@shared/components';

export const MyComponent = () => {
  return (
    <>
      <Button onClick={() => {}}>Enviar</Button>
      <Modal isOpen={true}>Contenido</Modal>
    </>
  );
};
```

---

### **4️⃣ providers/ - Contextos globales**

```
providers/
├── ThemeProvider/      # Tema claro/oscuro
├── LocaleProvider/     # Idioma (ES/EN)
└── ToastProvider/      # Notificaciones
```

**Cómo usarlo:**

```tsx
// src/providers/ThemeProvider/index.tsx
import { createContext, useState } from 'react';

export const ThemeContext = createContext<{
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}>({
  theme: 'light',
  toggleTheme: () => {}
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// En main.tsx
import { ThemeProvider } from '@providers/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <LocaleProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </LocaleProvider>
  </ThemeProvider>
);
```

---

### **5️⃣ locales/ - Traducciones i18n**

```
locales/
├── es/
│   ├── ui.json       # Elementos de UI
│   ├── drive.json    # Textos del módulo drive
│   ├── docs.json     # Textos del módulo docs
│   └── excel.json    # Textos del módulo excel
└── en/
    └── (mismo que es/)
```

**Cómo usarlo:**

```json
// src/locales/es/drive.json
{
  "title": "Mi Drive",
  "uploadButton": "Subir archivo",
  "deleteConfirm": "¿Eliminar este archivo?",
  "noFiles": "No hay archivos"
}
```

```tsx
// Hook para usar traducciones
import esUI from '@locales/es/ui.json';
import esDrive from '@locales/es/drive.json';

export function useDriveLang() {
  const isSpanish = true; // De context o localStorage
  
  if (isSpanish) {
    return { ...esUI, ...esDrive };
  }
  return { ...enUI, ...enDrive };
}

// Uso
export const DrivePage = () => {
  const t = useDriveLang();
  
  return <h1>{t.title}</h1>;
};
```

---

### **6️⃣ config/ - Configuración global**

```
config/
├── env.ts    # Variables de entorno
└── index.ts  # Exportaciones
```

**Cómo usarlo:**

```tsx
// src/config/env.ts
export const env = {
  apiUrl: import.meta.env.VITE_API_URL,
  appName: import.meta.env.VITE_APP_NAME,
  isDev: import.meta.env.DEV
};

// .env.example
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Vaulty

// Uso
import { env } from '@config';

const response = await fetch(`${env.apiUrl}/drive/files`);
```

---

### **7️⃣ types/ - Tipos globales**

```
types/
└── global.d.ts    # Declaraciones globales
```

---

## **📋 Arquitectura en acción - Flujo completo**

### **Ejemplo: Usuario sube un archivo a Drive**

```
1. UI (DrivePage.tsx)
   ↓ (usuario hace clic en "Subir")
2. Hook (useDriveFiles)
   ↓ (llama a función)
3. API (drive/api/index.ts)
   ↓ (POST /drive/upload)
4. Backend
   ↓ (procesa archivo)
5. API retorna resultado
   ↓
6. Hook actualiza estado
   ↓
7. Componente re-renderiza
   ↓
8. Toast notificación (ToastProvider)
```

---

## **✅ Reglas clave para usar correctamente**

1. **No importes directamente de módulos a módulos**
   ```tsx
   ❌ // MALO
   import { useDriveFiles } from '@modules/docs/hooks';
   
   ✅ // BUENO - usa shared
   import { useCommonHook } from '@shared/hooks';
   ```

2. **Los módulos son independientes**
   - Drive no debe conocer sobre Docs
   - Compartir lógica en `shared/`

3. **Componentes pesados en modules**
   ```
   - DrivePage.tsx (página completa)
   - FileList.tsx (componente específico de drive)
   ```

4. **Componentes ligeros en shared**
   ```
   - Button.tsx (genérico)
   - Modal.tsx (genérico)
   - LoadingSpinner.tsx (genérico)
   ```

5. **Alias de importación (ya configurado en tsconfig.json)**
   ```tsx
   ✅ import { env } from '@config';
   ✅ import { useDriveFiles } from '@modules/drive/hooks';
   ✅ import { Button } from '@shared/components';
   ✅ import { MainLayout } from '@app/layout';
   ```

---

## **🚀 Primeros pasos**

### **Instalación de dependencias**

```bash
pnpm install
```

### **Variables de entorno**

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus valores:

```
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Vaulty
```

### **Iniciar desarrollo**

```bash
pnpm dev
```

La app estará disponible en `http://localhost:5173`

### **Build para producción**

```bash
pnpm build
```

---

## 📚 **Convenciones del proyecto**

- **Nombres de carpetas**: minúsculas (drive, docs, excel)
- **Nombres de archivos**: PascalCase para componentes (DrivePage.tsx), camelCase para funciones (useDriveFiles.ts)
- **Índices (index.ts)**: se usan para exportar en cada módulo
- **GitKeep (.gitkeep)**: marca carpetas vacías para que Git las rastree

---

## 🤝 **Contribuir**

Sigue la estructura y las reglas descritas arriba. Cualquier nueva funcionalidad debe:

1. Colocarse en el módulo correspondiente (drive, docs, excel)
2. Exportarse desde su `index.ts`
3. Si es compartida, ir a `shared/`

---

## 📝 **Licencia**

Este proyecto es propietario de Vaulty.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
