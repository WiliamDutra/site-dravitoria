/**
 * Grid de especialidades da LP isolada (bloco 3), derivado das condições
 * reais já publicadas no site (src/data/conditions.ts) — sem inventar
 * especialidade nova. O campo `icon` é um glifo genérico por enquanto (ver
 * PORTING.md / plano: sem nova dependência de ícones neste esqueleto).
 */
import { clinicalConditions } from '../conditions';

export interface SpecialtyItem {
  title: string;
  desc: string;
  href: string;
  icon: string;
}

// Mesma copy curada já usada em src/pages/index.astro para os cards de condição.
const cardDesc: Record<string, string> = {
  ansiedade:
    'O alarme que não desliga, o corpo em alerta. Entender a raiz, não só apagar o sintoma.',
  depressao: 'Não é fraqueza nem falta de fé. É uma condição de saúde, e ela tem cuidado.',
  esgotamento:
    'Quando o cansaço não passa nem no fim de semana. O corpo não te sabota: te avisa.',
  insonia: 'O sono conversa com a mente. Escutar o que a sua noite diz sobre os seus dias.',
  'saude-mental-da-mulher': 'Cada fase da vida da mulher pede um olhar próprio, com acolhimento.',
};

export const specialties: SpecialtyItem[] = clinicalConditions.map((c) => ({
  title: c.name,
  desc: cardDesc[c.slug] ?? c.metaDescription,
  href: `/${c.slug}`,
  icon: '✦',
}));
