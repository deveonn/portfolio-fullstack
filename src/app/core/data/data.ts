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

export interface SoftSkill {
  icon: string;
  title: string;
  description: string;
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
      'Empresa de sistemas ERP e automação comercial com emissão fiscal. Ajudei na modernização do ERP legado em Delphi, contribuindo na migração da base de dados de Paradox para PostgreSQL e em ajustes necessários no código.',
    tags: ['ERP', 'Delphi', 'PostgreSQL', 'Migração de dados'],
  },
  {
    period: '2024 — 2026',
    company: 'Hapolo Rastreamento',
    role: 'Desenvolvedor Júnior → Desenvolvedor Full-Stack',
    description:
      'Plataforma SaaS white-label B2B de rastreamento veicular, telemetria e cobrança, atendendo empresas cujos clientes finais somavam mais de 200 mil veículos rastreados no auge. Entrei como desenvolvedor front-end em ReactJS para um sistema à parte da empresa, que acabou não indo para frente, e fui realocado como desenvolvedor júnior para o sistema de rastreamento, então em Django com frontend em jQuery — sistema ao qual continuei dando suporte ao longo da minha passagem pela empresa. Pouco depois, tive a oportunidade de aprender a criar PWAs e apps Ionic, e passei a atuar na evolução e manutenção das quatro aplicações do ecossistema — rastreamento, motorista, instalador e cotação — em Angular, Ionic, TypeScript e Capacitor (Android, iOS, Web e PWA), liderando a migração delas de Cordova para Capacitor e aprendendo boa parte do backend em Python ao longo do caminho, sobre uma arquitetura multi-tenant em que cada cliente rodava sua própria stack de microsserviços em Python. Por serem apps Ionic multiplataforma, criei PWAs com ambientes distintos via Angular environments para cada empresa cliente, dando a elas e aos usuários finais mais uma forma de monitorar seus veículos. Liderei a evolução do BK Auth — app de autenticação com geração offline de códigos de validação para o sistema de cobrança, iniciado por um dev estagiário —, promovendo melhorias importantes, e liderei a migração completa do app de cotação (React Native → Ionic no front, Node.js/Express/Knex → Python/FastAPI no back). Implementei rastreamento em tempo real, telemetria, horímetro e cálculo de consumo de combustível com Google Maps, OpenStreetMap e Leaflet, além de administrar 38 configurações Nginx em produção e implantar monitoramento de erros com GlitchTip self-hosted.',
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

export const SOFT_SKILLS: SoftSkill[] = [
  {
    icon: '🚀',
    title: 'Aprendizado rápido',
    description:
      'Assimilo tecnologias e contextos novos com agilidade, encurtando a curva de aprendizado em projetos e stacks desconhecidas.',
  },
  {
    icon: '⚡',
    title: 'Proatividade',
    description:
      'Antecipo problemas e tomo iniciativa para resolvê-los antes que virem bloqueios, sem depender de direcionamento constante.',
  },
  {
    icon: '🗣️',
    title: 'Comunicação em time',
    description:
      'Comunico ideias e decisões técnicas com clareza, mantendo o time alinhado e o trabalho colaborativo fluindo.',
  },
  {
    icon: '🧠',
    title: 'Pensamento lógico e analítico',
    description:
      'Decomponho problemas complexos em partes menores, avaliando trade-offs com base em dados e lógica antes de decidir.',
  },
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
