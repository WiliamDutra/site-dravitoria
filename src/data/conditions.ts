/**
 * Condições e serviços, conteúdo ÚNICO por página (na voz da Dra. Vitória).
 *
 * Regra anti-conteúdo-raso: a estrutura (template) é compartilhada, mas a UNICIDADE
 * mora aqui. Cada item traz uniqueIntro própria, FAQs específicas, sintomas e o
 * "como o cuidado integrativo funciona PARA AQUELA condição". Nunca template com o
 * nome trocado.
 *
 * Régua CFM: sem promessa de cura/superlativo; sem diagnóstico à distância;
 * integrativa SOMA (não é anti-remédio). H1/metaTitle/metaDescription seguem a CSV.
 */

export interface FAQ {
  q: string;
  a: string;
}

export interface HowStep {
  title: string;
  body: string;
}

export interface Subtype {
  name: string;
  desc: string;
}

export interface RelatedLink {
  label: string;
  href: string;
  note?: string;
}

export interface Condition {
  slug: string;
  name: string;
  navLabel: string;
  cluster: string;
  keyword: string;
  metaTitle: string; // <= 60
  metaDescription: string; // <= 155
  h1: string; // da CSV
  heroKicker: string;
  heroHeading: string; // na voz dela
  anchorPhrase: string; // 1 frase-âncora da copy mestra
  uniqueIntro: string[]; // parágrafos únicos
  storySnippet?: string; // storytelling curto (conta antes de ensinar)
  symptoms?: { title: string; intro?: string; items: string[] };
  subtypes?: { title: string; intro?: string; items: Subtype[] };
  howCareWorks: { title: string; intro?: string; steps: HowStep[] };
  whenToSeekHelp?: { title: string; body: string; items?: string[] };
  faqs: FAQ[];
  relatedContent: RelatedLink[];
  emergencyNote: boolean; // exibe EmergencyBanner (CVV 188)
  ctaHeading: string; // CTA que referencia a condição
  ctaBody: string;
  cfmDisclaimer: string;
  isPillar?: boolean;
  order: number;
}

const DISCLAIMER_PADRAO =
  'Este conteúdo é educativo e acolhedor: ajuda a entender, mas não faz diagnóstico e não substitui a consulta. Cada história é única e merece uma avaliação médica com calma.';

