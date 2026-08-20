# Dra. Vitória Gomes — Site institucional & captação

Site institucional e de captação de pacientes para uma médica (psiquiatria funcional integrativa, atendimento por telemedicina). 100% estático, otimizado para SEO local/programático, com uma landing page isolada para tráfego pago e rastreamento de conversão por origem de campanha.

**Produção:** [dravitoriagomes.com.br](https://dravitoriagomes.com.br)

> Projeto real de cliente. Este README documenta a arquitetura e as decisões técnicas para fins de portfólio — nenhum dado pessoal sensível do cliente (documentos, contratos) faz parte deste repositório.

---

## Stack técnica

| Camada | Tecnologia |
|---|---|
| Framework | [Astro 5](https://astro.build) (`output: 'static'`, zero JS por padrão) |
| UI interativa pontual | React 19 (só onde há estado no cliente, ex: galeria expansível da LP) |
| Estilo | Tailwind CSS 3 (design tokens próprios: paleta, tipografia, sombras) + CSS scoped por componente Astro |
| Tipagem | TypeScript |
| Conteúdo | Astro Content Collections (blog) + módulos `.ts` tipados como fonte de dados (condições clínicas, regiões, FAQ, depoimentos) |
| Animação | [Motion](https://motion.dev) |
| Hospedagem | Cloudflare Pages (deploy automático via push no GitHub) |
| SEO | `@astrojs/sitemap`, JSON-LD (schema.org médico) gerado por página, `robots.txt` com exclusões seletivas |
| Analytics/Tracking | Google Tag Manager, GA4, Google Ads, Meta Pixel |

---

## Arquitetura

```
src/
├── pages/                          → roteamento por arquivo (Astro)
│   ├── index.astro                 → home
│   ├── agendar.astro
│   ├── [condição].astro            → ex: ansiedade.astro, depressao.astro...
│   ├── psiquiatra-online/
│   │   └── [regiao]/
│   │       ├── index.astro         → SEO local (ex: /psiquiatra-online/ceara)
│   │       └── [condicao].astro    → cruzamento região × condição (SSG)
│   ├── blog/                       → Content Collections
│   └── lp/
│       ├── dravitoria-lp.astro     → LP isolada para tráfego pago (noindex)
│       └── consulta.astro
├── components/
│   ├── layout/                     → BaseLayout, Header, Footer (compartilhados)
│   ├── dravitoria-lp/sections/     → seções exclusivas da LP de tráfego, sem tocar no site institucional
│   ├── schema/                     → geração de JSON-LD
│   └── *.astro                     → WhatsAppCTA, CTASection, FAQAccordion, TestimonialSlider...
├── layouts/                        → ConditionPage.astro (template reusado pelas páginas de condição)
├── data/                           → fonte de verdade tipada (site.ts, conditions.ts, regioes.ts, faqGeral.ts...)
├── lib/                            → helpers de schema.org
├── scripts/                        → módulos client-side compartilhados (ex: tagging de UTM no WhatsApp)
└── content/blog/                   → posts em Markdown/MDX
```

### Decisões de arquitetura que valem destacar

- **Site 100% estático (SSG)** — não há backend nem formulário server-side. O único canal de conversão é WhatsApp (`wa.me`), então não existe rota de servidor nem banco de dados: menor superfície de ataque, custo de hosting próximo de zero, performance máxima.
- **SEO programático controlado, não em massa** — as páginas `psiquiatra-online/[regiao]/[condicao]` são geradas via `getStaticPaths()`, mas cruzando apenas as combinações que fazem sentido de negócio (não é um cartesiano automático de todas as regiões × todas as condições), evitando páginas finas/duplicadas que o Google penaliza.
- **Fonte de dados centralizada e tipada** (`src/data/site.ts`) — telefone, WhatsApp, disclaimers legais (CFM), mensagens de emergência (CVV/SAMU) e textos institucionais vivem em um único módulo TypeScript, consumido por toda a aplicação. Trocar o número de WhatsApp ou um disclaimer legal é uma alteração em um único arquivo.
- **Guardrails de compliance embutidos no código, não só na governança** — depoimentos e avaliações (`src/data/testimonials.ts`, `src/data/dravitoria-lp/reviews.ts`) usam um campo `consentido: boolean`; o componente só renderiza o item se `consentido === true`. Isso torna estruturalmente impossível publicar um depoimento sem consentimento documentado, alinhado às regras do CFM para publicidade médica.
- **LP de tráfego isolada por namespace** — a landing page paga (`/lp/dravitoria-lp`) tem seus próprios componentes (`components/dravitoria-lp/*`) e dados (`data/dravitoria-lp/*`), sem reaproveitar nem modificar nada do site institucional. Permite iterar a LP (testes A/B, mudanças de copy agressivas) sem risco de regressão no site principal. `noindex` + exclusão do sitemap + `Disallow` no `robots.txt`, porque é página de conversão, não de descoberta orgânica.
- **Rastreamento de origem sem cookies/pixel de terceiros extra** — ver seção de Tracking abaixo.

---

## Tracking e atribuição de campanha

Stack de mensuração ativa (instalada em `BaseLayout.astro`, presente em toda página):

- **Google Tag Manager**
- **GA4** + **Google Ads** (via `gtag.js`, direto no `<head>`)
- **Meta Pixel**

### Carimbo de origem no clique de WhatsApp

Como toda conversão do site acontece "saindo" para o WhatsApp (sem formulário nem backend para gravar a origem do lead), foi implementado um script client-side (`src/scripts/whatsapp-ref.ts`) que:

1. Lê `utm_campaign` da URL da página no momento do carregamento;
2. Se existir, acrescenta `[ref: {utm_campaign}]` ao final da mensagem pré-preenchida do WhatsApp, **antes** do clique;
3. Se não houver UTM (acesso direto/orgânico), não altera nada.

O script é um único módulo compartilhado, importado tanto pelo componente reutilizável `<WhatsAppCTA />` (usado em +15 pontos do site) quanto pelo link de WhatsApp do rodapé (que não usa esse componente) — garantindo que **toda página do site**, mesmo as que não têm um CTA de WhatsApp "oficial" na área de conteúdo, ainda assim carimbe corretamente o link do rodapé. O bundler do Astro deduplica o módulo automaticamente, então ele é baixado uma única vez por página independente de quantos botões existam nela.

Resultado prático: quem responde no WhatsApp já vê de qual campanha o lead veio, sem precisar de nenhuma ferramenta paga de atribuição.

---

## Rodando localmente

```bash
npm install
npm run dev        # http://localhost:4321
```

Outros scripts:

```bash
npm run build       # astro check + build de produção (dist/)
npm run build:fast  # build sem type-check, mais rápido
npm run preview     # serve o build de produção localmente
npm run astro check # só o type-check
```

### Variáveis de ambiente (`.env`, ver `.env.example`)

| Variável | Uso |
|---|---|
| `PUBLIC_SITE_URL` | URL canônica do site (usada em SEO, sitemap, JSON-LD) |
| `PUBLIC_WHATSAPP` | Número de WhatsApp de atendimento, formato internacional só dígitos |
| `GOOGLE_MAPS_EMBED_KEY` | Chave do Google Maps Embed, só nas páginas com vínculo local real |
| `OPENAI_API_KEY` | Usada apenas localmente pelo script `scripts/gen-images.mjs` (geração de imagens), nunca entra no build nem chega ao cliente |
| `CONTACT_EMAIL` / `RESEND_API_KEY` | Reservadas, não usadas hoje (agendamento é só via WhatsApp) |

---

## Deploy e infraestrutura

- **Hospedagem:** Cloudflare Pages, build estático (`pages_build_output_dir = "./dist"`, ver `wrangler.toml`).
- **Fluxo principal:** push na branch `main` do repositório conectado ao Cloudflare Pages dispara build e deploy automáticos. Pull requests/branches de feature geram preview com URL própria.
- **Deploy manual alternativo** (sem depender do GitHub):
  ```bash
  npm run deploy          # produção
  npm run deploy:preview  # preview
  ```
- **Domínio:** registrado no Registro.br, DNS gerenciado no Cloudflare (zona `dravitoriagomes.com.br`), redirect 301 de `www` para o domínio raiz.
- **SSL:** modo Full (strict) no Cloudflare, HTTPS forçado.

Passo a passo completo de configuração de DNS/Cloudflare Pages/variáveis de produção documentado em `DEPLOY.md` (não incluído neste README por ser operacional, não arquitetural).

---

## Compliance e boas práticas de conteúdo médico

Por ser um site de saúde (regras do Conselho Federal de Medicina para publicidade médica + LGPD), o código carrega algumas restrições estruturais:

- Identificação médica completa (nome, "Médica", CRM) presente em toda página via schema.org (`MedicalWebPage`) e rodapé.
- Nenhuma promessa de cura ou diagnóstico por texto — disclaimers padronizados centralizados em `src/data/site.ts`.
- Bloco de emergência (CVV 188 / SAMU 192) presente no rodapé de todo o site e em componente dedicado (`EmergencyBanner.astro`) nas páginas de conteúdo clínico.
- Depoimentos e avaliações só renderizam com consentimento documentado (`consentido: true`) — ver seção de arquitetura acima.
- Página de captação por tráfego pago (`/lp/dravitoria-lp`) filtra automaticamente qualquer conteúdo que use o termo "psiquiatra/psiquiatria" enquanto o RQE da especialidade não é emitido, mantendo a identificação exclusivamente como "Médica · CRM".
