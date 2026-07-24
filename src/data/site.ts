/**
 * Dados do negócio, Dra. Vitória Gomes.
 * Fonte de verdade para identificação médica, canais, disclaimers CFM e emergência.
 *
 * WhatsApp: definido via env PUBLIC_WHATSAPP (ver .env.example); aqui fica o fallback.
 * E-mail e WhatsApp reais já preenchidos.
 */

// WhatsApp real de atendimento: +55 85 99236-4924 (Fortaleza/CE).
// Formato wa.me: só dígitos, com DDI e DDD.
const WHATSAPP =
  (import.meta.env.PUBLIC_WHATSAPP as string | undefined) || '5585992364924';
const SITE_URL =
  (import.meta.env.PUBLIC_SITE_URL as string | undefined) ||
  'https://dravitoriagomes.com.br'; // registrado no Registro.br

export interface SiteData {
  url: string;
  nome: string;
  nomeCompleto: string;
  titulo: string; // "Médica" (termo CFM)
  especialidade: string;
  crm: string;
  rqe?: string; // opcional, preencher se/quando houver
  tagline: string;
  descricaoCurta: string;
  base: { cidade: string; uf: string; regiao: string };
  alcance: string; // telemedicina, Brasil
  canais: {
    whatsapp: string; // só dígitos, formato internacional (wa.me)
    whatsappDisplay: string; // rótulo do botão
    telefoneFormatado: string; // número legível, para exibir
    telefoneLink: string; // formato tel:
    instagram: string;
    instagramUrl: string;
    linktree: string;
    email: string; // PLACEHOLDER
  };
  emergencia: { cvv: string; cvvSite: string; samu: string; caps?: string };
  preco: { exibir: boolean; valor: string; observacao: string };
  identificacaoMedica: string;
  disclaimers: {
    conteudoEducativo: string;
    semDiagnostico: string;
    integrativaSoma: string;
    telemedicina: string;
    sigilo: string;
    emergencia: string;
  };
}

export const site: SiteData = {
  url: SITE_URL,
  nome: 'Dra. Vitória Gomes',
  nomeCompleto: 'Vitória Gomes',
  titulo: 'Médica',
  especialidade: 'Saúde mental · abordagem metabólica',
  crm: 'CRM/CE 28.844',
  // rqe: 'RQE 00000', // habilitar quando houver o registro de qualificação de especialista
  tagline: 'Saúde mental é a pessoa inteira, não só a química do cérebro.',
  descricaoCurta:
    'Psiquiatria funcional integrativa por telemedicina, para todo o Brasil. Um cuidado que olha você por inteiro, o sintoma, o sono, o corpo, a sua história e o seu sentido.',
  base: { cidade: 'Fortaleza', uf: 'CE', regiao: 'Ceará' },
  alcance: 'Atendimento online (telemedicina) para todo o Brasil',
  canais: {
    whatsapp: WHATSAPP,
    whatsappDisplay: 'Falar no WhatsApp',
    telefoneFormatado: '(85) 99236-4924',
    telefoneLink: 'tel:+5585992364924',
    instagram: '@dra.vitoriapsiquiatria',
    instagramUrl: 'https://instagram.com/dra.vitoriapsiquiatria',
    linktree: 'https://linktr.ee/dravitoriagomesd',
    email: 'contato@dravitoriagomes.com.br',
  },
  emergencia: {
    cvv: '188',
    cvvSite: 'https://cvv.org.br',
    samu: '192',
    caps: 'CAPS da sua cidade',
  },
  preco: {
    // Decisão do cliente: NÃO exibir o valor por ora (campo pronto, é só ligar).
    exibir: false,
    valor: 'R$ 500',
    observacao: 'O valor da consulta é combinado no primeiro contato.',
  },
  identificacaoMedica: 'Dra. Vitória Gomes, Médica · CRM/CE 28.844',
  disclaimers: {
    conteudoEducativo:
      'Este conteúdo tem caráter educativo e de acolhimento. Ele não substitui a consulta médica, não faz diagnóstico e não indica tratamento individual.',
    semDiagnostico:
      'Diagnóstico é coisa de consulta, com tempo, escuta e avaliação, nunca de tela ou de mensagem. Aqui a gente informa e acolhe; o cuidado de verdade acontece no encontro.',
    integrativaSoma:
      'Psiquiatria integrativa não é largar o remédio. É somar: o cuidado clínico (e a medicação, quando é preciso) + o estilo de vida + o sentido. O remédio, quando entra, é parte de um cuidado maior, não o cuidado inteiro.',
    telemedicina:
      'A teleconsulta em psiquiatria é regulamentada e reconhecida pelo Conselho Federal de Medicina, com o mesmo sigilo e a mesma seriedade do atendimento presencial.',
    sigilo:
      'Tudo o que é dito na consulta é protegido pelo sigilo médico. Sua história é sua.',
    emergencia:
      'Se você está em sofrimento agora ou pensando em se machucar, ligue para o CVV no 188 (24h, gratuito e sigiloso) ou procure a emergência mais próxima pelo SAMU 192. Você não está sozinha.',
  },
};

/** Monta um link wa.me com mensagem opcional pré-preenchida. */
export function whatsappLink(mensagem?: string): string {
  const base = `https://wa.me/${site.canais.whatsapp}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}

/** Mensagem padrão de agendamento (tom acolhedor, na voz dela). */
export const mensagemAgendamento =
  'Olá, Dra. Vitória! Vim pelo site e gostaria de marcar uma consulta online. 🤍';

export default site;
