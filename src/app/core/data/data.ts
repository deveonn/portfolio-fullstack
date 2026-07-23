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
    company: 'PurpleCats Payments',
    role: 'Aprendiz → Desenvolvedor Júnior',
    description:
      'Ingressei como aprendiz e fui promovido a desenvolvedor júnior em 3 meses. Desenvolvi landing pages, extensões de navegador, backoffice e DApps com React, TypeScript, SCSS e Vite, em time ágil sob Scrum.',
    tags: ['Primeiro emprego', 'Web developer', 'ReactJS', 'Web3'],
  },
  {
    period: '2023',
    company: 'ZTech',
    role: 'Desenvolvedor',
    description:
      'Empresa de sistemas ERP e automação comercial com emissão fiscal. Atuei na modernização do ERP legado em Delphi, migrando a base de dados de Paradox para PostgreSQL e realizando os ajustes necessários em código.',
    tags: ['ERP', 'Delphi', 'PostgreSQL', 'Migração de dados'],
  },
  {
    period: '2024 — 2026',
    company: 'Hapolo Sistemas',
    role: 'Desenvolvedor Full-Stack',
    description:
      'Plataforma SaaS white-label B2B de rastreamento veicular, telemetria e cobrança, atendendo empresas cujos clientes finais somavam mais de 200 mil veículos rastreados no auge. Desenvolvi e mantive as quatro aplicações do ecossistema — rastreamento, motorista, instalador e cotação — em Angular, Ionic, TypeScript e Capacitor (Android, iOS, Web e PWA), sobre uma arquitetura multi-tenant com base Python única. Criei o BK Auth, app de autenticação com geração offline de códigos de validação para o sistema de cobrança, e liderei a migração completa do app de cotação (React Native → Ionic no front, Node.js/Express/Knex → Python/FastAPI no back). Implementei rastreamento em tempo real, telemetria, horímetro e cálculo de consumo de combustível com Google Maps, OpenStreetMap e Leaflet, além de administrar 38 configurações Nginx em produção e implantar monitoramento de erros com GlitchTip self-hosted.',
    tags: [
      'PWA',
      'White-label',
      'Migrações',
      'Angular',
      'Backend',
      'Arquitetura multi-tenant',
      'Multi-tenant',
      'FastAPI',
      'Mobile',
    ],
  },
];

export const STACKS: StackGroup[] = [
  {
    name: 'Frontend',
    items: [
      'Angular',
      'ReactJS',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Ionic',
      'PWA',
      'HTML5',
      'CSS3',
      'SCSS',
    ],
  },
  {
    name: 'Backend',
    items: ['NestJS', 'Node.js', 'Python', 'Django', 'FastAPI', 'Express', 'APIs REST'],
  },
  { name: 'Dados', items: ['MySQL', 'PostgreSQL', 'SQL', 'SQLAlchemy'] },
  { name: 'Mobile', items: ['Android', 'iOS', 'Capacitor', 'PWA', 'React Native'] },
  {
    name: 'Geolocalização',
    items: ['Google Maps', 'OpenStreetMap', 'Leaflet', 'Telemetria', 'Rastreamento em tempo real'],
  },
  { name: 'Infra', items: ['Docker', 'Nginx', 'Linux', 'WSL / Ubuntu', 'Git', 'Certbot'] },
  { name: 'Ferramentas', items: ['Claude Code', 'VS Code'] },
];

export const PROJECTS: Project[] = [
  {
    icon: '🚛',
    title: 'Vetor',
    description:
      'SaaS de gestão de frota (painel web + aplicativo mobile) em Angular, NestJS e Ionic, com integração a plataforma de rastreamento via API REST. Optei por PostgreSQL após avaliar o comportamento do MySQL em altos volumes de dados, priorizando escalabilidade a longo prazo. Responsável por todo o ciclo: levantamento de requisitos, proposta comercial, arquitetura, identidade visual e desenvolvimento.',
    tags: ['SaaS', 'Angular', 'NestJS', 'Ionic', 'PostgreSQL', 'Projeto próprio'],
  },
];
