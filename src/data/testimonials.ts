/**
 * Depoimentos, estrutura pronta, SEM inventar.
 *
 * ⚠️ RÉGUA CFM / boa-fé: usar SOMENTE relatos reais, anônimos e com consentimento.
 *    NÃO inventar depoimentos nem avaliações de pacientes.
 *    Todos os itens abaixo são PLACEHOLDERS com `consentido: false`, o componente
 *    TestimonialSlider só renderiza itens com `consentido: true`.
 *    Schema Review/AggregateRating NÃO é emitido enquanto não houver nota real.
 *
 * Para publicar: substituir texto/autor por relato real consentido e marcar
 * `consentido: true`. Manter anonimato (iniciais ou "paciente, [cidade/UF]").
 */

export interface Testimonial {
  text: string;
  author: string; // anônimo (iniciais / "paciente, cidade/UF")
  context?: string; // ex.: "ansiedade", "interior do CE" (opcional)
  consentido: boolean;
}

export const testimonials: Testimonial[] = [
  {
    text: 'SUBSTITUIR POR DEPOIMENTO REAL CONSENTIDO, relato anônimo de paciente, com consentimento por escrito. Sem antes/depois sensacionalista; foco no acolhimento e na experiência de ser escutada.',
    author: 'SUBSTITUIR, iniciais/anônimo',
    context: 'exemplo de placeholder',
    consentido: false,
  },
  {
    text: 'SUBSTITUIR POR DEPOIMENTO REAL CONSENTIDO, segundo espaço reservado para relato consentido.',
    author: 'SUBSTITUIR, iniciais/anônimo',
    consentido: false,
  },
  {
    text: 'SUBSTITUIR POR DEPOIMENTO REAL CONSENTIDO, terceiro espaço reservado.',
    author: 'SUBSTITUIR, iniciais/anônimo',
    consentido: false,
  },
];

/** Só os depoimentos liberados para exibição (dado real consentido). */
export const testimonialsPublicaveis = testimonials.filter((t) => t.consentido);

/**
 * Há avaliação real com nota para marcar Review/AggregateRating?
 * Enquanto false, NÃO emitir schema de nota (evita nota fictícia, régua CFM).
 */
export const temAvaliacaoReal = false;

export default testimonials;
