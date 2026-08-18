/**
 * Prints de avaliação para o bloco 7 (SocialProof).
 *
 * Régua CFM / boa-fé (mesma regra de src/data/testimonials.ts): usar SOMENTE
 * prints reais de avaliações (ex: Google), anonimizados quando preciso e com
 * consentimento. NÃO inventar avaliação nem nota. Todo item aqui é
 * PLACEHOLDER com `consentido: false`; SocialProof.astro só troca o
 * placeholder pela imagem real quando `consentido: true`.
 */

export interface ReviewScreenshot {
  image: string;
  alt: string;
  consentido: boolean;
}

export const reviewScreenshots: ReviewScreenshot[] = [
  { image: '', alt: 'Print real de avaliação, consentido', consentido: false },
  { image: '', alt: 'Segundo print real, consentido', consentido: false },
  { image: '', alt: 'Terceiro print real, consentido', consentido: false },
  { image: '', alt: 'Quarto print real, consentido', consentido: false },
];

/** Só os prints liberados para exibição (dado real consentido). */
export const reviewScreenshotsPublicaveis = reviewScreenshots.filter(
  (r) => r.consentido,
);

export default reviewScreenshots;
