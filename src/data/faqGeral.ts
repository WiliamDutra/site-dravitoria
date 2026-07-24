/**
 * FAQ da página /faq, objeções gerais sobre a consulta online.
 * NÃO recicla as FAQs das páginas de condição (aquelas são específicas).
 * Foco: telemedicina, sigilo, primeira consulta, receita, preço, a maior lacuna do mercado.
 * Régua CFM: sem promessa de resultado; integrativa ≠ anti-remédio.
 */

import { site } from './site';

export interface FAQItem {
  q: string;
  a: string;
}

export const faqGeral: FAQItem[] = [
  {
    q: 'A consulta de psiquiatria online funciona mesmo?',
    a: 'Funciona para a grande maioria dos casos. A psiquiatria é uma das especialidades que melhor se adaptam ao online, porque boa parte da avaliação acontece pela conversa e pela escuta. Há boa evidência de que o acompanhamento remoto tem resultados comparáveis ao presencial em muitos contextos, e hoje saúde mental já é a maior fatia das teleconsultas no Brasil. Quando um caso pede avaliação presencial, isso é dito com transparência.',
  },
  {
    q: 'A telemedicina em psiquiatria é regulamentada?',
    a: 'Sim. A teleconsulta é reconhecida e regulamentada pelo Conselho Federal de Medicina, com as mesmas responsabilidades e o mesmo sigilo do atendimento presencial. Você é atendida por uma médica registrada (CRM/CE 28.844), não por uma plataforma anônima.',
  },
  {
    q: 'Como é a primeira consulta? O que devo esperar?',
    a: 'A primeira consulta é a mais longa e é, acima de tudo, uma conversa. A gente fala com calma sobre a sua história, o que você sente, desde quando, o que já tentou e como está a sua vida hoje. É onde a avaliação médica acontece, sem pressa. Ao final, montamos juntas os próximos passos do cuidado. Ter em mãos exames recentes e a lista dos seus remédios ajuda, mas não é obrigatório.',
  },
  {
    q: 'Psiquiatra online pode passar receita, inclusive de controlado?',
    a: 'Pode. A receita digital tem validade legal em todo o país e é assinada eletronicamente com certificado, o que garante a autenticidade na farmácia, física ou online. Isso inclui as receitas de medicações de controle especial (a "receita azul/branca"), dentro das regras vigentes. Você recebe o documento de forma segura para apresentar na farmácia.',
  },
  {
    q: 'E o sigilo? Minhas informações ficam protegidas?',
    a: 'Sim. Tudo o que é dito na consulta é protegido pelo sigilo médico, exatamente como no presencial, a sua história é sua. A consulta é feita por uma plataforma segura, e o ideal é você escolher um lugar reservado e tranquilo para a nossa conversa. O tratamento dos seus dados segue a LGPD.',
  },
  {
    q: 'Preciso de encaminhamento para marcar?',
    a: 'Não. Você mesma pode agendar diretamente, sem precisar de encaminhamento de outro profissional. O contato é feito pelo WhatsApp, a gente combina o melhor horário e você recebe o link seguro da consulta.',
  },
  {
    q: 'Vocês atendem convênio? Qual o valor da consulta?',
    a: 'O atendimento é particular. Muitos planos oferecem reembolso para consultas de psiquiatria, nesse caso, forneço o recibo e a documentação para você solicitar ao seu convênio. O valor da consulta é combinado no primeiro contato, com transparência, pelo WhatsApp.',
  },
  {
    q: 'A abordagem integrativa significa que você é contra remédios?',
    a: 'Não, de jeito nenhum, esse é o mal-entendido mais comum. Integrativa quer dizer somar: o cuidado clínico (e a medicação, quando é preciso) + o estilo de vida + o sentido. O remédio, quando entra, é parte de um cuidado maior, não o cuidado inteiro, e nunca um sinal de fraqueza. Nunca oriento ninguém a começar ou parar medicação por conta própria: isso é decidido em consulta, com acompanhamento.',
  },
  {
    q: 'Em quanto tempo eu vou melhorar?',
    a: 'Prefiro ser honesta a prometer o que a medicina não garante: cada pessoa e cada quadro têm o seu tempo, e não existe fórmula mágica nem cura da noite pro dia. O que eu posso garantir é o compromisso de caminhar junto, com verdade e com ciência, acompanhando e ajustando o cuidado ao longo do processo. A melhora costuma vir em passos, no seu ritmo.',
  },
  {
    q: 'Estou em crise agora. A consulta serve para emergência?',
    a: `Não, a consulta agendada não é um serviço de emergência ou pronto atendimento. Se você está em sofrimento intenso agora ou pensando em se machucar, por favor ligue para o CVV no ${site.emergencia.cvv} (24h, gratuito e sigiloso) ou procure a emergência mais próxima pelo SAMU ${site.emergencia.samu}. Você não está sozinha, e pedir ajuda agora é o passo mais corajoso.`,
  },
];

export default faqGeral;