export const conditions: Condition[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // PÁGINA-PILAR DE MARCA
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'psiquiatria-integrativa',
    name: 'Psiquiatria Funcional Integrativa',
    navLabel: 'Psiquiatria Integrativa',
    cluster: 'Integrativa (Pilar)',
    keyword: 'psiquiatria integrativa o que é',
    metaTitle: 'Psiquiatria Integrativa | Dra. Vitória Gomes',
    metaDescription:
      'Cuidar da mente olhando a pessoa inteira: sintoma, sono, corpo, história e sentido. Entenda a abordagem integrativa e agende.',
    h1: 'O que é psiquiatria funcional integrativa',
    heroKicker: 'A abordagem',
    heroHeading:
      'Cuidar da mente é cuidar da pessoa inteira, não só de um pedaço dela.',
    anchorPhrase:
      'Saúde mental não é só o que se passa na sua cabeça, é o corpo inteiro, a sua história e o seu sentido de vida.',
    uniqueIntro: [
      'Deixa eu te explicar com calma o que eu faço. Psiquiatria funcional integrativa é uma forma de cuidar da saúde mental que não olha só o sintoma isolado, ela olha você por inteiro: o que você sente, como você dorme, como o seu corpo anda respondendo, a sua história, as suas relações e aquilo que dá sentido aos seus dias. Não é uma técnica milagrosa nem uma promessa da noite pro dia. É medicina, com ciência e com escuta.',
      'Existem, na prática, três caminhos diante de uma mente que sofre. O primeiro é empurrar com a barriga, "vai passar", "é só força de vontade". O segundo é cuidar só do sintoma, silenciar o que incomoda e seguir, o que às vezes alivia, mas deixa a causa intacta. E o terceiro é cuidar da pessoa inteira: olhar o sintoma, sim, e também o sono, o corpo, a história, as relações e o sentido. É esse terceiro caminho que eu escolhi caminhar com você.',
      'E tem uma coisa importante que eu preciso deixar clara logo de início, porque gera muita confusão: integrativa não é ser contra remédio. O remédio, quando é preciso, entra sem culpa, como parte de um cuidado maior, não como o cuidado todo, e não como um fracasso seu. Somar não é substituir. É por isso que eu chamo de integrativa: porque integra o que a medicina tem de melhor com o cuidado da sua vida.',
    ],
    storySnippet:
      'Muita gente chega até mim depois de anos se sentindo "só da cabeça", tratada como mais um diagnóstico na fila. E o que eu mais escuto no fim da primeira consulta é: "foi a primeira vez que alguém me ouviu inteira". É disso que se trata.',
    symptoms: {
      title: 'Quando esse olhar mais amplo faz diferença',
      intro:
        'Não é sobre um sintoma só. É sobre aquele conjunto de coisas que, olhadas separadas, parecem não ter explicação, e que, olhadas juntas, começam a fazer sentido:',
      items: [
        'Você já tratou o sintoma, mas ele volta, ou troca de lugar.',
        'O corpo entrou na conversa: sono ruim, cansaço que não passa, tensão, estômago, libido que sumiu.',
        'Você se sente "funcionando no automático", cumprindo o dia sem se reconhecer mais ali dentro.',
        'Faltou, em algum atendimento, alguém sentar e olhar a sua história por inteiro, sem pressa.',
        'Você sente que precisa de um cuidado que junte as pontas, não que trate cada peça num consultório diferente.',
      ],
    },
    howCareWorks: {
      title: 'Como esse cuidado acontece na prática',
      intro:
        'Integrar não é fazer "mais coisa", é fazer com sentido. Na prática, o cuidado se organiza em camadas que conversam entre si:',
      steps: [
        {
          title: 'Escuta e avaliação clínica de verdade',
          body: 'A consulta começa pela sua história, não pela receita. Entender o que você sente, desde quando, o que já tentou, como é a sua vida hoje. É a base médica de tudo, com tempo para escutar.',
        },
        {
          title: 'O corpo na conversa',
          body: 'Sono, energia, alimentação, movimento, dores, ritmo hormonal e intestinal: o corpo fala com a mente o tempo todo. Investigar isso, inclusive com exames, quando faz sentido, muda o que a gente entende do quadro.',
        },
        {
          title: 'Medicação quando é preciso, com clareza',
          body: 'Se o tratamento pede medicação, ela entra explicada: por que, o que esperar, por quanto tempo, quais os cuidados. Sem culpa e sem exagero. E, quando não é preciso, também está tudo bem.',
        },
        {
          title: 'Estilo de vida que sustenta o tratamento',
          body: 'Pequenos ajustes possíveis de sono, rotina e movimento, não uma lista impossível de regras. Aquilo que cabe na sua vida real e que ajuda o cuidado a se firmar.',
        },
        {
          title: 'Sentido e acompanhamento',
          body: 'O que te dá sentido também é parte da saúde. E cuidar é caminhar junto: reavaliar, ajustar, acompanhar. Não é um encontro só, é um processo com companhia.',
        },
      ],
    },
    whenToSeekHelp: {
      title: 'Você não precisa estar no fundo do poço pra merecer cuidado',
      body: 'Esse é um dos mitos que mais adoecem as pessoas: a ideia de que só "vale" procurar ajuda quando não dá mais. Não é assim. Se o seu jeito de viver anda pesado, se você se reconhece em alguma coisa que leu aqui, já é motivo suficiente pra olhar isso com calma e com companhia.',
    },
    faqs: [
      {
        q: 'Psiquiatria integrativa é contra remédio?',
        a: 'Não. Esse é o mal-entendido mais comum. Integrativa quer dizer que a medicação, quando é preciso, soma com o cuidado do estilo de vida, do corpo e do sentido. Ela é parte de um cuidado maior, não o cuidado inteiro, e nunca um sinal de fraqueza. Nunca oriento ninguém a parar remédio por conta própria: qualquer ajuste é feito em consulta, com acompanhamento.',
      },
      {
        q: 'É medicina de verdade ou terapia alternativa?',
        a: 'É medicina, baseada em ciência. Integrativa não significa abrir mão do rigor clínico, significa ampliar o olhar para além do sintoma isolado, considerando também sono, corpo, rotina, história e sentido. Tudo dentro da avaliação médica, com diagnóstico, quando há, feito na consulta.',
      },
      {
        q: 'Em que essa abordagem é diferente da psiquiatria "tradicional"?',
        a: 'A diferença não é ser contra a psiquiatria clássica, é o tempo de escuta e a amplitude do olhar. Em vez de mirar só o sintoma para silenciá-lo, a gente investiga o que está acontecendo com você por inteiro, e monta um cuidado que junta as pontas. A medicação continua disponível quando é a melhor escolha.',
      },
      {
        q: 'A fé entra no tratamento?',
        a: 'A dimensão de sentido, inclusive a espiritual, para quem a tem, é acolhida como parte da pessoa, nunca como prescrição ou proselitismo. Eu caminho com você respeitando a sua crença, qualquer que seja ela. Tem coisas que a medicina cuida, e tem uma paz que vem de outro lugar: eu respeito as duas.',
      },
    ],
    relatedContent: [
      { label: 'Ansiedade', href: '/ansiedade' },
      { label: 'Depressão', href: '/depressao' },
      { label: 'Esgotamento e burnout', href: '/esgotamento' },
      { label: 'Insônia e sono', href: '/insonia' },
      { label: 'Saúde mental da mulher', href: '/saude-mental-da-mulher' },
      {
        label: 'Como funciona a consulta online',
        href: '/psiquiatra-online',
      },
    ],
    emergencyNote: false,
    ctaHeading: 'Talvez seja a hora de se olhar por inteiro',
    ctaBody:
      'Se isso aqui fez sentido pra você, o próximo passo é simples: uma conversa, com calma e com companhia. A consulta é online, de onde você estiver.',
    cfmDisclaimer: DISCLAIMER_PADRAO,
    isPillar: true,
    order: 1,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PILAR, PSIQUIATRA ONLINE (hub do cluster geo)
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'psiquiatra-online',
    name: 'Psiquiatra Online',
    navLabel: 'Psiquiatra Online',
    cluster: 'Marca',
    keyword: 'psiquiatra online consulta',
    metaTitle: 'Psiquiatra Online | Dra. Vitória Gomes',
    metaDescription:
      'Como é a consulta de psiquiatria online: acolhimento, escuta, avaliação e acompanhamento. Atendimento em todo o Brasil.',
    h1: 'Psiquiatra online: como funciona',
    heroKicker: 'Telemedicina',
    heroHeading:
      'Um cuidado de verdade cabe numa tela, com o mesmo olho no olho, de onde você estiver.',
    anchorPhrase: 'Você não precisa atravessar isso sozinha.',
    uniqueIntro: [
      'Se você nunca fez uma consulta de psiquiatria online, é natural ter dúvida: "será que funciona pela tela? será que é a mesma coisa?". Deixa eu te explicar com calma, porque essa é uma das perguntas que eu mais escuto, e a resposta acalma muita gente.',
      'A teleconsulta em psiquiatria é regulamentada e reconhecida pelo Conselho Federal de Medicina. A psiquiatria, aliás, é uma das especialidades que melhor se adaptam ao online: boa parte da avaliação acontece pela conversa, pela escuta, pelo tempo dedicado a entender você. E os dados mostram isso na prática, hoje, psiquiatria e psicologia já são a maior fatia das teleconsultas de saúde no Brasil.',
      'Para quem mora longe de um psiquiatra, o online não é só conveniência, é acesso. O Brasil tem os especialistas concentrados no Sudeste e no Sul, e regiões inteiras ficam sem cobertura. A consulta online dissolve essa distância: você tem um cuidado médico de qualidade sem precisar pegar estrada, sem sair do seu ambiente seguro.',
    ],
    symptoms: {
      title: 'Para quem a consulta online costuma ser um bom caminho',
      items: [
        'Você mora numa cidade sem psiquiatra, ou com fila e espera longa.',
        'A rotina é apertada e sair para uma consulta presencial é difícil.',
        'Você se sente mais à vontade falando do seu próprio ambiente, num lugar seu.',
        'Você já faz acompanhamento e quer manter a continuidade morando em qualquer lugar do Brasil.',
        'Você quer uma médica com nome e rosto, não um plantão anônimo que troca a cada consulta.',
      ],
    },
    howCareWorks: {
      title: 'Como é a consulta, do primeiro contato ao acompanhamento',
      steps: [
        {
          title: 'O agendamento',
          body: 'Você fala comigo (ou com a minha equipe) pelo WhatsApp, a gente combina o melhor horário e você recebe o link seguro da consulta. Sem burocracia.',
        },
        {
          title: 'A primeira consulta',
          body: 'É a mais longa. A gente conversa com calma sobre a sua história, o que você sente, o que já tentou, como está a sua vida hoje. É onde a avaliação médica acontece, com tempo para escutar, não no corre-corre.',
        },
        {
          title: 'O plano de cuidado',
          body: 'A partir daí, montamos juntas o caminho: o que investigar, se há indicação de medicação (e por quê), quais ajustes de rotina fazem sentido. Tudo explicado, sem você sair com mais dúvida do que chegou.',
        },
        {
          title: 'Receita e documentos no online',
          body: 'A receita digital tem validade legal e é enviada para você de forma segura, inclusive receitas de medicações controladas, dentro das regras. Atestados e relatórios, quando necessários, também.',
        },
        {
          title: 'O acompanhamento',
          body: 'Cuidar não é um encontro só. A gente reavalia, ajusta o que precisa e acompanha a sua evolução ao longo do tempo. Você não fica sozinha entre uma consulta e outra.',
        },
      ],
    },
    whenToSeekHelp: {
      title: 'E o sigilo? E se eu não me sentir à vontade?',
      body: 'A consulta online tem o mesmo sigilo médico do presencial: o que é dito ali é protegido, e sua história é sua. O ideal é escolher um lugar reservado e tranquilo para a nossa conversa. E se, em algum momento, o seu caso pedir um encaminhamento presencial, eu te oriento com transparência, o cuidado vem sempre em primeiro lugar.',
    },
    faqs: [
      {
        q: 'Psiquiatra online pode passar receita, inclusive de remédio controlado?',
        a: 'Pode. A receita digital tem validade legal em todo o país e é assinada eletronicamente com certificado, o que garante autenticidade na farmácia. Isso inclui as chamadas receitas de controle especial (a "receita azul/branca"), dentro das regras vigentes. Você recebe o documento de forma segura e apresenta na farmácia física ou online.',
      },
      {
        q: 'A consulta online funciona tão bem quanto a presencial?',
        a: 'Para a maior parte dos casos em psiquiatria, sim, a avaliação é majoritariamente clínica e conversacional, e há boa evidência de que o acompanhamento remoto tem resultados comparáveis ao presencial em diversos contextos. Quando um caso específico pede avaliação presencial, isso é dito com clareza e você é orientada sobre o melhor caminho.',
      },
      {
        q: 'O que eu preciso ter para a consulta?',
        a: 'Um celular ou computador com câmera e internet, e um lugar reservado onde você possa falar à vontade. Só isso. Se você tiver exames recentes ou uma lista dos remédios que usa, ter em mãos ajuda, mas não é obrigatório para a primeira conversa.',
      },
      {
        q: 'Vocês atendem convênio?',
        a: 'O atendimento é particular. Muitos planos oferecem reembolso para consultas de psiquiatria, nesse caso, eu forneço o recibo e a documentação necessária para você solicitar ao seu convênio. Vale confirmar as regras de reembolso com o seu plano.',
      },
    ],
    relatedContent: [
      {
        label: 'O que é psiquiatria integrativa',
        href: '/psiquiatria-integrativa',
      },
      { label: 'Ansiedade', href: '/ansiedade' },
      { label: 'Depressão', href: '/depressao' },
      { label: 'Perguntas frequentes', href: '/faq' },
    ],
    emergencyNote: false,
    ctaHeading: 'De onde você estiver, dá pra começar a se cuidar',
    ctaBody:
      'A primeira consulta é uma conversa. Se você sente que é a hora, vamos marcar, o caminho é simples e o atendimento é para todo o Brasil.',
    cfmDisclaimer: DISCLAIMER_PADRAO,
    isPillar: true,
    order: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ANSIEDADE
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'ansiedade',
    name: 'Ansiedade',
    navLabel: 'Ansiedade',
    cluster: 'Integrativa',
    keyword: 'tratamento ansiedade psiquiatra',
    metaTitle: 'Ansiedade | Tratamento com Dra. Vitória Gomes',
    metaDescription:
      'Ansiedade tem causas no corpo, na rotina e na história. Tratamento médico integrativo, online. Saiba quando buscar ajuda.',
    h1: 'Tratamento da ansiedade com olhar integrativo',
    heroKicker: 'Ansiedade',
    heroHeading:
      'A ansiedade não é frescura, muitas vezes é o corpo pedindo um cuidado que ninguém escutou ainda.',
    anchorPhrase:
      'A pergunta não é só "o que você tem". É "o que está acontecendo com você".',
    uniqueIntro: [
      'Deixa eu te falar uma coisa com calma. A ansiedade não vive só na sua cabeça, ela mora no corpo. É o coração que dispara, o ar que parece faltar, o estômago que embrulha, a noite que não descansa, a mente que não desliga. Quando alguém te diz que "é só se acalmar", essa pessoa não entendeu o que está acontecendo com você.',
      'Um pouco de ansiedade é normal e até útil, ela nos prepara para o que importa. O problema é quando ela passa a mandar na sua vida: quando o alarme fica ligado o tempo todo, sem perigo real, e começa a te esgotar. A ansiedade é a queixa nº1 em saúde mental no Brasil, e entre as mulheres é ainda mais presente. Você não está sozinha nisso, e não é exagero seu.',
      'No cuidado integrativo, a gente não trata só o sintoma para silenciá-lo. A gente investiga por que esse alarme está tão sensível: como anda o seu sono, a sua rotina, o seu corpo, a sua história, aquilo que te sobrecarrega. E, quando a medicação é a melhor escolha, ela entra sem culpa, como parte de um cuidado maior, não como o cuidado inteiro.',
    ],
    storySnippet:
      'Quantas vezes você já ouviu (ou disse pra si mesma) "é só ansiedade, vai passar"? A verdade é que "só ansiedade" pode roubar o sono, a paz e a alegria de viver. Levar isso a sério não é fraqueza, é cuidado.',
    symptoms: {
      title: 'Como a ansiedade costuma aparecer',
      intro:
        'Ela raramente chega só na forma de "preocupação". Muitas vezes bate primeiro no corpo:',
      items: [
        'Coração acelerado, falta de ar, aperto no peito, tremor.',
        'Tensão muscular, dor de cabeça, mandíbula travada, estômago embrulhado.',
        'Mente que não para, pensamento acelerado, dificuldade de se concentrar.',
        'Sono ruim: custa a pegar no sono ou acorda no meio da madrugada.',
        'Irritabilidade, cansaço, sensação de estar sempre "em alerta".',
        'Evitar situações, lugares ou conversas por medo de passar mal.',
      ],
    },
    subtypes: {
      title: 'A ansiedade tem mais de um rosto',
      intro:
        'Entender qual é o "formato" da sua ansiedade ajuda a cuidar dela do jeito certo. Alguns dos mais comuns:',
      items: [
        {
          name: 'Transtorno de ansiedade generalizada (TAG)',
          desc: 'Preocupação excessiva e difícil de controlar, na maior parte dos dias, com tensão e cansaço.',
        },
        {
          name: 'Síndrome do pânico',
          desc: 'Crises intensas e súbitas de medo, com sintomas físicos fortes, e o medo de que aconteça de novo.',
        },
        {
          name: 'Ansiedade social',
          desc: 'Medo intenso de julgamento em situações sociais, que passa a limitar a vida e as escolhas.',
        },
        {
          name: 'Ansiedade ligada a fases da vida',
          desc: 'Períodos de sobrecarga, luto, mudanças, provas ou puerpério que acendem o alarme.',
        },
      ],
    },
    howCareWorks: {
      title: 'Como o cuidado integrativo trata a ansiedade',
      steps: [
        {
          title: 'Entender a raiz, não só apagar o alarme',
          body: 'A gente investiga o que mantém a sua ansiedade acesa: sono, rotina, sobrecarga, questões do corpo e da história. Tratar só o sintoma alivia, mas deixa a causa intacta.',
        },
        {
          title: 'Cuidar do corpo que dispara',
          body: 'Sono, cafeína, movimento, respiração, ritmo do dia, coisas concretas que acalmam o sistema de alarme e sustentam o tratamento.',
        },
        {
          title: 'Medicação, quando é preciso',
          body: 'Em alguns casos, a medicação ajuda a "baixar o volume" para você conseguir trabalhar as causas. Ela entra explicada, na dose certa, com acompanhamento, nunca por conta própria.',
        },
        {
          title: 'Acompanhar de perto',
          body: 'A ansiedade melhora em processo. A gente ajusta o cuidado ao longo do tempo, no seu ritmo, sem pressa e sem julgamento.',
        },
      ],
    },
    whenToSeekHelp: {
      title: 'Quando é hora de buscar ajuda',
      body: 'Vale procurar um médico quando a ansiedade passa a atrapalhar o seu dia, o seu sono, o seu trabalho ou as suas relações, ou quando você já vive evitando coisas por medo de passar mal.',
      items: [
        'Crises de pânico ou medo intenso e recorrente.',
        'Ansiedade que dura semanas e não cede.',
        'Sintomas físicos frequentes sem causa clínica encontrada.',
        'Uso de álcool ou remédios por conta própria para "aguentar".',
      ],
    },
    faqs: [
      {
        q: 'Ansiedade tem cura?',
        a: 'Prefiro ser honesta em vez de prometer o que a medicina não garante: mais do que "cura", a gente busca controle e qualidade de vida. Com o cuidado certo, a grande maioria das pessoas volta a viver bem, com a ansiedade num patamar que não manda mais na vida. O caminho existe, e ele é individual, avaliado na consulta.',
      },
      {
        q: 'Preciso tomar remédio para ansiedade?',
        a: 'Depende do seu caso, e isso é decidido na consulta, não pela internet. Nem toda ansiedade precisa de medicação; muita coisa se resolve com mudança de rotina e acompanhamento. Quando o remédio é indicado, ele é uma ferramenta de cuidado, não um fracasso, e sempre com dose e tempo avaliados de perto.',
      },
      {
        q: 'Como sei se é ansiedade normal ou transtorno?',
        a: 'A ansiedade vira um problema de saúde quando é desproporcional, frequente e começa a atrapalhar a sua vida, sono, trabalho, relações, ou quando você passa a evitar coisas por medo. Essa linha nem sempre é fácil de enxergar sozinha, e é exatamente o que a avaliação médica ajuda a esclarecer, sem rótulos apressados.',
      },
      {
        q: 'Sinto sintomas físicos, mas os exames deram normais. É ansiedade?',
        a: 'Pode ser, e é muito comum. A ansiedade se manifesta fortemente no corpo (coração, respiração, estômago, músculos), e é frequente a pessoa investigar tudo e não encontrar uma causa clínica. Isso não quer dizer que "não é nada": quer dizer que o cuidado precisa incluir a mente e o corpo juntos.',
      },
    ],
    relatedContent: [
      {
        label: 'O que é psiquiatria integrativa',
        href: '/psiquiatria-integrativa',
      },
      { label: 'Insônia e sono', href: '/insonia' },
      { label: 'Esgotamento e burnout', href: '/esgotamento' },
      {
        label: 'Artigo: Ansiedade não é frescura',
        href: '/blog/ansiedade-nao-e-frescura',
      },
    ],
    emergencyNote: true,
    ctaHeading: 'Se a ansiedade anda mandando na sua vida, vamos olhar isso juntas',
    ctaBody:
      'Você não precisa continuar em alerta o tempo todo. A consulta é online, com calma e sem julgamento, de onde você estiver.',
    cfmDisclaimer: DISCLAIMER_PADRAO,
    order: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DEPRESSÃO
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'depressao',
    name: 'Depressão',
    navLabel: 'Depressão',
    cluster: 'Integrativa',
    keyword: 'tratamento depressão psiquiatra online',
    metaTitle: 'Depressão | Tratamento com Dra. Vitória Gomes',
    metaDescription:
      'Depressão não é fraqueza nem falta de fé. Tratamento médico integrativo e acolhedor, online. Entenda e busque ajuda.',
    h1: 'Depressão: cuidar da pessoa inteira',
    heroKicker: 'Depressão',
    heroHeading:
      'Depressão não é fraqueza, nem falta de fé, nem falta de gratidão. É uma condição de saúde, e ela tem cuidado.',
    anchorPhrase: 'Você não está quebrada. Você está cansada de ser olhada pela metade.',
    uniqueIntro: [
      'Preciso te dizer isso com todo o carinho, porque talvez ninguém tenha dito antes: depressão não é frescura, não é falta de força de vontade e não é castigo. Não é "falta de fé". É uma condição de saúde, que mexe com o humor, com a energia, com o sono, com o corpo e com o sentido das coisas. E, como toda condição de saúde, ela merece cuidado, não julgamento.',
      'A depressão nem sempre tem a cara que a gente imagina. Às vezes não é chorar o dia todo; é um vazio, uma falta de vontade que não passa, um cansaço que o descanso não cura, uma sensação de estar vivendo pela metade. Você continua indo trabalhar, cuidando de todo mundo, e por dentro, apagando aos poucos. Isso também é depressão.',
      'No cuidado integrativo, a gente olha a pessoa inteira: o que você sente, como o seu corpo e o seu sono estão, a sua história, o que te sobrecarrega e o que te dá sentido. O tratamento pode incluir medicação, sim, e ela, quando é preciso, é cuidado, não fracasso. Mas é parte do caminho, não o caminho inteiro.',
    ],
    storySnippet:
      'Tem uma frase que eu escuto muito: "eu tenho tudo pra estar bem, por que eu me sinto assim?". Depressão não pede permissão nem escolhe quem "merece". Se você se sente assim, isso já basta pra buscar ajuda, você não precisa justificar a sua dor.',
    symptoms: {
      title: 'Sinais que merecem atenção',
      intro:
        'A depressão costuma aparecer aos poucos, misturada com a rotina. Alguns sinais frequentes:',
      items: [
        'Tristeza, vazio ou irritabilidade na maior parte dos dias.',
        'Perda de interesse ou prazer em coisas que antes importavam.',
        'Cansaço e falta de energia que o descanso não resolve.',
        'Alterações no sono (dormir demais ou de menos) e no apetite.',
        'Dificuldade de concentração, memória e de tomar decisões.',
        'Sentimento de culpa, de inutilidade ou de ser um peso.',
        'Pensamentos de que não valeria a pena continuar.',
      ],
    },
    subtypes: {
      title: 'A depressão também tem formas diferentes',
      items: [
        {
          name: 'Episódio depressivo',
          desc: 'Um período de sintomas mais intensos, com começo mais claro, muitas vezes ligado a uma sobrecarga ou perda.',
        },
        {
          name: 'Depressão persistente',
          desc: 'Um humor baixo e arrastado que dura muito tempo, a pessoa às vezes nem lembra de como é se sentir bem.',
        },
        {
          name: 'Depressão no pós-parto e em fases hormonais',
          desc: 'Períodos de maior vulnerabilidade na vida da mulher, que pedem um olhar específico e acolhedor.',
        },
        {
          name: 'Depressão com forte componente físico',
          desc: 'Quando os sintomas aparecem mais no corpo, dores, cansaço, sono, do que na queixa de tristeza.',
        },
      ],
    },
    howCareWorks: {
      title: 'Como o cuidado integrativo trata a depressão',
      steps: [
        {
          title: 'Acolher primeiro, sem julgamento',
          body: 'Antes de qualquer coisa, entender a sua história com calma. Depressão se agrava no isolamento e na culpa, e alivia quando alguém finalmente escuta você por inteiro.',
        },
        {
          title: 'Avaliar corpo e vida junto',
          body: 'Sono, tireoide, deficiências, uso de substâncias, sobrecarga, luto: coisas do corpo e da vida que sustentam ou aliviam a depressão. Investigar isso muda o cuidado.',
        },
        {
          title: 'Tratamento medicamentoso quando indicado',
          body: 'Em muitos casos, o antidepressivo é parte importante do tratamento, e não vicia nem "muda quem você é". Ele entra explicado, com tempo e acompanhamento, e é reavaliado ao longo do caminho.',
        },
        {
          title: 'Reconstruir sentido e rotina',
          body: 'Aos poucos, retomar pequenas coisas, ritmo e o que dá sentido. Não uma lista de cobranças, passos possíveis, no seu tempo, com companhia.',
        },
      ],
    },
    whenToSeekHelp: {
      title: 'Quando procurar ajuda, e quando é urgente',
      body: 'Vale procurar um médico quando os sintomas duram mais de duas semanas ou atrapalham a sua vida. E é urgente buscar ajuda agora se surgirem pensamentos de morte ou de se machucar.',
      items: [
        'Sintomas que persistem por semanas e não cedem.',
        'Vontade de se isolar de tudo e de todos.',
        'Sensação de que a vida não vale a pena.',
        'Qualquer pensamento de se machucar, isso é emergência.',
      ],
    },
    faqs: [
      {
        q: 'Depressão tem cura ou é para a vida toda?',
        a: 'A maioria dos episódios de depressão responde bem ao tratamento, e muitas pessoas se recuperam plenamente. Em vez de prometer "cura garantida", prefiro dizer a verdade: com o cuidado certo, dá para voltar a viver bem, e, em alguns casos, a depressão pode retornar em momentos de vulnerabilidade, por isso o acompanhamento importa. Cada história é avaliada individualmente.',
      },
      {
        q: 'Antidepressivo vicia ou muda a minha personalidade?',
        a: 'Antidepressivos não causam dependência como as pessoas temem, e não "mudam quem você é", o objetivo é justamente devolver você a você. Eles são retirados de forma gradual e planejada quando chega a hora, sempre em consulta. O que eu nunca oriento é começar ou parar por conta própria: isso é decidido em conjunto, com acompanhamento.',
      },
      {
        q: 'É possível tratar depressão sem remédio?',
        a: 'Em casos leves, muitas vezes sim, com acompanhamento, mudanças de rotina e psicoterapia. Em casos moderados a graves, a medicação costuma ser parte importante do cuidado. Não existe resposta única: a melhor escolha é definida na consulta, olhando a sua história por inteiro, e nunca é imposta.',
      },
      {
        q: 'Sinto que "não tenho motivo" para estar deprimida. Isso é normal?',
        a: 'É extremamente comum, e não invalida o que você sente. A depressão não escolhe quem "merece" nem depende de ter um motivo visível; ela envolve alterações reais no funcionamento do cérebro e do corpo. Você não precisa justificar a sua dor para ter direito a cuidado.',
      },
    ],
    relatedContent: [
      {
        label: 'O que é psiquiatria integrativa',
        href: '/psiquiatria-integrativa',
      },
      { label: 'Saúde mental da mulher', href: '/saude-mental-da-mulher' },
      {
        label: 'Artigo: Remédio não é fracasso',
        href: '/blog/remedio-nao-e-fracasso',
      },
      {
        label: 'Artigo: Você não está quebrada',
        href: '/blog/voce-nao-esta-quebrada',
      },
    ],
    emergencyNote: true,
    ctaHeading: 'Você não precisa atravessar isso sozinha',
    ctaBody:
      'Dar o primeiro passo já é um ato de cuidado com você. A consulta é online, acolhedora e sem julgamento, vamos conversar quando você sentir que é a hora.',
    cfmDisclaimer: DISCLAIMER_PADRAO,
    order: 4,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ESGOTAMENTO / BURNOUT
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'esgotamento',
    name: 'Esgotamento e Burnout',
    navLabel: 'Esgotamento / Burnout',
    cluster: 'Integrativa',
    keyword: 'burnout esgotamento mental tratamento',
    metaTitle: 'Burnout e Esgotamento | Dra. Vitória Gomes',
    metaDescription:
      'Quando o cansaço não passa com o fim de semana. Cuidado médico integrativo para o esgotamento mental, online.',
    h1: 'Esgotamento não é frescura',
    heroKicker: 'Esgotamento / Burnout',
    heroHeading:
      'Quando o cansaço não passa nem no fim de semana, o corpo não está te sabotando, está te avisando.',
    anchorPhrase: 'Cuidar de você não é luxo nem fraqueza. É o começo de tudo.',
    uniqueIntro: [
      'Tem um tipo de cansaço que o fim de semana não cura. Você dorme, descansa, tira férias, e volta exausta do mesmo jeito. Não é preguiça, não é falta de gratidão, não é "mimimi". Muitas vezes é esgotamento: o ponto em que a conta de dar conta de tudo, o tempo todo, finalmente chega.',
      'O burnout nasceu como um esgotamento ligado ao trabalho, mas na vida real ele se mistura com tudo: a jornada dupla, o cuidar de todo mundo, a autocobrança, a sensação de nunca ser suficiente. Não à toa, os afastamentos por transtornos mentais bateram recorde no Brasil, e a exaustão é uma das grandes portas de entrada. Se você chegou aqui exausta, você não é fraca. Você está sobrecarregada.',
      'No cuidado integrativo, a gente não te manda "descansar mais" e pronto. A gente investiga o que está drenando você, corpo, sono, rotina, cobranças, sentido, e monta um caminho pra você se recuperar de verdade e sustentar isso. Às vezes há um quadro de ansiedade ou depressão por baixo do esgotamento, e reconhecer isso muda tudo.',
    ],
    storySnippet:
      'Quem se esgota quase sempre é quem cuida: de filhos, de pais, de pacientes, de metas, de todo mundo, menos de si. Se você se reconhece nisso, respira. Cuidar de você não é egoísmo. É o que te permite continuar.',
    symptoms: {
      title: 'Como o esgotamento se mostra',
      intro:
        'O burnout raramente chega de uma vez. Ele vai se instalando, e o corpo fala antes da mente:',
      items: [
        'Cansaço profundo que o descanso não resolve.',
        'Irritabilidade, pavio curto, vontade de "sumir".',
        'Distanciamento: fazer as coisas no automático, sem sentido.',
        'Queda de rendimento, esquecimentos, dificuldade de concentração.',
        'Sono ruim, dores, tensão, alterações no apetite.',
        'Sensação de fracasso e de nunca dar conta, por mais que se esforce.',
      ],
    },
    howCareWorks: {
      title: 'Como o cuidado integrativo trata o esgotamento',
      steps: [
        {
          title: 'Nomear o que está acontecendo',
          body: 'Metade do alívio é entender que aquilo tem nome e não é falha de caráter. A avaliação médica separa o esgotamento de outros quadros (como depressão e ansiedade) que pedem cuidado próprio.',
        },
        {
          title: 'Cuidar do corpo exausto',
          body: 'Sono, energia, alimentação e ritmo entram no plano. O corpo esgotado precisa de recuperação real, e isso se organiza com passos possíveis, não com mais cobrança.',
        },
        {
          title: 'Rever a conta que não fecha',
          body: 'Olhar com honestidade a sobrecarga, os limites e a autocobrança. Cuidado às vezes é aprender a colocar limites, e isso também é saúde.',
        },
        {
          title: 'Tratar o que estiver por baixo',
          body: 'Quando há ansiedade ou depressão associadas, elas são tratadas, inclusive com medicação, se for preciso. E, quando cabe, oriento sobre afastamento e documentos com responsabilidade.',
        },
      ],
    },
    whenToSeekHelp: {
      title: 'Quando buscar ajuda',
      body: 'Se o cansaço já dura semanas, não melhora com descanso e está afetando o seu trabalho, o seu humor e as suas relações, é hora de olhar isso com um médico, antes que o corpo cobre a conta de um jeito mais duro.',
      items: [
        'Exaustão que persiste mesmo depois de descansar.',
        'Sentir-se distante, cínica ou "anestesiada" com o que fazia sentido.',
        'Sintomas físicos frequentes ligados ao estresse.',
        'Vontade de largar tudo, ou sensação de que não aguenta mais.',
      ],
    },
    faqs: [
      {
        q: 'Qual a diferença entre burnout, estresse e depressão?',
        a: 'O estresse é uma resposta normal a pressões pontuais; o burnout é um esgotamento mais crônico, muito ligado à sobrecarga contínua (em especial do trabalho e do cuidar). Já a depressão envolve humor baixo e perda de prazer de forma mais ampla na vida. Eles podem coexistir e se confundir, e é justamente por isso que a avaliação médica importa: o cuidado muda conforme o que está acontecendo.',
      },
      {
        q: 'Preciso me afastar do trabalho?',
        a: 'Nem sempre, muita gente se recupera ajustando a rotina, os limites e recebendo o cuidado certo, sem afastamento. Em alguns casos, um período de afastamento é parte do tratamento, e aí ele é avaliado e documentado com responsabilidade na consulta. É uma decisão clínica, feita com você, olhando o seu caso real.',
      },
      {
        q: 'Descanso não resolve o meu cansaço. Por quê?',
        a: 'Porque o esgotamento não é só falta de sono, é uma sobrecarga acumulada de corpo, mente e sentido, que o fim de semana não zera. Enquanto as causas continuam ativas (autocobrança, jornada excessiva, falta de limites), o cansaço volta. Por isso o cuidado precisa ir além do "descanse mais": ele reorganiza a conta que não está fechando.',
      },
      {
        q: 'Esgotamento é doença de verdade ou frescura?',
        a: 'É de verdade, tanto que o esgotamento profissional é reconhecido internacionalmente como um fenômeno ligado ao trabalho, e os afastamentos por saúde mental são recorde no Brasil. Chamar de frescura só faz a pessoa adoecer mais em silêncio. Levar a sério é o que permite tratar e prevenir consequências piores.',
      },
    ],
    relatedContent: [
      {
        label: 'O que é psiquiatria integrativa',
        href: '/psiquiatria-integrativa',
      },
      { label: 'Ansiedade', href: '/ansiedade' },
      { label: 'Insônia e sono', href: '/insonia' },
      { label: 'Saúde mental da mulher', href: '/saude-mental-da-mulher' },
    ],
    emergencyNote: true,
    ctaHeading: 'Se o cansaço não passa há semanas, vamos olhar isso com calma',
    ctaBody:
      'Você merece recuperar a sua energia e o seu sentido, sem culpa. A consulta é online, de onde você estiver.',
    cfmDisclaimer: DISCLAIMER_PADRAO,
    order: 5,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // INSÔNIA E SONO
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'insonia',
    name: 'Insônia e Sono',
    navLabel: 'Insônia e Sono',
    cluster: 'Integrativa',
    keyword: 'insônia tratamento psiquiatra',
    metaTitle: 'Insônia e Sono | Dra. Vitória Gomes',
    metaDescription:
      'O sono conversa com a sua saúde mental. Avaliação e cuidado integrativo da insônia, com acompanhamento médico online.',
    h1: 'Quando a noite não descansa',
    heroKicker: 'Insônia e Sono',
    heroHeading:
      'O sono não é um luxo, é onde o corpo e a mente se remendam. Quando a noite não descansa, o dia inteiro sente.',
    anchorPhrase: 'O seu corpo fala. A gente só precisa aprender a escutar, juntas.',
    uniqueIntro: [
      'Se a sua noite virou um lugar de luta, demorar horas pra pegar no sono, acordar de madrugada e não voltar, ou dormir e acordar como se não tivesse dormido, eu quero que você saiba: isso tem cuidado, e não é "só relaxar". O sono é um dos pilares da saúde mental. É durante a noite que o corpo se recupera e a mente organiza as emoções do dia.',
      'A insônia e a saúde mental andam de mãos dadas nos dois sentidos. A ansiedade e a depressão tiram o sono; e a falta de sono, por sua vez, piora a ansiedade, o humor e o cansaço, um ciclo que se retroalimenta. Por isso, na abordagem integrativa, a gente nunca trata a insônia isolada: a gente escuta o que a sua noite está tentando dizer sobre os seus dias.',
      'E aqui um ponto importante: o objetivo não é simplesmente "empurrar um remédio pra dormir". Remédios para dormir têm lugar em situações específicas, por tempo definido e com acompanhamento, mas usados sozinhos e por muito tempo, podem mascarar a causa e trazer problemas. O caminho é entender e tratar o que está por trás da noite mal dormida.',
    ],
    storySnippet:
      'Tem noite que a gente deita e a mente escolhe justo aquela hora pra repassar tudo. Se a sua cama virou o lugar mais barulhento da casa, não é falta de disciplina sua, é sinal de que algo pede escuta.',
    symptoms: {
      title: 'Como a insônia se apresenta',
      intro: 'Insônia não é só "não dormir". Ela tem várias formas:',
      items: [
        'Dificuldade para pegar no sono, mesmo cansada.',
        'Acordar no meio da noite e não conseguir voltar a dormir.',
        'Acordar muito cedo, antes da hora, sem descanso.',
        'Sono que não restaura: dormir e acordar exausta.',
        'Cansaço, irritabilidade e desconcentração durante o dia.',
        'Medo da hora de dormir e da própria cama.',
      ],
    },
    subtypes: {
      title: 'O que costuma estar por trás',
      intro: 'A insônia quase sempre tem uma companhia. Investigar isso é parte do cuidado:',
      items: [
        {
          name: 'Ansiedade e ruminação',
          desc: 'A mente que não desliga, a preocupação que aparece justamente na hora de dormir.',
        },
        {
          name: 'Depressão',
          desc: 'Alterações do sono (dormir demais ou de menos) são um sintoma central da depressão.',
        },
        {
          name: 'Hábitos e ambiente',
          desc: 'Cafeína, telas, horários irregulares, calor da noite, coisas que sabotam o sono sem a gente notar.',
        },
        {
          name: 'Corpo e hormônios',
          desc: 'Tireoide, dor, alterações hormonais e outras questões clínicas que merecem avaliação.',
        },
      ],
    },
    howCareWorks: {
      title: 'Como o cuidado integrativo trata a insônia',
      steps: [
        {
          title: 'Entender a sua noite (e o seu dia)',
          body: 'A gente investiga o padrão do seu sono, a sua rotina e o que pode estar por trás, ansiedade, depressão, hábitos, questões do corpo. A causa guia o tratamento.',
        },
        {
          title: 'Higiene do sono na vida real',
          body: 'Ajustes possíveis de horário, luz, telas, cafeína e ambiente, não uma lista rígida, mas o que cabe na sua rotina e ajuda o sono a voltar naturalmente.',
        },
        {
          title: 'Tratar a raiz, não só a noite',
          body: 'Se há ansiedade ou depressão alimentando a insônia, elas são cuidadas. Muitas vezes, tratar a causa devolve o sono sem precisar de um remédio para dormir a longo prazo.',
        },
        {
          title: 'Medicação com critério e prazo',
          body: 'Quando um apoio medicamentoso é indicado, ele entra com objetivo claro, dose certa e tempo definido, com acompanhamento, nunca de forma indefinida ou por conta própria.',
        },
      ],
    },
    whenToSeekHelp: {
      title: 'Quando buscar ajuda',
      body: 'Se a insônia acontece três ou mais noites por semana, já dura algumas semanas e está atrapalhando o seu dia, é hora de investigar com um médico, em vez de ir aumentando a automedicação.',
      items: [
        'Noites mal dormidas frequentes há semanas.',
        'Cansaço, humor e concentração afetados durante o dia.',
        'Uso crescente de remédios ou álcool para conseguir dormir.',
        'Sono ruim junto de ansiedade, tristeza ou esgotamento.',
      ],
    },
    faqs: [
      {
        q: 'Toda insônia precisa de remédio para dormir?',
        a: 'Não, e essa é uma ideia que atrapalha muita gente. Boa parte das insônias melhora quando a gente trata a causa (ansiedade, depressão, hábitos) e ajusta a higiene do sono, sem depender de medicação contínua. Quando um remédio é indicado, é por tempo definido e com acompanhamento. O objetivo é devolver o sono, não criar dependência dele.',
      },
      {
        q: 'Higiene do sono resolve sozinha?',
        a: 'A higiene do sono (horários, luz, telas, cafeína, ambiente) é uma base importante e ajuda bastante, mas nem sempre resolve sozinha, principalmente quando há ansiedade ou depressão por trás. Por isso ela é parte do cuidado, e não o cuidado inteiro: a gente combina os ajustes de rotina com o tratamento da causa.',
      },
      {
        q: 'Durmo, mas acordo cansada. Isso é insônia?',
        a: 'Pode ser um sono não restaurador, que é uma forma de insônia, e também pode envolver outras questões (respiratórias, hormonais, de humor) que merecem avaliação. Dormir horas suficientes e ainda acordar exausta é um sinal de que o seu sono não está cumprindo o papel de recuperar você, e vale investigar o porquê.',
      },
      {
        q: 'A insônia pode ser sinal de outra coisa?',
        a: 'Sim, com frequência. A insônia costuma ser um sintoma, não só um problema isolado: ela é uma das principais manifestações de ansiedade e depressão, e também pode se ligar a questões do corpo. Tratar só a noite, sem olhar o que está por trás, é remendar sem resolver, por isso o olhar integrativo faz diferença aqui.',
      },
    ],
    relatedContent: [
      {
        label: 'O que é psiquiatria integrativa',
        href: '/psiquiatria-integrativa',
      },
      { label: 'Ansiedade', href: '/ansiedade' },
      { label: 'Esgotamento e burnout', href: '/esgotamento' },
      {
        label: 'Artigo: O corpo fala com a mente',
        href: '/blog/corpo-fala-com-a-mente',
      },
    ],
    emergencyNote: false,
    ctaHeading: 'Se a noite não te descansa há semanas, vamos olhar isso juntas',
    ctaBody:
      'Dormir bem muda o seu dia inteiro. Vamos entender o que a sua noite está pedindo, a consulta é online, de onde você estiver.',
    cfmDisclaimer: DISCLAIMER_PADRAO,
    order: 6,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SAÚDE MENTAL DA MULHER
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'saude-mental-da-mulher',
    name: 'Saúde Mental da Mulher',
    navLabel: 'Saúde Mental da Mulher',
    cluster: 'Integrativa',
    keyword: 'saúde mental da mulher psiquiatra',
    metaTitle: 'Saúde Mental da Mulher | Dra. Vitória Gomes',
    metaDescription:
      'Cada fase da vida da mulher pede um olhar próprio para a saúde mental. Cuidado integrativo e acolhedor, online.',
    h1: 'Saúde mental da mulher',
    heroKicker: 'Saúde Mental da Mulher',
    heroHeading:
      'A vida da mulher tem estações, e cada uma pede um olhar próprio, não um "é da sua cabeça".',
    anchorPhrase: 'Não existe paciente padrão. Existe a sua história.',
    uniqueIntro: [
      'Ser mulher tem um roteiro de corpo e de vida que influencia diretamente a saúde mental, e que, por muito tempo, foi ignorado ou desqualificado como "TPM", "frescura" ou "hormônio". Eu quero fazer diferente com você: olhar as suas fases, o seu corpo e a sua história com a seriedade que eles merecem.',
      'As mulheres carregam a maior parte da demanda em saúde mental, ansiedade e depressão são mais frequentes entre nós, e não por acaso. Além da biologia (ciclos hormonais, gestação, pós-parto, perimenopausa), tem a sobrecarga: a jornada dupla, o cuidar de todo mundo, a autocobrança, o "dar conta" em silêncio. Saúde mental da mulher é olhar tudo isso junto.',
      'No cuidado integrativo, cada fase ganha um olhar próprio, sem receita de bolo. A ansiedade de quem está numa transição de vida é diferente da tristeza do pós-parto, que é diferente das oscilações da perimenopausa. E, em todas elas, o cuidado soma: avaliação clínica, atenção ao corpo, apoio ao sentido, e medicação quando é preciso, com a segurança de cada momento (inclusive na gestação e amamentação, quando indicado).',
    ],
    storySnippet:
      'Quantas mulheres você conhece que "seguram tudo" e desabam sozinhas? Cuidar da saúde mental da mulher é também dar a ela o direito de não precisar ser forte o tempo todo.',
    symptoms: {
      title: 'Alguns momentos que pedem um olhar atento',
      items: [
        'Alterações intensas de humor ligadas ao ciclo (a chamada TPM que "passa dos limites", a TDPM).',
        'Ansiedade e tristeza na gestação e no pós-parto, que não são "só cansaço de mãe".',
        'Oscilações de humor, sono e ansiedade na perimenopausa.',
        'Sobrecarga e esgotamento de quem cuida da casa, dos filhos e/ou dos pais.',
        'Ansiedade, insônia e desânimo em fases de transição e autocobrança.',
      ],
    },
    subtypes: {
      title: 'Fases da vida, cuidados diferentes',
      items: [
        {
          name: 'Ciclo menstrual e TDPM',
          desc: 'Quando os dias antes da menstruação trazem sintomas emocionais fortes o suficiente para atrapalhar a vida.',
        },
        {
          name: 'Gestação e pós-parto',
          desc: 'Um período de grande vulnerabilidade emocional, que merece acolhimento e, quando preciso, tratamento seguro.',
        },
        {
          name: 'Perimenopausa e menopausa',
          desc: 'Mudanças hormonais que impactam humor, sono e ansiedade, e que têm cuidado, não é "coisa da idade".',
        },
        {
          name: 'Sobrecarga e papéis de cuidado',
          desc: 'O peso invisível de cuidar de todo mundo, que adoece em silêncio e raramente é nomeado.',
        },
      ],
    },
    howCareWorks: {
      title: 'Como o cuidado integrativo cuida da mulher',
      steps: [
        {
          title: 'Escutar a sua história, na sua fase',
          body: 'O ponto de partida é entender onde você está na vida e no corpo. O mesmo sintoma pede cuidados diferentes na gestação, na perimenopausa ou numa fase de sobrecarga.',
        },
        {
          title: 'Corpo e hormônios na conversa',
          body: 'Ciclo, tireoide, sono, energia: o corpo da mulher fala muito com a mente. Considerar isso, em diálogo com a ginecologia, quando faz sentido, muda o cuidado.',
        },
        {
          title: 'Tratamento seguro para cada momento',
          body: 'Quando a medicação é indicada, ela é escolhida com atenção à sua fase, inclusive com opções seguras na gestação e amamentação, quando necessário. Sempre explicada e acompanhada.',
        },
        {
          title: 'Aliviar a conta invisível',
          body: 'Parte do cuidado é legitimar a sua sobrecarga e ajudar a repartir esse peso, porque cuidar de você não é egoísmo, é o que sustenta tudo o mais.',
        },
      ],
    },
    whenToSeekHelp: {
      title: 'Quando buscar ajuda',
      body: 'Se o seu humor, o seu sono ou a sua ansiedade estão atrapalhando a sua vida, em qualquer fase, vale procurar cuidado. Você não precisa esperar "piorar" nem provar que a sua dor é grande o suficiente.',
      items: [
        'Sintomas emocionais fortes ligados ao ciclo, gestação, pós-parto ou perimenopausa.',
        'Tristeza, ansiedade ou irritabilidade que persistem e pesam.',
        'Sensação de estar no limite de tanto cuidar de todos.',
        'Qualquer pensamento de se machucar, isso é emergência.',
      ],
    },
    faqs: [
      {
        q: 'Isso não é "só TPM" ou "só hormônio"?',
        a: 'Hormônios influenciam de verdade o humor, o sono e a ansiedade, mas reduzir tudo a "é só TPM" desqualifica um sofrimento real e deixa a mulher sem cuidado. Quando os sintomas do período pré-menstrual são intensos a ponto de atrapalhar a vida, existe até um nome e um tratamento para isso (a TDPM). O ponto é levar a sério e avaliar, não minimizar.',
      },
      {
        q: 'Posso tratar saúde mental na gravidez ou amamentando?',
        a: 'Sim, e é importante, depressão e ansiedade não tratadas na gestação e no pós-parto também têm riscos. O cuidado nesses períodos é feito com atenção redobrada à segurança, e existem opções de tratamento (incluindo medicações) consideradas mais seguras nessas fases, quando indicadas. Tudo é avaliado individualmente, com você e, quando necessário, junto do seu obstetra.',
      },
      {
        q: 'A menopausa pode afetar a minha saúde mental?',
        a: 'Pode, sim. A perimenopausa e a menopausa envolvem mudanças hormonais que impactam humor, sono e ansiedade em muitas mulheres, e isso não é "coisa da idade" que se deva apenas suportar. Existe cuidado, muitas vezes em diálogo com a ginecologia, para atravessar essa fase com mais qualidade de vida.',
      },
      {
        q: 'Por que procurar uma psiquiatra mulher faz diferença?',
        a: 'O mais importante é encontrar um cuidado em que você se sinta acolhida e levada a sério, isso não depende só do gênero do profissional. Dito isso, muitas mulheres relatam se sentir mais à vontade para falar de certos temas (ciclo, maternidade, sobrecarga) com outra mulher. O que eu ofereço é um espaço onde a sua história é escutada por inteiro, sem julgamento.',
      },
    ],
    relatedContent: [
      {
        label: 'O que é psiquiatria integrativa',
        href: '/psiquiatria-integrativa',
      },
      { label: 'Depressão', href: '/depressao' },
      { label: 'Ansiedade', href: '/ansiedade' },
      { label: 'Insônia e sono', href: '/insonia' },
    ],
    emergencyNote: false,
    ctaHeading: 'Seja qual for a sua fase, a sua história merece ser escutada',
    ctaBody:
      'Você não precisa dar conta de tudo sozinha. Vamos cuidar de você por inteiro, a consulta é online, de onde você estiver.',
    cfmDisclaimer: DISCLAIMER_PADRAO,
    order: 7,
  },
];

// ── Helpers ─────────────────────────────────────────────────────────────────
export const pillars = conditions.filter((c) => c.isPillar);
export const clinicalConditions = conditions.filter((c) => !c.isPillar);

export function getCondition(slug: string): Condition | undefined {
  return conditions.find((c) => c.slug === slug);
}

export default conditions;
