# Deploy e conexão do domínio

Site da Dra. Vitória Gomes. Astro estático, hospedagem Cloudflare Pages, domínio no Registro.br.

**Status:** tudo preparado, **nada publicado ainda** (decisão de 16/07/2026).

---

## Situação verificada (16/07/2026)

| Item | Estado |
|---|---|
| Domínio `dravitoriagomes.com.br` | Registrado no Registro.br |
| DNS atual | Servidores automáticos do Registro.br (`a.auto.dns.br`, `b.auto.dns.br`) |
| Site publicado no domínio | Não (sem registro A) |
| E-mail no domínio | Não (MX nulo e SPF `v=spf1 -all`) |
| Conta Cloudflare | `marcos326@gmail.com` |
| Projeto no Cloudflare Pages | Ainda não criado |

**Consequência prática:** como o domínio está parado, sem site e sem e-mail, trocar os nameservers para o Cloudflare **não derruba nenhum serviço existente**. É uma migração de risco baixo.

---

## ⚠️ Antes de ir ao ar (bloqueadores)

Não conecte o domínio antes de resolver estes itens. O site é de saúde, e um CTA quebrado na frente de uma paciente é sério.

- [x] ~~**WhatsApp real.**~~ **Feito (16/07/2026):** `+55 85 99236-4924`, configurado em `.env` (`PUBLIC_WHATSAPP=5585992364924`) e no fallback de `src/data/site.ts`. É o destino de todos os CTAs.
- [ ] **E-mail real** de contato. Hoje está `contato@dravitoriagomes.com.br`, que ainda **não existe** (o domínio não tem MX). Ou criar o e-mail, ou trocar por um real em `src/data/site.ts` e na Política de Privacidade.
- [ ] **Fotos reais** da Dra. Vitória (hero, sobre, condições) e mockups de teleconsulta. Hoje são placeholders.
- [ ] **Depoimentos** reais e consentidos, se houver. Sem isso o slider não aparece, o que está correto.
- [ ] **`GOOGLE_MAPS_EMBED_KEY`**, se quiser o mapa nas páginas do Ceará, Fortaleza e Serra.
- [ ] **RQE**, se/quando houver, no campo `rqe` de `src/data/site.ts`.
- [ ] Validar com a cliente o uso do termo "psiquiatra" no marketing, já que a pós está em andamento e não há RQE. A identificação formal do site já usa "Médica · CRM/CE 28.844".

---

## Ordem correta das etapas

A ordem importa. O Registro.br **só aceita** nameservers que já respondam pela zona. Por isso a zona precisa existir no Cloudflare **antes** de mexer no Registro.br.

```
1. Criar a zona no Cloudflare  →  2. Trocar NS no Registro.br  →  3. Publicar o site  →  4. Ligar o domínio ao projeto
```

---

## Passo 1. Adicionar o domínio ao Cloudflare (você, no painel)

Precisa ser no painel porque o token local tem apenas `zone (read)`, sem permissão de criar zona.

1. Entrar em https://dash.cloudflare.com com `marcos326@gmail.com`.
2. **Add a domain** (ou "Adicionar site").
3. Digitar `dravitoriagomes.com.br`.
4. Escolher o plano **Free**.
5. O Cloudflare vai varrer o DNS atual. Como o domínio está parado, ele não vai encontrar quase nada. **Isso é esperado e está certo.**
6. Na tela seguinte, o Cloudflare mostra **dois nameservers** no formato:
   ```
   algumnome.ns.cloudflare.com
   outronome.ns.cloudflare.com
   ```
   **Anote os dois.** São únicos da sua conta e vão para o passo 2.

---

## Passo 2. Trocar os nameservers no Registro.br (você, no painel)

1. Entrar em https://registro.br com a conta titular do domínio.
2. Ir em **Painel** e depois em **Meus Domínios**.
3. Clicar em **dravitoriagomes.com.br**.
4. Abrir a aba **DNS** (ou "Alterar servidores DNS").
5. Trocar a opção de **"Usar os servidores DNS do Registro.br"** para **"Usar outros servidores DNS"**.
6. Remover `a.auto.dns.br` e `b.auto.dns.br`, e inserir os dois nameservers do Cloudflare do passo 1.
7. Salvar.

