/**
 * Construtores de JSON-LD (schema.org), stack médica completa.
 *
 * Vantagem competitiva: a análise de concorrentes mostrou que só 1 de 6 usa schema
 * médico decente, e NINGUÉM marca Review/AggregateRating. A stack aqui
 * (Physician + MedicalBusiness + MedicalWebPage + FAQPage + BreadcrumbList) coloca o
 * site tecnicamente à frente já no lançamento.
 *
 * ⚠️ Review/AggregateRating NÃO é emitido enquanto não houver avaliação real
 *    (ver src/data/testimonials.ts → temAvaliacaoReal). Sem nota fictícia (CFM).
 */

import { site } from '../data/site';

const abs = (path: string): string => {
  const base = site.url.replace(/\/$/, '');
  if (!path || path === '/') return base + '/';
  return base + (path.startsWith('/') ? path : '/' + path);
};

// ── Entidades sitewide (@graph em toda página) ───────────────────────────────

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': abs('/') + '#website',
    url: abs('/'),
    name: `${site.nome}, Médica`,
    inLanguage: 'pt-BR',
    publisher: { '@id': abs('/') + '#physician' },
  };
}

export function physicianNode() {
  return {
    '@type': ['Physician', 'MedicalBusiness'],
    '@id': abs('/') + '#physician',
    name: site.nome,
    alternateName: site.nomeCompleto,
    url: abs('/'),
    description: site.descricaoCurta,
    telephone: `+${site.canais.whatsapp}`,
    email: site.canais.email,
    priceRange: '$$',
    identifier: {
      '@type': 'PropertyValue',
      name: 'CRM',
      value: site.crm,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.base.cidade,
      addressRegion: site.base.uf,
      addressCountry: 'BR',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    availableService: {
      '@type': 'MedicalProcedure',
      name: 'Consulta em psiquiatria por telemedicina',
    },
    sameAs: [site.canais.instagramUrl, site.canais.linktree],
    knowsLanguage: 'pt-BR',
  };
}

/** Grafo sitewide, injetado no BaseLayout. */
export function siteGraph() {
  return [websiteNode(), physicianNode()];
}

// ── Nós por página ───────────────────────────────────────────────────────────

interface MedicalWebPageInput {
  path: string;
  name: string;
  description: string;
  breadcrumb?: BreadcrumbItem[];
}

export function medicalWebPageNode({
  path,
  name,
  description,
}: MedicalWebPageInput) {
  return {
    '@type': 'MedicalWebPage',
    '@id': abs(path) + '#webpage',
    url: abs(path),
    name,
    description,
    inLanguage: 'pt-BR',
    isPartOf: { '@id': abs('/') + '#website' },
    about: { '@id': abs('/') + '#physician' },
    lastReviewed: undefined,
  };
}

export interface FAQEntry {
  q: string;
  a: string;
}

export function faqPageNode(faqs: FAQEntry[], path: string) {
  return {
    '@type': 'FAQPage',
    '@id': abs(path) + '#faq',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function breadcrumbNode(items: BreadcrumbItem[], path: string) {
  return {
    '@type': 'BreadcrumbList',
    '@id': abs(path) + '#breadcrumb',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.href),
    })),
  };
}

interface BlogPostingInput {
  path: string;
  headline: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}

export function blogPostingNode({
  path,
  headline,
  description,
  datePublished,
  dateModified,
  image,
}: BlogPostingInput) {
  return {
    '@type': 'BlogPosting',
    '@id': abs(path) + '#article',
    headline,
    description,
    inLanguage: 'pt-BR',
    url: abs(path),
    ...(image ? { image: abs(image) } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    author: { '@id': abs('/') + '#physician' },
    publisher: { '@id': abs('/') + '#physician' },
    mainEntityOfPage: abs(path),
  };
}

/** Envelope @context + @graph para o <script>. */
export function graph(nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
