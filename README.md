# Upsell - Rei do Bafo

Página de upsell imediato + downsell do produto Rei do Bafo.

## Rotas

- `/` - Upsell principal (Modo Predador por R$ 29,90) com barra de carregamento de 90s
- `/downsell` - Página de downsell (Modo Predador por R$ 19,90)
- `/sucesso` - Confirmação e redirect para o entregável

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Rodar local

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Deploy

Deploy no Vercel direto do repositório. Sem variáveis de ambiente.
