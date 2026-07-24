/**
 * Módulo Geo (7B), regiões atendidas por telemedicina.
 *
 * ENQUADRAMENTO OBRIGATÓRIO:
 *  - NUNCA forjar consultório físico. Toda página é "psiquiatra online para quem
 *    está em/no [região]", alcance por TELEMEDICINA, não presença local.
 *  - hasPhysicalPresence = true SOMENTE onde há vínculo real: Ceará / Fortaleza
 *    (base atual da médica). Só essas têm mapa.
 *  - Cada página é diferenciada por DADO REGIONAL REAL da marketing-research.md.
 *    Nunca inventar estatística.
 *
 * Lista curada (seed). NÃO passar de 7 regiões sem pedido explícito.
 * Fonte dos dados: marketing/marketing-research.md (coleta 19/06/2026).
 */

export interface RegionFAQ {
  q: string;
  a: string;
}

export interface RegionContext {
  title: string;
  body: string;
}

export interface Testimonial {
  text: string;
  author: string;
  consentido: boolean; // só renderiza quando true (dado real consentido)
}

export interface Regiao {
  slug: string;
  name: string; // "Ceará"
  displayName: string; // "no Ceará" / "em Fortaleza", para headings
  uf: string;
  tipo: 'estado' | 'capital' | 'regiao';
  metaTitle: string; // <= 60
  metaDescription: string; // <= 155
  heroKicker: string;
  heroHeading: string;
  uniqueIntro: string[];
  regionalContext: RegionContext[]; // dado real da pesquisa
  telemedicineReach: string;
  localInsight: string;
  hasPhysicalPresence: boolean;
  mapQuery?: string; // só quando hasPhysicalPresence
  mapHeading?: string;
  testimonial?: Testimonial; // placeholder consentido
  faqs: RegionFAQ[];
  order: number;
}

const TESTIMONIAL_PLACEHOLDER: Testimonial = {
  text: 'SUBSTITUIR POR DEPOIMENTO REAL CONSENTIDO, relato anônimo de paciente da região, com consentimento (ver régua CFM).',
  author: 'SUBSTITUIR, iniciais/anônimo',
  consentido: false,
};