**Sobre a propagação.** O Registro.br faz uma checagem antes de aceitar. Se a zona já existe no Cloudflare, ele aceita. A publicação costuma sair em algumas horas, e o limite é 24h. No painel do Cloudflare o domínio vai de "Pending" para **Active** quando concluir.

---

## Passo 3. Publicar via GitHub (recomendado)

O repositório já existe e é **privado**:
**https://github.com/marcosyurimelo/dra-vitoria-gomes-site** (branch `main`)

> ⚠️ O repositório é **só a pasta `site/`**, de propósito. A pasta acima contém
> documentos pessoais da cliente (certidão de casamento, contrato com CPF e RG).
> **Nunca** inicialize git na raiz do projeto.

### Conectar o Cloudflare Pages ao repositório

1. Painel do Cloudflare → **Workers & Pages** → **Create** → aba **Pages**
2. **Connect to Git** e autorizar o GitHub (escolher só este repositório)
3. Selecionar `dra-vitoria-gomes-site`
4. Configurar assim:

| Campo | Valor |
|---|---|
| Production branch | `main` |
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | deixar vazio (a raiz do repo já é o site) |

5. Em **Environment variables** (produção), adicionar:

| Variável | Valor |
|---|---|
| `PUBLIC_SITE_URL` | `https://dravitoriagomes.com.br` |
| `PUBLIC_WHATSAPP` | `5585992364924` |
| `NODE_VERSION` | `22` |
| `GOOGLE_MAPS_EMBED_KEY` | (só quando tiver a chave) |

> Não colocar `OPENAI_API_KEY` aqui. Ela serve só para gerar imagens localmente
> e não é usada no build.

6. **Save and Deploy**

### Como fica o fluxo de trabalho

A partir daí, o deploy é automático:

```bash
git add -A
git commit -m "descrição da mudança"
git push
```

Cada push na `main` publica em produção. Cada push em outra branch ou Pull Request
gera um **preview** com URL própria, ótimo para a cliente aprovar antes de ir ao ar.

### Alternativa: deploy manual

Continua disponível, sem depender do GitHub:

```bash
npm run deploy          # produção
npm run deploy:preview  # preview
```

---

## Passo 4. Ligar o domínio ao projeto Pages

Só depois que a zona estiver **Active** no Cloudflare.

1. No painel: **Workers & Pages** → projeto **dra-vitoria-gomes** → aba **Custom domains**.
2. **Set up a custom domain** e informar `dravitoriagomes.com.br`.
3. Repetir para `www.dravitoriagomes.com.br`.
4. Como a zona está na mesma conta, o Cloudflare cria os registros DNS sozinho e emite o certificado SSL.

### Redirecionar www para o domínio raiz
Em **Rules** → **Redirect Rules**, criar uma regra:
- Se `hostname` for igual a `www.dravitoriagomes.com.br`
- Redirecionar (301) para `https://dravitoriagomes.com.br/${path}`

Isso evita conteúdo duplicado no Google, já que o `canonical` do site aponta para o domínio sem www.

---

## Passo 5. Ajustes recomendados no Cloudflare

- **SSL/TLS:** modo **Full (strict)**.
- **Always Use HTTPS:** ligado.
- **Auto Minify e Brotli:** o Astro já entrega otimizado, não precisa forçar.
- **Bot Fight Mode:** pode ligar, é um site institucional.

---

## Verificação depois de publicar

```bash
# status HTTP das rotas principais
node -e '["/","/ansiedade/","/agendar/","/psiquiatra-online/ceara/","/blog/"].forEach(async p=>{const r=await fetch("https://dravitoriagomes.com.br"+p);console.log(r.status,p)})'
```

Conferir também:
- [ ] `https://dravitoriagomes.com.br/sitemap-index.xml` acessível
- [ ] `https://dravitoriagomes.com.br/robots.txt` com a linha do Sitemap
- [ ] `/quiz` e `/lp/consulta` com `noindex` e fora do sitemap
- [ ] Cadeado SSL válido, e `www` redirecionando para o domínio raiz
- [ ] CTAs abrindo o WhatsApp **no número real**
- [ ] Enviar o sitemap no Google Search Console e validar a propriedade

---

## Rollback

Se algo der errado, é só voltar no Registro.br para "Usar os servidores DNS do Registro.br". O domínio volta ao estado parado de antes. Como não há e-mail nem site anterior, não há perda.
