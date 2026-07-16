export interface Job {
  period: string;
  company: string;
  role: string;
  description: string;
  tags: string[];
}

export interface StackGroup {
  name: string;
  items: string[];
}

export interface Project {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Profile {
  devName: string;
  email: string;
  linkedin: string;
  github: string;
  avatarUrl: string;
}

export const PROFILE: Profile = {
  devName: 'Émerson Vargas',
  email: 'dev.eon@outlook.com',
  linkedin: 'https://linkedin.com/in/emersonvargas222',
  github: 'https://github.com/deveonn',
  avatarUrl: 'https://avatars.githubusercontent.com/u/151974066?v=4',
};

export const TIMELINE: Job[] = [
  {
    period: '2022 — 2023',
    company: 'PurpleCats',
    role: 'Aprendiz → Desenvolvedor Júnior',
    description:
      'Ponto de partida da carreira: entrei como aprendiz e fui promovido a desenvolvedor júnior. Evoluí de tarefas guiadas para entregas próprias em aplicações web e mobile, consolidando fundamentos de desenvolvimento e trabalho em equipe.',
    tags: ['Primeiro emprego', 'Promoção', 'Web', 'Mobile'],
  },
  {
    period: '2024 — 2026',
    company: 'Hapolo',
    role: 'Desenvolvedor Full-Stack',
    description:
      'Desenvolvimento de plataforma PWA white-label e projetos de migração tecnológica — modernizando stacks legadas e estruturando configuração escalável para múltiplos clientes.',
    tags: ['PWA', 'White-label', 'Migração', 'Angular'],
  },
  {
    period: '2026 — atual',
    company: 'Freelance / Autônomo',
    role: 'Desenvolvedor de Software Sob Medida',
    description:
      'Desenvolvimento de software sob medida com contratos formais e entrega em fases: levantamento de requisitos, propostas, marcos de entrega e suporte pós-implantação.',
    tags: ['Contratos formais', 'Entrega em fases', 'Full-stack'],
  },
];

export const STACKS: StackGroup[] = [
  { name: 'Frontend', items: ['Angular', 'React', 'Next.js', 'TypeScript', 'Ionic', 'PWA'] },
  { name: 'Backend', items: ['NestJS', 'Node.js', 'Python', 'Django', 'FastAPI'] },
  { name: 'Dados', items: ['PostgreSQL', 'SQLAlchemy'] },
  { name: 'Infra', items: ['Nginx', 'WSL / Linux'] },
];

export const PROJECTS: Project[] = [
  { icon: '⌛', title: 'Em breve', description: 'Projeto em desenvolvimento — aguarde novidades.', tags: [] },
  { icon: '⌛', title: 'Em breve', description: 'Projeto em desenvolvimento — aguarde novidades.', tags: [] },
  { icon: '⌛', title: 'Em breve', description: 'Projeto em desenvolvimento — aguarde novidades.', tags: [] },
];