export const regioes: Regiao[] = [
  // ── VÍNCULO REAL (com mapa) ───────────────────────────────────────────────
  {
    slug: 'ceara',
    name: 'Ceará',
    displayName: 'no Ceará',
    uf: 'CE',
    tipo: 'estado',
    metaTitle: 'Psiquiatra online no Ceará | Dra. Vitória Gomes',
    metaDescription:
      'Psiquiatria integrativa online para todo o Ceará, com uma médica cearense. Do sertão à capital, sem pegar estrada. Agende.',
    heroKicker: 'Ceará',
    heroHeading: 'Psiquiatra online para quem está no Ceará, e para todo o Brasil',
    uniqueIntro: [
      'Eu sou cearense e moro aqui, em Fortaleza. Conheço de perto a realidade da nossa terra: a distância entre as cidades, a dificuldade de encontrar um psiquiatra fora da capital e o peso do estigma que ainda faz muita gente sofrer em silêncio, achando que é "frescura" ou "falta de fé". Atender o Ceará por telemedicina é, pra mim, uma forma de encurtar essas distâncias.',
      'A escassez de psiquiatras é séria em todo o Nordeste, a região concentra só uma fatia pequena dos especialistas do país, enquanto a maioria está no Sudeste e no Sul. Isso significa filas, deslocamentos longos e, em muitas cidades cearenses, nenhum psiquiatra por perto. O atendimento online dissolve essa barreira: onde tiver internet, tem acesso a um cuidado médico de qualidade.',
    ],
    regionalContext: [
      {
        title: 'A conta não fecha para o Nordeste',
        body: 'O Brasil tem cerca de 13.581 psiquiatras, e 74,6% deles estão concentrados no Sudeste e no Sul. O Nordeste inteiro fica com só 14,7%, uma desigualdade que deixa cidades e regiões inteiras do Ceará praticamente sem cobertura.',
      },
      {
        title: 'E tende a piorar',
        body: 'O país perdeu cerca de 21% das vagas de residência em psiquiatria, o que aperta ainda mais a oferta de especialistas. Quem depende só do atendimento presencial na sua cidade fica cada vez mais desassistido.',
      },
      {
        title: 'O online já é o padrão em saúde mental',
        body: 'Psiquiatria e psicologia já respondem pela maior parte das teleconsultas de saúde no Brasil. Não é experimento: é o caminho que mais cresce, com resultados comparáveis ao presencial em muitos contextos.',
      },
    ],
    telemedicineReach:
      'Da capital ao sertão, de Fortaleza a Juazeiro do Norte, do Cariri ao litoral: se você está no Ceará e tem um celular com internet, a consulta acontece de onde você estiver, sem pegar estrada.',
    localInsight:
      'Aqui a fé e os laços de família são fortes, e isso é bonito. Mas às vezes vira barreira: "reza que passa", "isso é besteira". Cuidar da mente não briga com a fé; caminha ao lado dela. Eu respeito a sua crença e cuido da sua saúde com ciência.',
    hasPhysicalPresence: true,
    mapQuery: 'Fortaleza, Ceará, Brasil',
    mapHeading: 'Atendimento online para o Ceará e todo o Brasil',
    testimonial: TESTIMONIAL_PLACEHOLDER,
    faqs: [
      {
        q: 'Você atende cidades do interior do Ceará por telemedicina?',
        a: 'Sim, é justamente onde o atendimento online faz mais diferença. Muitas cidades cearenses não têm psiquiatra, e a telemedicina leva o cuidado até você sem precisar viajar para a capital. Basta um celular ou computador com internet e um lugar reservado para a nossa conversa.',
      },
      {
        q: 'Você é de Fortaleza?',
        a: 'Sim, sou cearense e moro em Fortaleza. Atendo a capital e todo o estado por telemedicina, e também o Brasil inteiro. Ser daqui me ajuda a entender de perto a realidade e a cultura de quem me procura no Ceará.',
      },
      {
        q: 'A receita passada online vale nas farmácias do Ceará?',
        a: 'Vale. A receita digital tem validade legal em todo o país e é assinada eletronicamente, o que garante a autenticidade em qualquer farmácia, física ou online, do Ceará e do Brasil. Isso inclui receitas de medicações controladas, dentro das regras.',
      },
    ],
    order: 1,
  },
  {
    slug: 'fortaleza',
    name: 'Fortaleza',
    displayName: 'em Fortaleza',
    uf: 'CE',
    tipo: 'capital',
    metaTitle: 'Psiquiatra online em Fortaleza | Dra. Vitória',
    metaDescription:
      'Psiquiatria integrativa online para Fortaleza, com uma médica cearense. Sem trânsito e sem fila. Agende sua consulta.',
    heroKicker: 'Fortaleza · CE',
    heroHeading: 'Psiquiatra online para quem está em Fortaleza, e para todo o Brasil',
    uniqueIntro: [
      'Fortaleza tem mais psiquiatras que o interior, é verdade, mas quem mora aqui sabe que isso não significa acesso fácil. Tem a agenda lotada dos bons profissionais, a espera, o trânsito atravessando a cidade, o tempo que falta no meio da rotina. Atender Fortaleza por telemedicina é tirar esses atritos do caminho de quem já está sobrecarregada.',
      'Sou cearense e moro aqui, em Fortaleza. Conheço a cidade, o ritmo dela, a cultura do "segura a barra" que muitas vezes empurra o cuidado com a mente pra depois. Aqui, você tem uma médica com nome e rosto, da sua cidade, atendendo você do conforto e do sigilo da sua casa.',
    ],
    regionalContext: [
      {
        title: 'Ter oferta não é ter acesso',
        body: 'Mesmo concentrando parte dos psiquiatras do Ceará, Fortaleza convive com agendas cheias e esperas. E o Nordeste, no todo, fica com apenas 14,7% dos psiquiatras do país, pressão que também se sente na capital.',
      },
      {
        title: 'O tempo que você não tem',
        body: 'Entre trânsito, deslocamento e sala de espera, uma consulta presencial pode custar meio dia. No online, você economiza esse tempo e faz a consulta de um lugar seu, reservado, sem perder o cuidado de perto.',
      },
      {
        title: 'Telemedicina é seguro e regulamentado',
        body: 'A teleconsulta em psiquiatria é reconhecida pelo Conselho Federal de Medicina, com o mesmo sigilo do presencial, e hoje saúde mental é a área que mais usa o atendimento online no Brasil.',
      },
    ],
    telemedicineReach:
      'De qualquer bairro de Fortaleza, do Centro à Aldeota, do Benfica à Messejana, a consulta acontece pela tela, no horário que couber na sua rotina, sem enfrentar o trânsito da cidade.',
    localInsight:
      'Na correria de Fortaleza, é comum empurrar o cuidado com a mente pra "quando sobrar tempo", e o tempo nunca sobra. Cuidar de você não é luxo nem fraqueza: é o começo de tudo. O online existe pra tirar a desculpa da falta de tempo do caminho.',
    hasPhysicalPresence: true,
    mapQuery: 'Fortaleza, Ceará, Brasil',
    mapHeading: 'Atendimento online para Fortaleza e todo o Brasil',
    testimonial: TESTIMONIAL_PLACEHOLDER,
    faqs: [
      {
        q: 'Preciso ir a algum consultório em Fortaleza?',
        a: 'Não. O atendimento é 100% online, por telemedicina. Você faz a consulta de onde estiver em Fortaleza, de casa, do trabalho, de um lugar reservado, sem deslocamento e sem fila. Se em algum momento o seu caso pedir uma avaliação presencial, eu te oriento com transparência sobre o melhor caminho.',
      },
      {
        q: 'Como funciona o pagamento e o reembolso pelo convênio?',
        a: 'O atendimento é particular. Muitos planos de saúde oferecem reembolso para consultas de psiquiatria, nesse caso, eu forneço o recibo e a documentação necessária para você solicitar ao seu convênio. Vale confirmar as regras de reembolso diretamente com o seu plano.',
      },
      {
        q: 'A consulta online é tão eficaz quanto a presencial?',
        a: 'Para a maioria dos casos em psiquiatria, sim. A avaliação é majoritariamente clínica e conversacional, e há boa evidência de resultados comparáveis ao presencial. A vantagem em Fortaleza é somar essa eficácia à conveniência de não enfrentar trânsito nem espera.',
      },
    ],
    order: 2,
  },
  {
    slug: 'interior-do-ceara',
    name: 'Interior do Ceará',
    displayName: 'no interior do Ceará',
    uf: 'CE',
    tipo: 'regiao',
    metaTitle: 'Psiquiatra online no interior do Ceará',
    metaDescription:
      'Do sertão à sua tela: psiquiatra online para o interior do Ceará, onde falta psiquiatra. Cuidado que chega sem estrada. Agende.',
    heroKicker: 'Interior do Ceará',
    heroHeading:
      'Psiquiatra online para o interior do Ceará, do sertão e da serra à sua tela',
    uniqueIntro: [
      'Eu sou cearense e atendo daqui de Fortaleza, mas conheço de perto a realidade do interior do estado: a cidade que não tem psiquiatra, a viagem longa até a capital, o dia de trabalho perdido, o remédio que acaba porque a consulta de retorno fica inviável. É exatamente essa distância que o atendimento online veio encurtar.',
      'No interior, a barreira quase nunca é a falta de vontade de se cuidar, é a falta de acesso. Cidade sem especialista, transporte difícil, e ainda o peso cultural de que sofrimento mental é "coisa da cabeça" ou "falta de fé". A telemedicina resolve a parte do acesso; o acolhimento, a gente constrói na conversa.',
    ],
    regionalContext: [
      {
        title: 'Muitas cidades, nenhum psiquiatra',
        body: 'Com só 14,7% dos psiquiatras do país no Nordeste e a esmagadora maioria nas capitais, boa parte das cidades do interior cearense simplesmente não tem um psiquiatra para chamar de seu. Quem precisa acaba viajando, ou desistindo.',
      },
      {
        title: 'O online transforma distância em acesso',
        body: 'Uma médica na serra pode acompanhar alguém no sertão sem que ninguém pegue estrada. A tecnologia dissolve a geografia: a escassez de especialistas deixa de ser uma sentença para quem mora longe dos grandes centros.',
      },
      {
        title: 'Continuidade sem estrada',
        body: 'Tratamento em psiquiatria pede acompanhamento, retornos, ajustes, receitas. No presencial distante, isso se perde. No online, o retorno cabe na rotina e o cuidado não é interrompido por causa da viagem.',
      },
    ],
    telemedicineReach:
      'Da Serra de Baturité ao Cariri, do sertão central ao litoral do interior: se chega internet, chega o cuidado. A consulta e os retornos acontecem sem você precisar sair da sua cidade.',
    localInsight:
      'No interior, a fé e a comunidade sustentam muita gente, e isso tem valor. Cuidar da mente não substitui isso, soma com isso. Tem coisas que a medicina cuida, e tem uma paz que vem de outro lugar: eu respeito e caminho com você nas duas.',
    hasPhysicalPresence: false,
    testimonial: TESTIMONIAL_PLACEHOLDER,
    faqs: [
      {
        q: 'Minha cidade não tem psiquiatra. Como funciona pela telemedicina?',
        a: 'Funciona de forma simples: a gente marca pelo WhatsApp, você recebe um link e faz a consulta de onde estiver, pelo celular ou computador. Não é preciso viajar até a capital nem para a primeira consulta, nem para os retornos. Você só precisa de internet e de um lugar reservado para conversar à vontade.',
      },
      {
        q: 'E se eu tiver pouca internet ou sinal fraco?',
        a: 'A consulta funciona mesmo com conexões modestas, e dá para ajustar a qualidade do vídeo conforme o seu sinal. Se em algum momento a imagem falhar, a gente adapta para garantir que a conversa aconteça bem. O importante é você conseguir um cantinho tranquilo na hora combinada.',
      },
      {
        q: 'Consigo pegar meus remédios na farmácia da minha cidade?',
        a: 'Sim. A receita digital vale em todo o Brasil e é reconhecida nas farmácias do interior do Ceará, inclusive para medicações controladas, dentro das regras. Você recebe o documento de forma segura e apresenta na farmácia, sem precisar de uma receita "em papel" vinda da capital.',
      },
    ],
    order: 3,
  },

  // ── PRAÇAS DE ALTA DEMANDA (telemedicina, sem mapa) ───────────────────────
  {
    slug: 'sao-paulo',
    name: 'São Paulo',
    displayName: 'em São Paulo',
    uf: 'SP',
    tipo: 'estado',
    metaTitle: 'Psiquiatra online em São Paulo | Dra. Vitória',
    metaDescription:
      'Psiquiatra online para São Paulo: psiquiatria integrativa sem trânsito e sem fila, no horário que cabe na sua rotina. Agende.',
    heroKicker: 'São Paulo · SP',
    heroHeading: 'Psiquiatra online para quem está em São Paulo, e em todo o Brasil',
    uniqueIntro: [
      'São Paulo é o estado que mais concentra psiquiatras no país, então talvez você se pergunte por que procurar um atendimento online. A resposta que eu mais escuto de pacientes paulistas é simples: não é falta de médico, é falta de tempo, de agenda e de um cuidado que caiba na rotina. O trânsito, a jornada puxada, a dificuldade de encaixar uma consulta presencial no meio da semana.',
      'No online, você troca as duas horas de deslocamento por uma consulta de um lugar seu, no horário que funciona pra você, inclusive fora do comercial. E ganha algo que a correria de São Paulo costuma tirar: uma médica com nome e rosto, que te acompanha ao longo do tempo, em vez de um atendimento diferente a cada vez.',
    ],
    regionalContext: [
      {
        title: 'Oferta concentrada, tempo escasso',
        body: 'O Sudeste e o Sul concentram 74,6% dos psiquiatras do Brasil, e São Paulo lidera essa conta. Mas oferta no estado não significa agenda livre nem consulta perto de casa, em especial no interior paulista, onde o acesso é bem mais desigual que na capital.',
      },
      {
        title: 'O custo invisível do deslocamento',
        body: 'Numa metrópole, ir e voltar de uma consulta pode consumir meio dia entre trânsito e espera. O atendimento online devolve esse tempo e reduz o atrito que faz muita gente adiar o cuidado.',
      },
      {
        title: 'Telemedicina consolidada',
        body: 'Saúde mental já é a maior fatia das teleconsultas de saúde no Brasil, e o volume não para de crescer. Para o paulistano acostumado a resolver a vida no digital, a consulta online é um caminho natural, e regulamentado pelo CFM.',
      },
    ],
    telemedicineReach:
      'Da capital ao interior, de São Paulo a Campinas, do ABC a Ribeirão Preto, a consulta acontece pela tela, no horário que couber na sua agenda, sem enfrentar o trânsito.',
    localInsight:
      'Na cidade que não para, a saúde mental costuma ser a última da fila. Mas cuidar de você não é luxo nem fraqueza, é o que sustenta o resto. O online existe pra que a falta de tempo deixe de ser o motivo de não se cuidar.',
    hasPhysicalPresence: false,
    testimonial: TESTIMONIAL_PLACEHOLDER,
    faqs: [
      {
        q: 'Por que fazer consulta online se São Paulo tem tantos psiquiatras?',
        a: 'Porque acesso não é só ter médico na cidade, é conseguir encaixar o cuidado na sua vida. Muitos pacientes de São Paulo escolhem o online pela economia de tempo, pela flexibilidade de horário e pela continuidade com a mesma médica. E, no interior paulista, o online ainda resolve a distância de fato.',
      },
      {
        q: 'Você atende no horário comercial só?',
        a: 'A agenda é combinada de acordo com a disponibilidade, e há flexibilidade para encontrar horários que caibam na sua rotina, inclusive para quem tem uma jornada de trabalho puxada. A gente acerta isso no primeiro contato pelo WhatsApp.',
      },
      {
        q: 'A receita digital funciona nas farmácias de São Paulo?',
        a: 'Sim. A receita digital tem validade legal em todo o país e é aceita nas farmácias de São Paulo, físicas e online, incluindo medicações controladas dentro das regras. Você recebe o documento assinado eletronicamente de forma segura.',
      },
    ],
    order: 4,
  },
  {
    slug: 'rio-de-janeiro',
    name: 'Rio de Janeiro',
    displayName: 'no Rio de Janeiro',
    uf: 'RJ',
    tipo: 'estado',
    metaTitle: 'Psiquiatra online no Rio de Janeiro | Dra. Vitória',
    metaDescription:
      'Psiquiatra online para o Rio de Janeiro: psiquiatria integrativa, acolhedora e sem deslocamento, de onde você estiver. Agende.',
    heroKicker: 'Rio de Janeiro · RJ',
    heroHeading: 'Psiquiatra online para quem está no Rio de Janeiro, e em todo o Brasil',
    uniqueIntro: [
      'No Rio, a vida acontece num ritmo próprio, e a saúde mental sente o peso dele: a rotina intensa, os deslocamentos, a segurança que às vezes pesa, a pressão do dia a dia. Atender o Rio de Janeiro por telemedicina é oferecer um espaço de cuidado que você acessa sem sair de casa, num horário seu.',
      'Mesmo num estado que concentra bastante oferta de especialistas, muita gente encontra dificuldade para encaixar uma consulta presencial ou para manter a continuidade do acompanhamento. O online resolve isso: a mesma médica, o mesmo cuidado, do conforto e do sigilo do seu ambiente.',
    ],
    regionalContext: [
      {
        title: 'Concentração não é acesso para todos',
        body: 'O Rio está na região que concentra 74,6% dos psiquiatras do país. Ainda assim, a distribuição dentro do estado é desigual, a Baixada e o interior fluminense têm acesso bem menor que os bairros centrais da capital.',
      },
      {
        title: 'Deslocamento e rotina',
        body: 'Entre trânsito, distâncias e a intensidade do dia a dia carioca, encaixar uma consulta presencial vira um desafio. A consulta online tira esse atrito e cabe melhor na vida real de quem mora no Rio.',
      },
      {
        title: 'O online já é o padrão em saúde mental',
        body: 'Psiquiatria e psicologia lideram a telemedicina no Brasil, com atendimento regulamentado pelo CFM e o mesmo sigilo do presencial. Não é um "quebra-galho": é uma forma consolidada e eficaz de cuidado.',
      },
    ],
    telemedicineReach:
      'Da capital à Baixada, dos subúrbios ao interior fluminense, de Niterói a Campos, a consulta acontece pela tela, sem deslocamento, no horário que couber pra você.',
    localInsight:
      'Numa rotina intensa, é fácil deixar o cuidado com a mente pra depois. Mas você não precisa estar no fundo do poço pra merecer cuidado. O online existe justamente pra facilitar dar esse primeiro passo.',
    hasPhysicalPresence: false,
    testimonial: TESTIMONIAL_PLACEHOLDER,
    faqs: [
      {
        q: 'O atendimento online vale a pena morando na capital do Rio?',
        a: 'Vale para muita gente, sim. Mesmo com oferta de médicos na capital, o online economiza tempo de deslocamento, oferece flexibilidade de horário e garante continuidade com a mesma profissional. E, para quem mora na Baixada ou no interior fluminense, ainda resolve a distância de fato.',
      },
      {
        q: 'Como funciona o sigilo na consulta online?',
        a: 'O sigilo é o mesmo do atendimento presencial: tudo o que você diz é protegido pelo sigilo médico. O ideal é escolher um lugar reservado na sua casa para a nossa conversa. A plataforma usada é segura, e sua história é sua.',
      },
      {
        q: 'Consigo receita e atestado pela consulta online?',
        a: 'Sim. A receita digital tem validade legal em todo o Brasil, inclusive para medicações controladas dentro das regras, e é aceita nas farmácias do Rio. Atestados e relatórios, quando necessários, também são emitidos de forma adequada.',
      },
    ],
    order: 5,
  },
  {
    slug: 'distrito-federal',
    name: 'Distrito Federal',
    displayName: 'em Brasília e no DF',
    uf: 'DF',
    tipo: 'capital',
    metaTitle: 'Psiquiatra online em Brasília (DF) | Dra. Vitória',
    metaDescription:
      'Psiquiatra online para Brasília e o DF: psiquiatria integrativa sem deslocamento, no horário que cabe na sua rotina. Agende.',
    heroKicker: 'Brasília · Distrito Federal',
    heroHeading: 'Psiquiatra online para quem está em Brasília e no DF, e em todo o Brasil',
    uniqueIntro: [
      'Brasília tem um ritmo próprio: a vida entre as asas e as regiões administrativas, as distâncias do plano urbano, a rotina de trabalho muitas vezes intensa, em especial para quem vive a pressão do serviço público, dos concursos e das provas. Atender o DF por telemedicina é oferecer um cuidado que acompanha esse ritmo, sem exigir mais deslocamento de você.',
      'Mesmo com boa oferta de profissionais na região central, encaixar uma consulta e manter a continuidade do acompanhamento nem sempre é simples. E as regiões administrativas mais afastadas nem sempre têm o mesmo acesso. O online equilibra isso: a mesma médica, o mesmo cuidado, de onde você estiver no DF.',
    ],
    regionalContext: [
      {
        title: 'Acesso desigual dentro do próprio DF',
        body: 'Ainda que Brasília concentre boa parte dos especialistas do Centro-Oeste, o acesso é desigual entre o Plano Piloto e as regiões administrativas mais afastadas. Para muita gente, o especialista continua longe, de tempo, se não de distância.',
      },
      {
        title: 'A pressão de uma cidade de concursos e provas',
        body: 'Brasília tem uma cultura forte de estudo, concurso e alta performance, terreno fértil para ansiedade de desempenho e esgotamento. É uma demanda real de saúde mental que muitas vezes fica sem cuidado.',
      },
      {
        title: 'Telemedicina reconhecida e crescente',
        body: 'Saúde mental é a área que mais usa a telemedicina no Brasil, com atendimento regulamentado pelo CFM e o mesmo sigilo do presencial. Para uma cidade digital e conectada como Brasília, é um caminho natural.',
      },
    ],
    telemedicineReach:
      'Do Plano Piloto às regiões administrativas, de Taguatinga ao Gama, de Ceilândia ao Guará, a consulta acontece pela tela, no horário que couber na sua rotina, sem atravessar a cidade.',
    localInsight:
      'Numa cidade de alta cobrança e performance, pedir ajuda pode parecer sinal de fraqueza. Não é. Acolher não é prometer cura: é caminhar junto, com verdade e com ciência. O online facilita esse primeiro passo, sem exposição.',
    hasPhysicalPresence: false,
    testimonial: TESTIMONIAL_PLACEHOLDER,
    faqs: [
      {
        q: 'Vocês atendem as regiões administrativas do DF, não só o Plano Piloto?',
        a: 'Sim. Como o atendimento é 100% online, ele alcança igualmente Taguatinga, Ceilândia, Gama, Guará, Águas Claras e todas as regiões administrativas, sem diferença de acesso e sem deslocamento. Onde tiver internet, a consulta acontece.',
      },
      {
        q: 'Tenho ansiedade por causa de concurso/provas. Isso é caso de psiquiatra?',
        a: 'Pode ser, sim, sobretudo quando a ansiedade de desempenho passa a atrapalhar o sono, a concentração, os estudos e a sua qualidade de vida. Nem todo nervosismo de prova precisa de tratamento, mas quando ele te domina, vale avaliar. É o tipo de coisa que a gente esclarece com calma na consulta, sem rótulos apressados.',
      },
      {
        q: 'A receita online é aceita nas farmácias de Brasília?',
        a: 'Sim. A receita digital tem validade legal em todo o país e é aceita nas farmácias do DF, físicas e online, incluindo medicações controladas dentro das regras. Você recebe o documento assinado eletronicamente de forma segura.',
      },
    ],
    order: 6,
  },
  {
    slug: 'minas-gerais',
    name: 'Minas Gerais',
    displayName: 'em Minas Gerais',
    uf: 'MG',
    tipo: 'estado',
    metaTitle: 'Psiquiatra online em Minas Gerais | Dra. Vitória',
    metaDescription:
      'Psiquiatra online para Minas Gerais: cuidado integrativo que chega ao interior mineiro, sem estrada e sem fila. Agende sua consulta.',
    heroKicker: 'Minas Gerais · MG',
    heroHeading: 'Psiquiatra online para quem está em Minas Gerais, e em todo o Brasil',
    uniqueIntro: [
      'Minas é enorme e cheia de contrastes: uma capital com boa oferta de especialistas e um interior vastíssimo, com centenas de cidades onde encontrar um psiquiatra é difícil. Atender Minas Gerais por telemedicina é chegar justamente onde o cuidado costuma faltar, sem que ninguém precise pegar estrada até Belo Horizonte.',
      'Se você está no interior mineiro, provavelmente conhece bem a viagem longa até a cidade grande para uma consulta, e a dificuldade de manter o acompanhamento depois. O online muda essa lógica: a primeira consulta e os retornos acontecem de onde você está, e o cuidado não é interrompido pela distância.',
    ],
    regionalContext: [
      {
        title: 'Capital servida, interior desassistido',
        body: 'Minas está na região que concentra 74,6% dos psiquiatras do país, mas essa oferta se concentra em Belo Horizonte e poucos polos. No interior, de centenas de municípios pequenos, o acesso a um psiquiatra continua escasso.',
      },
      {
        title: 'Distância que interrompe o tratamento',
        body: 'Em psiquiatria, o acompanhamento é parte do tratamento: retornos, ajustes, receitas. Quando cada consulta significa uma viagem longa, muita gente do interior mineiro acaba abandonando o cuidado no meio do caminho.',
      },
      {
        title: 'O online encurta o mapa de Minas',
        body: 'Saúde mental já lidera a telemedicina no Brasil, com atendimento regulamentado e eficaz. Para um estado do tamanho de Minas, isso significa cuidado contínuo sem depender de estrada.',
      },
    ],
    telemedicineReach:
      'De Belo Horizonte ao interior profundo, do Triângulo ao Vale do Jequitinhonha, do Sul de Minas à Zona da Mata, a consulta e os retornos acontecem pela tela, sem viagem.',
    localInsight:
      'No interior de Minas, a comunidade e a fé sustentam muita gente, e isso tem valor. Cuidar da mente soma com isso, não briga. Eu respeito a sua história e a sua crença, e cuido da sua saúde com ciência e com escuta.',
    hasPhysicalPresence: false,
    testimonial: TESTIMONIAL_PLACEHOLDER,
    faqs: [
      {
        q: 'Moro numa cidade pequena de Minas, sem psiquiatra. Dá pra ser paciente?',
        a: 'Dá, e é onde a telemedicina mais ajuda. Você não precisa viajar até Belo Horizonte nem para a primeira consulta nem para os retornos, tudo acontece pela tela, de onde você estiver. Basta um celular ou computador com internet e um lugar reservado para conversar à vontade.',
      },
      {
        q: 'Como faço para manter o acompanhamento morando no interior?',
        a: 'Essa é justamente a vantagem do online: os retornos cabem na sua rotina, sem estrada. A gente combina os acompanhamentos pelo WhatsApp e você faz cada consulta de casa. Assim o tratamento não é interrompido por causa da distância, que é o que costuma acontecer no presencial longe.',
      },
      {
        q: 'A receita passada online vale nas farmácias de Minas?',
        a: 'Vale. A receita digital tem validade legal em todo o Brasil e é aceita nas farmácias mineiras, da capital ao interior, incluindo medicações controladas dentro das regras. Você recebe o documento de forma segura, sem precisar de uma receita em papel vinda da capital.',
      },
    ],
    order: 7,
  },
];

// ── Helpers ─────────────────────────────────────────────────────────────────
export function getRegiao(slug: string): Regiao | undefined {
  return regioes.find((r) => r.slug === slug);
}

export const regioesComPresenca = regioes.filter((r) => r.hasPhysicalPresence);

export default regioes;
