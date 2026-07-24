/**
 * Estrutura de navegação (header e footer).
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  children?: NavLink[];
}

// Header principal
export const mainNav: NavGroup[] = [
  { label: 'Início', href: '/' },
  {
    label: 'Condições',
    href: '/psiquiatria-integrativa',
    children: [
      { label: 'Ansiedade', href: '/ansiedade' },
      { label: 'Depressão', href: '/depressao' },
      { label: 'Esgotamento / Burnout', href: '/esgotamento' },
      { label: 'Insônia e Sono', href: '/insonia' },
      { label: 'Saúde Mental da Mulher', href: '/saude-mental-da-mulher' },
      { label: 'Psiquiatria Integrativa', href: '/psiquiatria-integrativa' },
    ],
  },
  { label: 'Psiquiatra Online', href: '/psiquiatra-online' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Blog', href: '/blog' },
  { label: 'Dúvidas', href: '/faq' },
];

// Footer, colunas
export const footerCondicoes: NavLink[] = [
  { label: 'Psiquiatria Integrativa', href: '/psiquiatria-integrativa' },
  { label: 'Ansiedade', href: '/ansiedade' },
  { label: 'Depressão', href: '/depressao' },
  { label: 'Esgotamento / Burnout', href: '/esgotamento' },
  { label: 'Insônia e Sono', href: '/insonia' },
  { label: 'Saúde Mental da Mulher', href: '/saude-mental-da-mulher' },
];

export const footerInstitucional: NavLink[] = [
  { label: 'Sobre a Dra. Vitória', href: '/sobre' },
  { label: 'Como funciona a consulta online', href: '/psiquiatra-online' },
  { label: 'Agende sua consulta', href: '/agendar' },
  { label: 'Blog', href: '/blog' },
  { label: 'Perguntas frequentes', href: '/faq' },
];

export const footerLegal: NavLink[] = [
  { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
  { label: 'Aviso, sigilo e ética', href: '/aviso' },
];

// "Atendo também em…", regiões do módulo geo (para footer/linkagem)
export const footerRegioes: NavLink[] = [
  { label: 'Psiquiatra online no Ceará', href: '/psiquiatra-online/ceara' },
  {
    label: 'Psiquiatra online em Fortaleza',
    href: '/psiquiatra-online/fortaleza',
  },
  {
    label: 'Interior do Ceará',
    href: '/psiquiatra-online/interior-do-ceara',
  },
  { label: 'São Paulo', href: '/psiquiatra-online/sao-paulo' },
  { label: 'Rio de Janeiro', href: '/psiquiatra-online/rio-de-janeiro' },
  { label: 'Brasília / DF', href: '/psiquiatra-online/distrito-federal' },
  { label: 'Minas Gerais', href: '/psiquiatra-online/minas-gerais' },
];
