import { Job, Project, StackGroup, PROJECTS, STACKS, TIMELINE } from '../data/data';
import { Lang } from './language.service';

export const TIMELINE_EN: Job[] = [
  {
    period: '2022 — 2023',
    company: 'PurpleCats Payments',
    role: 'Intern → Junior Developer',
    description:
      'Joined as an intern and was promoted to junior developer within 3 months. I built landing pages, browser extensions, a backoffice, and DApps using React, TypeScript, SCSS, and Vite, on an agile team following Scrum.',
    tags: ['First job', 'Web developer', 'ReactJS', 'Web3'],
  },
  {
    period: '2023',
    company: 'ZTech',
    role: 'Developer',
    description:
      'ERP and commercial automation company with fiscal invoicing. I worked on modernizing the legacy Delphi ERP, migrating the database from Paradox to PostgreSQL and making the necessary code adjustments.',
    tags: ['ERP', 'Delphi', 'PostgreSQL', 'Data migration'],
  },
  {
    period: '2024 — 2026',
    company: 'Hapolo Sistemas',
    role: 'Full-Stack Developer',
    description:
      'White-label SaaS platform for vehicle tracking, telemetry, and billing that served more than 200,000 customers. I developed and maintained the four applications in the ecosystem — tracking, driver, installer, and quoting — using Angular, Ionic, TypeScript, and Capacitor (Android, iOS, Web, and PWA), on top of a multi-tenant architecture with a single Python codebase. I built BK Auth, an authentication app that generates offline validation codes for the billing system, and led the complete migration of the quoting app (React Native → Ionic on the frontend, Node.js/Express/Knex → Python/FastAPI on the backend). I implemented real-time tracking, telemetry, engine-hour tracking, and fuel consumption calculations with Google Maps, OpenStreetMap, and Leaflet, in addition to managing 38 production Nginx configurations and deploying self-hosted GlitchTip for error monitoring.',
    tags: [
      'PWA',
      'White-label',
      'Migrations',
      'Angular',
      'Backend',
      'Multi-tenant architecture',
      'Multi-tenant',
      'FastAPI',
      'Mobile',
    ],
  },
];

export const STACKS_EN: StackGroup[] = [
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
    items: ['NestJS', 'Node.js', 'Python', 'Django', 'FastAPI', 'Express', 'REST APIs'],
  },
  { name: 'Data', items: ['MySQL', 'PostgreSQL', 'SQL', 'SQLAlchemy'] },
  { name: 'Mobile', items: ['Android', 'iOS', 'Capacitor', 'PWA', 'React Native'] },
  {
    name: 'Geolocation',
    items: ['Google Maps', 'OpenStreetMap', 'Leaflet', 'Telemetry', 'Real-time tracking'],
  },
  { name: 'Infra', items: ['Docker', 'Nginx', 'Linux', 'WSL / Ubuntu', 'Git', 'Certbot'] },
  { name: 'Tools', items: ['Claude Code', 'VS Code'] },
];

export const PROJECTS_EN: Project[] = [
  {
    icon: '🚛',
    title: 'Vetor',
    description:
      'Fleet management SaaS (web dashboard + mobile app) built with Angular, NestJS, and Ionic, integrated with a tracking platform via REST API. I chose PostgreSQL after evaluating MySQL\'s behavior under high data volumes, prioritizing long-term scalability. Responsible for the entire cycle: requirements gathering, commercial proposal, architecture, visual identity, and development.',
    tags: ['SaaS', 'Angular', 'NestJS', 'Ionic', 'PostgreSQL', 'Personal project'],
  },
];

export function getTimeline(lang: Lang): Job[] {
  return lang === 'pt' ? TIMELINE : TIMELINE_EN;
}

export function getStacks(lang: Lang): StackGroup[] {
  return lang === 'pt' ? STACKS : STACKS_EN;
}

export function getProjects(lang: Lang): Project[] {
  return lang === 'pt' ? PROJECTS : PROJECTS_EN;
}

interface UiText {
  nav: { experience: string; projects: string; contact: string; langToggle: string };
  hero: { kicker: string; role: string; lead: string; ctaPrimary: string; ctaSecondary: string };
  about: {
    label: string;
    text: string;
    educationLabel: string;
    educationValue: string;
    languagesLabel: string;
    languagesValue: string;
  };
  timeline: { label: string; title: string; subtitle: string };
  stack: { label: string; title: string; note: string };
  projects: { label: string; title: string };
  contact: {
    label: string;
    title: string;
    text: string;
    emailBtn: string;
    linkedinBtn: string;
    githubBtn: string;
    footer: string;
    easterEgg: string;
  };
}

