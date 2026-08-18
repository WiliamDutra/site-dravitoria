/**
 * Copy curada para o esqueleto da LP isolada /lp/dravitoria-lp.
 *
 * Texto entre colchetes [ ] é PLACEHOLDER — não é dado real, é um lembrete
 * visual do que falta preencher. Nunca publicar um número (anos de prática,
 * pacientes atendidos, fundação de clínica) sem confirmação real, mesma
 * régua já usada em src/data/testimonials.ts.
 *
 * Régua de nomenclatura (dra-vitoria-dados-lp.md, obrigatória): NÃO usar
 * "psiquiatra"/"psiquiatria" em nenhum texto voltado à cliente enquanto o
 * RQE não for validado — usar sempre "médica em saúde mental por
 * telemedicina" ou variações.
 */

// Verbatim do bloco "Sobre resumida" de src/pages/index.astro, + origem
// (Guaramiranga, Serra de Baturité) do brief acima — reforça o gancho do
// público do interior/Nordeste ("do sertão à sua tela").
export const aboutBio =
  'Sou médica, cearense, nascida em Guaramiranga, na Serra de Baturité, e cuido de saúde mental olhando você por inteiro, com ciência e com escuta de verdade. Aos meus pacientes, desde a graduação até hoje, sou muito grata pela confiança. É o que me faz querer ser melhor com você todos os dias.';

export const aboutAnchor =
  'Acolher não é prometer cura. É caminhar junto, com verdade e com ciência.';

// Fonte: dra-vitoria-dados-lp.md. Régua de nomenclatura do brief: ela NÃO
// pode ser chamada de "psiquiatra" em nenhuma peça até a validação do RQE —
// por isso "pós-graduanda em Psiquiatria" (aluna, não título de especialista),
// nunca "psiquiatra" solto.
export const aboutCredentials: string[] = ['Formada pela UFCA', 'Pós-graduanda em Psiquiatria'];

export interface Differentiator {
  icon: string;
  title: string;
  desc: string;
}

// Iteração 3 (estrutura Paola Ferrer, bloco 5 "como eu enxergo o cuidado"):
// 4 cards de filosofia de cuidado, substituindo os 3 fatos de logística de
// antes (receita digital/sigilo/todo o Brasil — esses já aparecem no
// checklist "Oferecemos" de ProblemSection.astro, não se perdeu a info).
// O card "diagnóstico como ferramenta" do original foi trocado por "clareza,
// não rótulo" — ela não pode reivindicar ato diagnóstico (régua do brief).
export const differentiators: Differentiator[] = [
  {
    icon: '⏱',
    title: 'Tempo e escuta',
    desc: 'A consulta é pensada pra você contar a sua história com calma, sem pressa.',
  },
  {
    icon: '▤',
    title: 'Clareza, não rótulo',
    desc: 'Entender com clareza o que está acontecendo é o ponto de partida — nunca um rótulo solto, sempre parte de uma conversa maior.',
  },
  {
    icon: '◍',
    title: 'Medicação com critério',
    desc: 'Quando a medicação entra, é sempre explicada: por quê, como, por quanto tempo.',
  },
  {
    icon: '▦',
    title: 'Acompanhamento e vínculo',
    desc: 'Saúde mental não se resolve numa consulta só; o cuidado é construído com constância, no seu tempo.',
  },
];

// Iteração 3, bloco 4 ("talvez você se reconheça nessas situações") — só
// descreve frustrações do PACIENTE com atendimentos passados, nunca um ato
// clínico da Dra. Vitória, então não esbarra na régua de compliance.
export const painPoints: string[] = [
  'Já passou por consultas rápidas, em que não deu tempo de contar a própria história.',
  'Já se sentiu reduzida a um rótulo, em vez de ser realmente escutada.',
  'Já saiu de uma consulta com uma receita na mão e mais dúvida do que resposta.',
  'Tem receio de ser só "mais um caso" numa agenda lotada.',
];
export const painPointsClosing =
  'Outras pessoas estão buscando ajuda pela primeira vez, com dúvidas sobre como funciona o atendimento online e se dá pra criar vínculo de verdade à distância.';

// Iteração 3, bloco 8 (cartão escuro do AboutDoctor) — verbatim da seção
// "Posicionamento e diferencial" de dra-vitoria-dados-lp.md, não inventado.
export const aboutApproach: string[] = [
  'Escuta atenta, sem pressa',
  'Abordagem funcional integrativa — mente, sono, corpo, história e sentido',
  'Medicação explicada, sem culpa, quando é parte do cuidado',
  'Acompanhamento constante, não um encontro só',
];

// Iteração 3, bloco 9 (reforço final antes do Instagram/FAQ).
export const finalCtaHeading = 'Se fizer sentido pra você dar esse passo agora';
export const finalCtaBody =
  'Aqui, você não é reduzida a um caso ou a uma prescrição. A sua história entra em cada decisão.';

// Iteração 3, bloco 10 (seção Instagram).
export const instagramInvite =
  'Se ainda quiser conhecer um pouco mais antes de marcar, dá uma olhada no que compartilho no Instagram.';
