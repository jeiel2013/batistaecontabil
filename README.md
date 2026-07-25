# Batista E-Contábil

Site institucional da **Batista E-Contábil**, escritório de contabilidade focado em soluções personalizadas para pequenas e médias empresas — MEI, comércio, prestadores de serviço, indústria, produtores rurais e profissionais liberais.

O site foi construído como uma aplicação **multi-página** (rotas próprias por seção), com foco em performance, responsividade e um visual minimalista e profissional.

## Sobre a empresa

A Batista E-Contábil oferece contabilidade completa para negócios de diferentes portes e segmentos, com atendimento próximo e direto (via WhatsApp), acompanhamento de obrigações fiscais, planejamento tributário e suporte contínuo — sem burocracia e sem depender só de canais automatizados.

## Stack

- **React 19** + **TypeScript**
- **Vite 7** — build e dev server
- **React Router 7** — roteamento multi-página
- **Tailwind CSS v4** (config via `@theme` no CSS, sem `tailwind.config.js`)
- **shadcn/ui** (estilo "new-york") — componentes base em `src/components/ui`
- **Radix UI** — primitives por trás dos componentes (`Avatar`, `HoverCard`, `Select`, etc.)
- **Embla Carousel** (+ `embla-carousel-autoplay`) — carrosséis arrastáveis com rotação automática
- **Lucide React** — ícones

## Estrutura do projeto

```
└── 📁batistaecontabil
    └── 📁public
        ├── batistaecontabil.svg
        ├── vite.svg
    └── 📁src
        └── 📁assets
            └── 📁sobre
                ├── equipe.jpg
                ├── escritorio.jpg
            ├── batistaecontabil.svg
            ├── home.svg
            ├── logo_alone.png
            ├── react.svg
        └── 📁components
            └── 📁ui
                ├── avatar.tsx
                ├── button.tsx
                ├── card.tsx
                ├── carousel.tsx
                ├── hover-card.tsx
                ├── image-placeholder.tsx
                ├── input.tsx
                ├── select.tsx
                ├── textarea.tsx
            ├── FooterSection.tsx
            ├── Header.tsx
            ├── Layout.tsx
        └── 📁lib
            ├── utils.ts
        └── 📁pages
            ├── ContatoPage.tsx
            ├── HomePage.tsx
            ├── NotFoundPage.tsx
            ├── ServicosPage.tsx
            ├── SobrePage.tsx
        ├── App.css
        ├── App.tsx
        ├── index.css
        ├── main.tsx
    ├── .gitignore
    ├── components.json
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

## Páginas e rotas

| Rota         | Página          | Conteúdo                                                              |
|--------------|-----------------|-------------------------------------------------------------------------|
| `/`          | `HomePage`      | Hero, carrossel dos sócios, prévia "Quem somos", prévia de serviços, CTA |
| `/sobre`     | `SobrePage`     | Texto institucional completo, fotos e carrossel de valores da empresa    |
| `/servicos`  | `ServicosPage`  | Diferenciais + seletor de segmento (MEI, Comércio, Indústria etc.)       |
| `/contato`   | `ContatoPage`   | Informações de contato e botão direto para o WhatsApp                    |
| `*`          | `NotFoundPage`  | Página 404                                                               |

Páginas fora da Home são carregadas sob demanda (`React.lazy` + `Suspense`), reduzindo o bundle inicial.

## Design

- **Tipografia**: uma única família (**Inter**), variando peso para hierarquia — visual minimalista, sem mistura de fontes.
- **Cores**: paleta de azuis da marca (`blue-main`, `blue-principal`, `blue-claro`) + um dourado (`gold-accent`) usado como traço/destaque pontual, nunca como preenchimento grande.
- **Componentes flat**: bordas finas (`border-subtle`) no lugar de sombras pesadas; cantos discretos.
- **Transições padronizadas**: curva de easing única (`--ease-fluid`) e utilitários `transition-smooth` / `hover-lift`, reaproveitados em botões, links e cards.
- **Acessibilidade**: `prefers-reduced-motion` respeitado globalmente; foco visível em links e botões.

## Funcionalidades

- Navegação multi-página com estado ativo no menu (`NavLink`) e scroll-to-top automático ao trocar de rota.
- Menu mobile funcional (hambúrguer + painel deslizante).
- Carrossel dos sócios (Home) e de valores (Sobre): arrastável com mouse/touch, com rotação automática contínua (Embla + Autoplay).
- Seletor de segmento na página de Serviços, trocando os benefícios exibidos dinamicamente.
- Botão de WhatsApp (Serviços e Contato) que abre a conversa já com uma mensagem pré-preenchida.
- `scrollbar-gutter: stable` para evitar deslocamento de layout ao abrir menus/`Select`; `Select` configurado com `modal={false}` para não travar o scroll da página.
- Imagens com `width`/`height`, `loading="lazy"` e `object-cover` para evitar layout shift.

## Como rodar o projeto

```bash
npm install
npm run dev       # inicia o servidor de desenvolvimento (Vite)
```

Outros scripts disponíveis:

```bash
npm run build      # gera a build de produção (tsc -b && vite build)
npm run preview    # serve a build de produção localmente
npm run lint       # roda o ESLint
```

## Imagens

As fotos usadas atualmente em `src/assets/sobre/` (equipe e escritório) são temporárias, de bancos de imagens gratuitos, até a Batista E-Contábil disponibilizar as fotos oficiais. Basta substituir os arquivos no mesmo caminho e nome para atualizar.

## Desenvolvimento

Site desenvolvido por [@jeiel2013](https://github.com/jeiel2013).