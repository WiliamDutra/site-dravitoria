/**
 * Combos condição × região (SEO programático com CAP).
 *
 * CAP (régua 7B): SOMENTE região-âncora com vínculo real × condições de maior demanda.
 *   { ceara, fortaleza } × { ansiedade, depressao, esgotamento } = no máx. 6 páginas.
 *
 * Cada combo tem uniqueIntro, regionalProblems[] e uniqueFaqs[] que SÓ fazem sentido
 * naquela combinação (condição + realidade regional). Se não desse pra escrever algo
 * genuinamente único e correto, a página NÃO seria gerada.
 *
 * Régua CFM/LGPD em tudo; identificação médica herdada; linka → condição, → região, → /agendar.
 */

export interface ComboFAQ {
  q: string;
  a: string;
}

export interface Combinacao {
  conditionSlug: string; // deve existir em conditions.ts
  regiaoSlug: string; // deve existir em regioes.ts
  metaTitle: string; // <= 60
  metaDescription: string; // <= 155
  heroKicker: string;
  heroHeading: string;
  uniqueIntro: string[]; // cita a condição E a realidade regional juntas
  regionalProblems: string[]; // problemas que só fazem sentido naquele cruzamento
  localNote: string;
  uniqueFaqs: ComboFAQ[];
}

