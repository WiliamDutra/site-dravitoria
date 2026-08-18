/**
 * Galeria de fotos do bloco 2 (ProblemSection). A Dra. Vitória é 100%
 * telemedicina — não há foto de ambiente físico ainda. Cada slot começa
 * `pronta: false`; enquanto nenhum estiver pronto, ProblemSection.astro
 * renderiza placeholders estáticos em vez da galeria React interativa.
 *
 * Para publicar: preencher `src`/`alt` com a foto real (salva em
 * public/img/dravitoria-lp/) e marcar `pronta: true`.
 */

export interface GallerySlot {
  src: string;
  alt: string;
  pronta: boolean;
}

export const gallerySlots: GallerySlot[] = [
  { src: '', alt: 'SUBSTITUIR: foto 1 — a definir', pronta: false },
  { src: '', alt: 'SUBSTITUIR: foto 2 — a definir', pronta: false },
  { src: '', alt: 'SUBSTITUIR: foto 3 — a definir', pronta: false },
  { src: '', alt: 'SUBSTITUIR: foto 4 — a definir', pronta: false },
  { src: '', alt: 'SUBSTITUIR: foto 5 — a definir', pronta: false },
];

export const gallerySlotsProntos = gallerySlots.filter((s) => s.pronta);

export default gallerySlots;
