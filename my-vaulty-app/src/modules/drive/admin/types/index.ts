export type AdminNavigationItem = {
  label: string;
  active?: boolean;
};

export type AdminStat = {
  label: string;
  value: string;
  trend: string;
  tone: 'up' | 'down';
};

export type StorageBar = {
  name: string;
  percent: number;
  value: string;
};