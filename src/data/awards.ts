export type Award = {
  year: number;
  award: string;
  level?: string;
  project: string;
  category: string;
};

export const awards: Award[] = [
  {
    year: 2025,
    award: 'International Design Awards (IDA)',
    level: 'Gold',
    project: 'PUMA — Cali OG Canvas',
    category: 'Multimedia / Social Media',
  },
  {
    year: 2025,
    award: 'CLAP Awards',
    level: 'Selección',
    project: 'PUMA — Cali OG Canvas',
    category: 'Marketing & Publicidad — Mejor anuncio o campaña en prensa gráfica',
  },
  {
    year: 2025,
    award: 'International Design Awards (IDA)',
    level: 'Silver',
    project: 'Casa de la Grana',
    category: 'Multimedia / Brand Identity',
  },
  {
    year: 2025,
    award: 'CLAP Awards',
    level: 'Selección',
    project: 'Casa de la Grana',
    category: 'Branding & Packaging — Mejor sistema de identidad corporativa',
  },
  {
    year: 2024,
    award: 'World Design Capital San Diego–Tijuana',
    level: 'Major Recognition',
    project: 'Imagino un Mundo de Colores',
    category: 'Exposición Binacional Juvenil de Pósters',
  },
  {
    year: 2023,
    award: 'Premio Nacional de Diseño MX',
    level: 'Diseña México',
    project: 'Cerveza Jimena',
    category: 'Diseño de comunicaciones visuales',
  },
];
