#!/usr/bin/env node
// ─── Gerador de imagens ambientais — Site Dra. Vitória Gomes ──────────────────
// Usa a API de imagens da OpenAI. Roda SÓ localmente. A chave vem do .env
// (OPENAI_API_KEY) e nunca entra no build nem no cliente.
//
// IMPORTANTE: não gere retrato da própria Dra. Vitória. Rosto de pessoa real
// é foto real. A IA aqui é para ambiente, textura, fundo, mockup e conceito.
//
// Uso:
//   node scripts/gen-images.mjs <preset> [--out caminho.png] [--quality high]
//   node scripts/gen-images.mjs --prompt "texto livre" --out public/images/x.png
//
// Presets disponíveis: veja o objeto PRESETS abaixo, ou rode sem argumentos.
// Flags: --prompt  --out  --size  --quality  --model  --n

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// ── Carrega .env sem dependência ──────────────────────────────────────────────
function loadEnv() {
  const path = resolve(ROOT, '.env');
  if (!existsSync(path)) return;
  for (const raw of readFileSync(path, 'utf8').split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = val;
  }
}
loadEnv();

// ── Estilo base — paleta e diretrizes de marca embutidas em todo prompt ───────
const BRAND = [
  'Warm earth-tone palette: espresso #2B211A, coffee #4A3B30, mocha #7A5E4E,',
  'clay #A88C7A, sand #C9B4A3, cream #F6EEE1, ivory #F1E8DA.',
  'Soft warm natural window light, gentle shadows, calm and human atmosphere.',
  'Editorial, elegant, understated. NO cold blue hospital tones, NO clinical',
  'stock-photo look, NO text, NO logos, NO watermark, NO visible faces of any',
  'identifiable person. Shallow depth of field, film-like grain, cozy.',
].join(' ');

const PRESETS = {
  'hero-bg': {
    out: 'public/images/hero/hero-bg.png',
    size: '1536x1024',
    prompt:
      'Serene out-of-focus interior of a warm, cozy home consulting room for ' +
      'integrative psychiatry: soft linen textures, a plant, a warm lamp, an ' +
      'armchair, morning light through a window. Abstract enough to sit behind text.',
  },
  'sobre-ambiente': {
    out: 'public/images/sobre/ambiente.png',
    size: '1024x1536',
    prompt:
      'A calm, welcoming home-office corner with a wooden desk, an open notebook, ' +
      'a warm cup, dried flowers and books. Human and personal, no people in frame.',
  },
  'teleconsulta-mockup': {
    out: 'public/images/teleconsulta/ambiente.png',
    size: '1536x1024',
    prompt:
      'A cozy desk with a laptop showing a soft, blurred warm video-call interface, ' +
      'a warm cup of tea, a plant, natural light. Suggests a calm online consultation. ' +
      'The laptop screen shows only abstract warm shapes, no recognizable face or UI text.',
  },
  'condicoes-textura': {
    out: 'public/images/condicoes/textura.png',
    size: '1536x1024',
    prompt:
      'Abstract calming texture: soft folded linen and paper in cream and sand tones, ' +
      'subtle organic gradient, minimal and editorial. For a conditions section background.',
  },
  'og-default': {
    out: 'public/og/default.png',
    size: '1536x1024',
    prompt:
      'A warm, editorial abstract background for a social share card: soft gradient of ' +
      'cream, sand and mocha tones with gentle light, generous empty space for overlaid text later.',
  },
};

// ── Parse de argumentos ───────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const flags = {};
let preset = null;
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a.startsWith('--')) flags[a.slice(2)] = argv[++i];
  else if (!preset) preset = a;
}

function printPresets() {
  console.log('\nPresets disponíveis:');
  for (const [k, v] of Object.entries(PRESETS)) console.log(`  ${k.padEnd(22)} → ${v.out}`);
  console.log('\nEx.:  node scripts/gen-images.mjs hero-bg --quality high');
  console.log('      node scripts/gen-images.mjs --prompt "texto" --out public/images/x.png\n');
}

const key = process.env.OPENAI_API_KEY;
if (!key) {
  console.error('✗ OPENAI_API_KEY não encontrada. Preencha o .env em site/.env');
  process.exit(1);
}

const base = preset ? PRESETS[preset] : null;
if (preset && !base) {
  console.error(`✗ Preset "${preset}" não existe.`);
  printPresets();
  process.exit(1);
}
if (!preset && !flags.prompt) {
  printPresets();
  process.exit(0);
}

const model = flags.model || 'gpt-image-1';
const size = flags.size || base?.size || '1024x1024';
const quality = flags.quality || 'high';
const n = Number(flags.n || 1);
const out = flags.out || base?.out;
const userPrompt = flags.prompt || base?.prompt;
const prompt = `${userPrompt}\n\nStyle: ${BRAND}`;

if (!out) {
  console.error('✗ Faltou --out para o caminho de saída.');
  process.exit(1);
}

// ── Chamada à API ─────────────────────────────────────────────────────────────
async function generate() {
  const body = { model, prompt, size, n };
  // gpt-image-1 aceita low|medium|high|auto; dall-e-3 aceita standard|hd.
  if (model === 'gpt-image-1') body.quality = quality;
  else body.response_format = 'b64_json';

  console.log(`→ Gerando (${model}, ${size}, q=${quality}) → ${out}`);
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const txt = await res.text();
    console.error(`✗ Erro ${res.status}: ${txt}`);
    if (/organization must be verified/i.test(txt)) {
      console.error('\nDica: gpt-image-1 exige verificação de organização na OpenAI.');
      console.error('Alternativa sem verificação:  --model dall-e-3');
    }
    process.exit(1);
  }

  const json = await res.json();
  const items = json.data || [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const target = resolve(ROOT, n > 1 ? out.replace(/(\.\w+)$/, `-${i + 1}$1`) : out);
    mkdirSync(dirname(target), { recursive: true });
    if (item.b64_json) {
      writeFileSync(target, Buffer.from(item.b64_json, 'base64'));
    } else if (item.url) {
      const img = await fetch(item.url);
      writeFileSync(target, Buffer.from(await img.arrayBuffer()));
    }
    console.log(`✓ Salvo: ${target}`);
  }
  if (json.usage) console.log(`  tokens: ${JSON.stringify(json.usage)}`);
}

generate().catch((e) => {
  console.error('✗ Falha:', e.message);
  process.exit(1);
});
