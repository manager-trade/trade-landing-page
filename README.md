# Trade Landing Page

Site de marketing / aquisição do Trade Manager.  
Next.js independente do painel de gestão — não consome a API de operação no dia a dia; CTAs levam a login/register da gestão ou canais comerciais.

## Stack

| Peça | Uso |
|------|-----|
| Next.js | App Router / páginas estáticas |
| Tailwind v4 + lucide-react | UI marketing (cores do MIV Trade+ em `styles/globals.css`) |
| Vercel Analytics | Métricas |

## Arquitetura deste projeto

```mermaid
flowchart TB
  subgraph landing [trade-landing-page]
    PAGES[Páginas marketing<br/>hero · features · pricing · CTA]
    UI[components shadcn]
  end

  subgraph dest [Destinos]
    REG[trade-gestao-web /register]
    LOGIN[trade-gestao-web /login]
    EXT[WhatsApp / comercial]
  end

  PAGES --> UI
  PAGES -->|CTA| REG & LOGIN & EXT
```

```mermaid
flowchart LR
  VISITOR[Visitante] --> LP[Landing]
  LP -->|Criar conta| GW[Gestão · register]
  GW --> API[trade-backend POST /register]
  API --> DB[(MySQL sp_createaccount)]
```

**Fora do caminho crítico de campo.** Não substitui `trade-gestao-web` nem o app.

## Estrutura típica

```
app/ ou pages/     # rotas marketing
components/        # blocos de UI
lib/               # utils
public/            # assets
styles/
```

## Subir local

```bash
cd trade-landing-page
pnpm install
pnpm dev      # http://localhost:3000 (use --port 3002 se o painel já estiver na 3000)
pnpm lint     # ESLint (eslint-config-next)
pnpm build    # build de produção, com checagem de tipos
```

No Windows com a pasta no OneDrive, se uma mudança de CSS não aparecer, apague a pasta `.next` (cache do Turbopack).

Ajuste CTAs (URLs de register/login) para o ambiente da gestão (`http://localhost:3000` em dev).

## Relação com o ecossistema

| Projeto | Papel |
|---------|--------|
| `trade-gestao-web` | Destino de CTA (login / register) |
| `trade-backend` | Register SaaS, se o CTA apontar para o fluxo novo |
| `trade-app` | Sem acoplamento direto |
