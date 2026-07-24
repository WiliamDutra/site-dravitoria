import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Domínio confirmado e registrado no Registro.br (verificado em 16/07/2026).
// Pode ser sobrescrito por PUBLIC_SITE_URL no .env, se um dia mudar.
const SITE = process.env.PUBLIC_SITE_URL || 'https://dravitoriagomes.com.br';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [
    tailwind({
      // usamos base própria em src/styles/global.css
      applyBaseStyles: false,
    }),
    sitemap({
      // Não indexar quiz e landing de tráfego (noindex).
      filter: (page) =>
        !page.includes('/quiz') && !page.includes('/lp/'),
      i18n: {
        defaultLocale: 'pt-BR',
        locales: { 'pt-BR': 'pt-BR' },
      },
    }),
  ],
});
