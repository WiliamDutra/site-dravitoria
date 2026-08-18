# Como reaproveitar este layout para outro cliente

Guia para levar a estrutura visual deste projeto (Astro 5 + React 19 + Tailwind 4, ver `CLAUDE.md`/`DESIGN.md`) para um cliente novo, em outro repositório.

## Antes de tudo: como é o repositório de destino?

**Repositório novo/vazio** — duplique este projeto inteiro (`git clone` local ou "Use this template" no GitHub) e siga direto para "Conteúdo a trocar" abaixo. Não precisa do resto deste guia.

**Repositório já existe com site próprio** (caso mais comum) — siga o método de portagem isolada abaixo. Foi assim que portamos esta LP para dentro do repositório da agência (`institutolongevita-site`, rota `/lp/drpaulo`).

## Portagem isolada num repositório existente

Regra de ouro: **nunca tocar em nada que já existe** — só adicionar. Sem editar `BaseLayout`, CSS global, `astro.config.mjs` (exceto adicionar integração, nunca remover) ou qualquer arquivo compartilhado deles além do estritamente necessário.

1. **Reconhecer o repositório de destino primeiro.** Ler o `package.json`, `astro.config.mjs`, e 2-3 componentes existentes para descobrir: usa alias `@/` ou imports relativos? Tem Tailwind 3 ou 4? Já tem React configurado (`@astrojs/react`)? Qual o output (`static`/`server`)? Como é o deploy (Vercel/Cloudflare Pages/outro, branch de produção)?
2. **Criar uma árvore isolada e namespaced**, espelhando a estrutura deste projeto:
   - `src/components/{namespace}-lp/{sections,ui,icons}/*.astro`
   - `src/data/{namespace}-lp/*.ts`
   - `public/img/{namespace}-lp/*.webp`
   - Uma única página nova: `src/pages/lp/{namespace}.astro` (ou o slug combinado com o cliente)
   - `{namespace}` = algo curto e único (ex.: nome do cliente/projeto), para não colidir com nada que já exista lá.
3. **Copiar os componentes** de `src/components/` deste projeto para a árvore isolada, **reescrevendo os imports de `@/...` para relativos** (`../ui/Button.astro`, `../../../data/{namespace}-lp/site`, etc.) — nunca usar o alias `@/` deles, mesmo que exista, para evitar colisão de nomes de arquivo.
4. **Copiar `src/data/*.ts`** para `src/data/{namespace}-lp/`, e **preencher com o conteúdo do cliente novo** (ver checklist abaixo).
5. **Copiar as imagens reais do cliente** para `public/img/{namespace}-lp/` e ajustar todo caminho `/img/xxx.webp` para `/img/{namespace}-lp/xxx.webp` nos componentes copiados.
6. **Se algum componente usar React** (como a `ExpandableGallery.tsx` deste projeto), confirmar se o repositório de destino já tem `@astrojs/react` configurado. Se não tiver:
   - `npm install @astrojs/react react react-dom` (+ `motion` se o componente usar animação)
   - Adicionar `react()` ao array `integrations` do `astro.config.mjs` deles (aditivo, sem remover nada existente)
7. **Testar localmente** (`npm run dev` / `npm run build` no repositório de destino) confirmando: a rota nova renderiza sem erro de console, nenhuma outra rota do site foi afetada, e a contagem de páginas geradas no build não caiu.
8. **Commitar só o escopo isolado** (`git status --short` deve mostrar apenas arquivos dentro de `{namespace}-lp/`, mais `package.json`/`package-lock.json`/`astro.config.mjs` se houve dependência nova) — nunca `git add -A` sem revisar.
9. **Nunca mesclar em `main`/produção sem confirmação explícita** — publicar num domínio real de cliente é uma ação de alto risco; sempre confirmar antes de fazer merge + push.

## Conteúdo a trocar (equivalente a `src/data/*.ts` deste projeto)

Para brifar o conteúdo do cliente novo, é essencialmente preencher o equivalente de:

| Arquivo original | O que descreve |
|---|---|
| `site.ts` | Nome do profissional/clínica, CRM/registro, cidade, WhatsApp, Instagram, SEO |
| `specialties.ts` | Grid de especialidades/serviços (título + descrição + ícone Lucide) |
| `painPoints.ts` | Headline + bullets de dor/frustração do público-alvo |
| `differentiators.ts` | 3 diferenciais da clínica |
| `procedures.ts` | Procedimentos/tratamentos oferecidos |
| `achievements.ts` | Credenciais/conquistas para a seção "Sobre" |
| `reviews.ts` | Depoimentos (idealmente prints reais de avaliações, não texto fictício) |
| `faq.ts` | Perguntas frequentes |

**Atenção a compliance**: se o cliente novo for da área de saúde, confirmar RQE/registro profissional antes de rotular qualquer especialidade — não copiar rótulos de especialidade do Dr. Paulo sem verificar se o novo profissional tem o registro correspondente (foi exatamente esse tipo de erro que corrigimos na portagem para a agência: rótulo "Nutrólogo" sem RQE de Nutrologia).

## Prompt sugerido para a nova sessão do Claude Code

Se for abrir uma sessão nova no repositório de destino, adicione `C:\work\drpaulo` como diretório adicional (para o Claude conseguir ler os arquivos de referência) e use algo como:

> Quero portar a estrutura visual do projeto em `C:\work\drpaulo` (Astro 5 + React 19 + Tailwind 4) para este repositório, como uma seção isolada para o cliente [NOME]. Leia `C:\work\drpaulo\PORTING.md` e siga o método de portagem isolada descrito lá — reconheça primeiro as convenções deste repositório antes de criar qualquer arquivo. Dados do cliente novo: [nome, especialidade/registro profissional, cidade, WhatsApp, Instagram, especialidades/serviços, diferenciais, procedimentos, depoimentos reais se houver, FAQ].