export const UI: Record<Lang, UiText> = {
  pt: {
    nav: { experience: 'Trajetória', projects: 'Projetos', contact: 'Contato', langToggle: 'EN' },
    hero: {
      kicker: '// Olá, eu sou',
      role: 'Desenvolvedor Full-Stack',
      lead: 'Construo aplicações web, mobile e PWA end-to-end — do banco de dados à interface — com foco em produto, performance e entregas que chegam à produção.',
      ctaPrimary: 'Ver trajetória ↓',
      ctaSecondary: 'Contato',
    },
    about: {
      label: '01 · sobre',
      text: 'Desenvolvedor full-stack com <strong>mais de 4 anos de experiência</strong>, especializado em plataformas <strong>SaaS multi-tenant de rastreamento veicular</strong>. Atuei em um produto que atendeu <strong>mais de 200 mil clientes</strong>, cobrindo backend Python, frontend Angular, aplicativos Android/iOS e infraestrutura Linux. Experiência com <strong>geolocalização em tempo real, telemetria</strong>, migração de stack tecnológica e modernização de sistemas legados. Baseado em São Marcos/RS, disponível para trabalho remoto.',
      educationLabel: 'Formação',
      educationValue: 'Bacharelado em Ciência da Computação · 2022–2024 (incompleto)',
      languagesLabel: 'Idiomas',
      languagesValue: 'Português (nativo) · Inglês (intermediário)',
    },
    timeline: {
      label: '02 · trajetória',
      title: 'Evolução de carreira',
      subtitle:
        'De aprendiz a desenvolvedor autônomo com contratos formais — cada etapa ampliou escopo e responsabilidade.',
    },
    stack: {
      label: '03 · stack',
      title: 'Stack técnica',
      note: 'Tecnologias com as quais já atuei profissionalmente, com perfil generalista — do banco de dados à interface, passando por mobile e infraestrutura.',
    },
    projects: { label: '04 · projetos', title: 'Projetos em destaque' },
    contact: {
      label: '05 · contato',
      title: 'Vamos conversar?',
      text: 'Aberto a oportunidades CLT, PJ e freelance. Respondo rápido — me chame por qualquer canal abaixo.',
      emailBtn: '✉ Email',
      linkedinBtn: 'in LinkedIn',
      githubBtn: '</> GitHub',
      footer: 'construído com café e commits · 2026',
      easterEgg: '// você chegou até aqui 👀',
    },
  },
  en: {
    nav: { experience: 'Experience', projects: 'Projects', contact: 'Contact', langToggle: 'PT' },
    hero: {
      kicker: "// Hi, I'm",
      role: 'Full-Stack Developer',
      lead: 'I build web, mobile, and PWA applications end-to-end — from database to interface — focused on product, performance, and shipping to production.',
      ctaPrimary: 'See my journey ↓',
      ctaSecondary: 'Contact',
    },
    about: {
      label: '01 · about',
      text: 'Full-stack developer with <strong>over 4 years of experience</strong>, specialized in <strong>multi-tenant SaaS platforms for vehicle tracking</strong>. I worked on a product that served <strong>more than 200,000 customers</strong>, covering Python backend, Angular frontend, Android/iOS apps, and Linux infrastructure. Experienced in <strong>real-time geolocation, telemetry</strong>, technology stack migration, and legacy system modernization. Based in São Marcos, Brazil, available for remote work.',
      educationLabel: 'Education',
      educationValue: "Bachelor's in Computer Science · 2022–2024 (incomplete)",
      languagesLabel: 'Languages',
      languagesValue: 'Portuguese (native) · English (intermediate)',
    },
    timeline: {
      label: '02 · experience',
      title: 'Career journey',
      subtitle:
        'From intern to independent developer with formal contracts — each step expanded scope and responsibility.',
    },
    stack: {
      label: '03 · stack',
      title: 'Tech stack',
      note: "Technologies I've worked with professionally, with a generalist profile — from database to interface, across mobile and infrastructure.",
    },
    projects: { label: '04 · projects', title: 'Featured projects' },
    contact: {
      label: '05 · contact',
      title: "Let's talk?",
      text: 'Open to full-time, contract, and freelance opportunities. I respond quickly — reach out through any channel below.',
      emailBtn: '✉ Email',
      linkedinBtn: 'in LinkedIn',
      githubBtn: '</> GitHub',
      footer: 'built with coffee and commits · 2026',
      easterEgg: "// you made it this far 👀",
    },
  },
};