export const combinacoes: Combinacao[] = [
  // ── CEARÁ ─────────────────────────────────────────────────────────────────
  {
    conditionSlug: 'ansiedade',
    regiaoSlug: 'ceara',
    metaTitle: 'Ansiedade: psiquiatra online no Ceará | Dra. Vitória',
    metaDescription:
      'Tratamento da ansiedade com psiquiatra online no Ceará. Cuidado integrativo que chega onde falta especialista. Agende.',
    heroKicker: 'Ansiedade · Ceará',
    heroHeading:
      'Tratamento da ansiedade com psiquiatra online, para quem está no Ceará',
    uniqueIntro: [
      'A ansiedade é a queixa nº1 em saúde mental no Brasil, e no Ceará ela encontra um agravante: a dificuldade de acesso. Quem sente o coração disparar, a mente que não desliga e as noites mal dormidas muitas vezes não tem um psiquiatra por perto, e a espera, ou a viagem até a capital, acaba empurrando o cuidado pra depois. O atendimento online tira esse obstáculo do caminho.',
      'Como cearense, aqui de Fortaleza, eu conheço a nossa realidade: a distância entre as cidades, a cultura do "segura a barra" e o estigma que ainda faz muita gente tratar ansiedade como frescura. Cuidar da ansiedade de quem está no Ceará, por telemedicina, é unir o acesso que faltava a um acolhimento que leva a sua dor a sério.',
    ],
    regionalProblems: [
      'Cidades cearenses sem psiquiatra, o que faz a ansiedade ficar meses sem avaliação.',
      'A viagem longa até Fortaleza que desestimula procurar ajuda antes de "piorar".',
      'O estigma cultural que confunde ansiedade com "frescura" ou "falta de fé".',
      'A dificuldade de manter o acompanhamento, retornos e ajustes, a partir do interior.',
    ],
    localNote:
      'Aqui, tratar a ansiedade não briga com a sua fé nem com a sua história, caminha ao lado delas. A gente cuida do corpo que dispara e da mente que não desliga, com ciência e com escuta, de onde você estiver no Ceará.',
    uniqueFaqs: [
      {
        q: 'Consigo tratar ansiedade sem ir até Fortaleza?',
        a: 'Consegue. Toda a consulta acontece online, de onde você estiver no Ceará, da sua cidade, sem pegar estrada. Isso vale para a primeira consulta e para os retornos, que são justamente onde o cuidado da ansiedade se firma. Você só precisa de internet e de um lugar reservado.',
      },
      {
        q: 'A ansiedade que sinto pode ser por causa da correria e do calor daqui?',
        a: 'Rotina sobrecarregada e noites quentes e mal dormidas podem, sim, alimentar a ansiedade, mas ela costuma ter mais de uma causa, e é isso que a consulta investiga. Em vez de atribuir tudo a um fator só, a gente olha o conjunto: sono, corpo, rotina e história, para cuidar da raiz e não só do sintoma.',
      },
      {
        q: 'Preciso de encaminhamento para marcar?',
        a: 'Não precisa de encaminhamento. Você mesma pode marcar a consulta diretamente pelo WhatsApp, sem intermediários. Se você já tem exames ou uma lista dos remédios que usa, ter em mãos ajuda, mas não é obrigatório para a nossa primeira conversa.',
      },
    ],
  },
  {
    conditionSlug: 'depressao',
    regiaoSlug: 'ceara',
    metaTitle: 'Depressão: psiquiatra online no Ceará | Dra. Vitória',
    metaDescription:
      'Tratamento da depressão com psiquiatra online no Ceará. Cuidado integrativo e acolhedor, sem julgamento e sem estrada. Agende.',
    heroKicker: 'Depressão · Ceará',
    heroHeading: 'Cuidar da depressão com psiquiatra online, para quem está no Ceará',
    uniqueIntro: [
      'Depressão não é fraqueza, nem falta de fé, nem castigo, e no Ceará essa mensagem precisa ser dita em voz alta, porque o estigma aqui ainda faz muita gente sofrer em silêncio, sem procurar ajuda. Some a isso a escassez de psiquiatras no interior e você entende por que tantos casos ficam sem cuidado. O atendimento online existe para furar esse bloqueio.',
      'Eu sou daqui e sei o quanto pesa a ideia de que "reza que passa" ou "isso é besteira". A fé é importante e eu a respeito de verdade, mas depressão é uma condição de saúde, e ela tem tratamento. Cuidar da depressão de quem está no Ceará, por telemedicina, é levar esse tratamento até você com acolhimento e sem julgamento.',
    ],
    regionalProblems: [
      'O estigma nordestino que trata depressão como "frescura" ou "falta de fé" e atrasa a busca por ajuda.',
      'Cidades do interior sem psiquiatra, deixando quadros graves sem avaliação médica.',
      'A viagem até a capital que, para quem já está sem energia, vira uma barreira quase intransponível.',
      'Tratamentos interrompidos por causa da distância dos retornos.',
    ],
    localNote:
      'Você não precisa justificar a sua dor para ter direito a cuidado, nem provar que ela é "grande o suficiente". Aqui a sua história é escutada por inteiro, com a seriedade que ela merece, de onde você estiver no Ceará. E se você está em sofrimento agora, o CVV (188) atende 24h, de graça e em sigilo.',
    uniqueFaqs: [
      {
        q: 'No interior do Ceará, dá pra tratar depressão só pela consulta online?',
        a: 'Na maioria dos casos, sim, a avaliação e o acompanhamento da depressão são majoritariamente clínicos e conversacionais, o que funciona bem no online, inclusive para quem está longe da capital. Se, em algum momento, o seu caso pedir um recurso presencial, eu te oriento com transparência sobre o melhor caminho. O cuidado vem sempre em primeiro lugar.',
      },
      {
        q: 'Tenho medo do que a minha família e a minha cidade vão pensar. Como fica o sigilo?',
        a: 'O sigilo é total e é a base do cuidado: ninguém precisa saber que você faz acompanhamento. A consulta é feita de um lugar reservado, escolhido por você, e tudo o que é dito ali é protegido pelo sigilo médico. Num lugar de laços apertados como o interior, esse cuidado com a privacidade é ainda mais importante, e ele é garantido.',
      },
      {
        q: 'A fé pode fazer parte do meu tratamento?',
        a: 'A sua fé é sua e é acolhida como parte da sua história e do seu sentido, nunca como prescrição ou como substituta do tratamento médico. Tem coisas que a medicina cuida, e tem uma paz que vem de outro lugar: eu respeito e caminho com você nas duas, sem que uma anule a outra.',
      },
    ],
  },
  {
    conditionSlug: 'esgotamento',
    regiaoSlug: 'ceara',
    metaTitle: 'Esgotamento: psiquiatra online no Ceará | Dra. Vitória',
    metaDescription:
      'Burnout e esgotamento com psiquiatra online no Ceará. Quando o cansaço não passa: cuidado integrativo, sem estrada. Agende.',
    heroKicker: 'Esgotamento · Ceará',
    heroHeading:
      'Cuidar do esgotamento com psiquiatra online, para quem está no Ceará',
    uniqueIntro: [
      'Aquele cansaço que o fim de semana não cura tem nome, e não é preguiça: muitas vezes é esgotamento. No Ceará, ele se mistura com a jornada dura de quem trabalha no campo, no comércio, no turismo sazonal, e de quem cuida da casa e da família ao mesmo tempo. E, quando a exaustão chega, quase nunca há um psiquiatra por perto para ajudar a nomear o que está acontecendo.',
      'Como cearense, eu vejo de perto essa cultura do "aguenta que passa", que empurra as pessoas até o limite antes de permitirem cuidar de si. Cuidar do esgotamento de quem está no Ceará, por telemedicina, é oferecer esse cuidado sem exigir mais uma viagem, mais um esforço, de quem já está no fim das forças.',
    ],
    regionalProblems: [
      'A cultura do "segura a barra" que faz a pessoa se esgotar em silêncio antes de pedir ajuda.',
      'Jornadas duras (campo, comércio, turismo sazonal, cuidado familiar) sem rede de apoio em saúde mental.',
      'A falta de psiquiatra no interior, que deixa o esgotamento sem avaliação até virar afastamento ou adoecimento.',
      'A distância que torna inviável o acompanhamento necessário para a recuperação.',
    ],
    localNote:
      'Cuidar de você não é luxo nem fraqueza, é o que te permite continuar cuidando de quem você ama. E dá pra fazer isso de onde você está no Ceará, sem mais uma estrada pela frente.',
    uniqueFaqs: [
      {
        q: 'Como sei se é só cansaço da rotina ou esgotamento de verdade?',
        a: 'A pista principal é a persistência: o cansaço do esgotamento não passa com o descanso, com o fim de semana ou com as férias, e vem acompanhado de irritabilidade, desânimo, queda de rendimento e sintomas no corpo. Essa diferença nem sempre é fácil de enxergar sozinha, e é justamente o que a avaliação médica ajuda a esclarecer, sem rótulos apressados.',
      },
      {
        q: 'Preciso de atestado ou afastamento. Consigo pela consulta online no Ceará?',
        a: 'Quando um afastamento é clinicamente indicado, ele é avaliado e documentado com responsabilidade na consulta, e os documentos (atestado, relatório) têm validade legal, sejam a consulta online ou presencial. Mas o afastamento é uma decisão clínica, feita com você olhando o seu caso, não algo automático. Muitas vezes o cuidado se dá ajustando a rotina, sem necessidade de afastar.',
      },
      {
        q: 'Trabalho o dia inteiro e moro longe. Como encaixo a consulta?',
        a: 'É exatamente para isso que o online serve. A consulta acontece de onde você estiver, de casa, num intervalo, num lugar reservado, sem viagem até a capital e com horário combinado conforme a sua disponibilidade. Para quem está esgotado, tirar a viagem da conta já é parte do alívio.',
      },
    ],
  },

  // ── FORTALEZA ─────────────────────────────────────────────────────────────
  {
    conditionSlug: 'ansiedade',
    regiaoSlug: 'fortaleza',
    metaTitle: 'Ansiedade: psiquiatra online em Fortaleza | Dra. V.',
    metaDescription:
      'Tratamento da ansiedade com psiquiatra online em Fortaleza. Cuidado integrativo, sem trânsito e sem fila. Agende sua consulta.',
    heroKicker: 'Ansiedade · Fortaleza',
    heroHeading:
      'Tratamento da ansiedade com psiquiatra online, para quem está em Fortaleza',
    uniqueIntro: [
      'Em Fortaleza, a ansiedade tem companhias conhecidas: o trânsito, a jornada puxada, a correria de uma capital que não desacelera e as noites quentes que atrapalham o sono. A cidade tem psiquiatras, é verdade, mas ter oferta não é ter tempo, e muita gente vai empurrando o cuidado da mente até a ansiedade tomar conta.',
      'Cuidar da ansiedade de quem está em Fortaleza, por telemedicina, é tirar do caminho os atritos que fazem você adiar: o deslocamento pela cidade, a fila, o horário que não encaixa. Você faz a consulta de um lugar seu, no seu tempo, com uma médica cearense que entende o ritmo daqui.',
    ],
    regionalProblems: [
      'A ansiedade alimentada pelo trânsito, pela jornada intensa e pela correria da capital.',
      'Noites quentes e mal dormidas que retroalimentam a ansiedade e o cansaço.',
      'A agenda cheia dos bons profissionais e a espera, que adiam o início do cuidado.',
      'O tempo perdido em deslocamento, que faz a pessoa desistir de encaixar a consulta.',
    ],
    localNote:
      'Na cidade que não para, a sua ansiedade merece um espaço de calma. A consulta online devolve o tempo que o trânsito rouba, e você cuida de você sem precisar atravessar Fortaleza.',
    uniqueFaqs: [
      {
        q: 'Em Fortaleza, por que fazer consulta de ansiedade online em vez de presencial?',
        a: 'Porque, para a ansiedade, o que mais atrapalha o cuidado costuma ser o atrito de encaixar a consulta na rotina, trânsito, deslocamento, espera. O online remove esse atrito: você faz a consulta de um lugar seu, no horário que funciona, e mantém a continuidade com a mesma médica. Para a maioria dos casos de ansiedade, a eficácia é comparável à do presencial.',
      },
      {
        q: 'O calor e as noites mal dormidas de Fortaleza pioram a ansiedade?',
        a: 'Podem contribuir: noites quentes e sono ruim retroalimentam a ansiedade e o cansaço. Mas a ansiedade quase sempre tem mais de uma causa, e é isso que a consulta investiga, sono, rotina, corpo e história juntos. A gente cuida do que dá para melhorar no seu ambiente e trata a raiz, não só o sintoma.',
      },
      {
        q: 'Consigo receita para ansiedade na mesma consulta?',
        a: 'Quando a medicação é indicada, e nem sempre é, a receita digital é emitida e enviada de forma segura, com validade legal nas farmácias de Fortaleza, inclusive para controlados dentro das regras. Mas a decisão de medicar é clínica e individual, tomada com calma na consulta, nunca automática.',
      },
    ],
  },
  {
    conditionSlug: 'depressao',
    regiaoSlug: 'fortaleza',
    metaTitle: 'Depressão: psiquiatra online em Fortaleza | Dra. V.',
    metaDescription:
      'Tratamento da depressão com psiquiatra online em Fortaleza. Cuidado integrativo e acolhedor, sem julgamento. Agende sua consulta.',
    heroKicker: 'Depressão · Fortaleza',
    heroHeading:
      'Cuidar da depressão com psiquiatra online, para quem está em Fortaleza',
    uniqueIntro: [
      'Em Fortaleza, é possível estar cercada de gente, no meio da correria, e mesmo assim se sentir apagando por dentro. A depressão não escolhe endereço nem depende de ter "motivo": ela mexe com o humor, a energia, o sono e o sentido das coisas. E, mesmo numa capital com oferta de médicos, encontrar tempo e coragem para procurar ajuda é um obstáculo real.',
      'Cuidar da depressão de quem está em Fortaleza, por telemedicina, é oferecer um caminho de menor esforço para quem já está sem energia: sem deslocamento, sem sala de espera, do conforto e do sigilo da sua casa. Com uma médica do seu estado, que te escuta por inteiro e sem julgamento.',
    ],
    regionalProblems: [
      'A solidão dentro da multidão: sentir-se sozinha mesmo cercada pela correria da capital.',
      'A falta de energia que torna o deslocamento até uma consulta presencial uma barreira real.',
      'O estigma que faz confundir depressão com "falta de força de vontade" ou "falta de fé".',
      'Agendas cheias e esperas que adiam o início de um cuidado que é urgente.',
    ],
    localNote:
      'Você não está quebrada, você pode estar cansada de ser olhada pela metade. Em Fortaleza ou em qualquer lugar, a sua dor é levada a sério aqui. E se você está em sofrimento agora, o CVV (188) atende 24h, de graça e em sigilo.',
    uniqueFaqs: [
      {
        q: 'Estou sem energia nem para sair de casa. A consulta online ajuda nisso?',
        a: 'Ajuda muito, e é uma das maiores vantagens do online na depressão. Quando falta energia até para se deslocar, exigir uma ida a um consultório vira mais uma barreira. A consulta de casa reduz esse esforço ao mínimo e torna possível dar o primeiro passo. Depois, os retornos também acontecem sem você precisar sair.',
      },
      {
        q: 'Em Fortaleza há muitos psiquiatras. Por que escolher o atendimento online?',
        a: 'Ter médico na cidade não significa ter acesso fácil: há agendas cheias, esperas e o desgaste do deslocamento, especialmente pesado para quem está deprimida. O online oferece início mais rápido, menos esforço e continuidade com a mesma médica, que acompanha a sua evolução ao longo do tempo, em vez de um atendimento diferente a cada vez.',
      },
      {
        q: 'Antidepressivo prescrito online é seguro e válido?',
        a: 'Sim. Quando um antidepressivo é indicado, ele é prescrito com avaliação, dose e acompanhamento adequados, e a receita digital tem validade legal nas farmácias de Fortaleza. Antidepressivos não viciam como muita gente teme e são retirados de forma gradual quando chega a hora, sempre em consulta, nunca por conta própria.',
      },
    ],
  },
  {
    conditionSlug: 'esgotamento',
    regiaoSlug: 'fortaleza',
    metaTitle: 'Esgotamento: psiquiatra online em Fortaleza | Dra.',
    metaDescription:
      'Burnout e esgotamento com psiquiatra online em Fortaleza. Quando o cansaço não passa: cuidado integrativo, sem trânsito. Agende.',
    heroKicker: 'Esgotamento · Fortaleza',
    heroHeading:
      'Cuidar do esgotamento com psiquiatra online, para quem está em Fortaleza',
    uniqueIntro: [
      'A rotina de Fortaleza cobra caro: a jornada dupla, o trânsito, a pressão do trabalho, o cuidar da casa e da família ao mesmo tempo. Quando o cansaço deixa de passar no fim de semana e vira um esgotamento que te acompanha todo dia, o corpo não está te sabotando, está te avisando. E, na correria da capital, é fácil ignorar esse aviso até ele virar adoecimento.',
      'Cuidar do esgotamento de quem está em Fortaleza, por telemedicina, é oferecer um espaço para parar e olhar essa conta que não fecha, sem que você precise gastar mais uma parte do seu dia escasso no trânsito. Com acolhimento, ciência e uma médica que entende o ritmo daqui.',
    ],
    regionalProblems: [
      'A jornada dupla e a autocobrança de quem "dá conta de tudo" na correria da capital.',
      'O trânsito e as distâncias que consomem o tempo de descanso e agravam a exaustão.',
      'A cultura de produtividade que trata o esgotamento como fraqueza, e não como sinal de alerta.',
      'A dificuldade de encaixar cuidado na agenda de quem já está no limite.',
    ],
    localNote:
      'Quem se esgota quase sempre é quem cuida de todo mundo, menos de si. Cuidar de você não é egoísmo: é o que sustenta o resto. E dá pra começar sem gastar mais uma hora no trânsito de Fortaleza.',
    uniqueFaqs: [
      {
        q: 'Vivo exausta com a rotina de Fortaleza. Isso é caso de psiquiatra?',
        a: 'Pode ser, sim, sobretudo quando a exaustão não passa com o descanso e vem com irritabilidade, desânimo, queda de rendimento e sintomas no corpo. Nem todo cansaço é esgotamento clínico, e às vezes há ansiedade ou depressão por baixo. A avaliação médica ajuda a diferenciar e a definir o cuidado certo, sem exagero e sem minimizar.',
      },
      {
        q: 'Como a consulta online ajuda quem já não tem tempo para nada?',
        a: 'Exatamente por respeitar o seu tempo. Você não perde horas no trânsito nem em sala de espera: a consulta acontece de um lugar seu, no horário combinado. Para quem está esgotado em Fortaleza, tirar o deslocamento da conta já é parte do cuidado, e torna possível manter o acompanhamento sem sobrecarregar ainda mais a rotina.',
      },
      {
        q: 'O esgotamento pode estar escondendo ansiedade ou depressão?',
        a: 'Pode, e é comum. O esgotamento frequentemente coexiste com ansiedade e depressão, e um pode mascarar o outro. Por isso a consulta não olha só o cansaço isolado: investiga o conjunto, para tratar o que realmente está acontecendo com você, e não apenas o sintoma mais visível.',
      },
    ],
  },
];

// ── Helpers ─────────────────────────────────────────────────────────────────
export function getCombo(
  regiaoSlug: string,
  conditionSlug: string
): Combinacao | undefined {
  return combinacoes.find(
    (c) => c.regiaoSlug === regiaoSlug && c.conditionSlug === conditionSlug
  );
}

export function combosDaRegiao(regiaoSlug: string): Combinacao[] {
  return combinacoes.filter((c) => c.regiaoSlug === regiaoSlug);
}

export default combinacoes;
