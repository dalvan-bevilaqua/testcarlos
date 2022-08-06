# examinaBem
Repositório privado do projeto examinaBem.

---
## Requirements

- NodeJS 14.15.0
- Yarn 1.22.5+
## This project uses lot of stuff as:

- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Styled Media Query](https://github.com/morajabi/styled-media-query)
- [Next Auth](https://next-auth.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Axios](https://github.com/axios/axios)
- [React Icons](https://react-icons.github.io/react-icons)

## Get started

Install dependencies

```bash
yarn install
```

Create an `.env` file and configure it like this:

```
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=<auth-api-url>
NEXT_PUBLIC_BASE_URL=<api-url>
NEXT_PUBLIC_BASE_DISEASE_URL=<disease-api-url>
NEXT_PUBLIC_BASE_ANALYSIS_URL=<analysis-api-url>
NEXT_PUBLIC_BASE_NUTRACEUTIC_URL=<nutraceutic-api-url>
NEXT_PUBLIC_BASE_PRESCRIPTION_URL=<prescription-api-url>
```

Run the project in development mode:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available commands

- `dev`: run the application in development mode `localhost:3000`
- `build`: create production version
- `start`: run production version
- `test`: run tests on all templates
- `test:watch`: run jest in observation mode
- `storybook`: run the storybook at the address `localhost:6006`
- `build-storybook`: build the storybook to production
- `eslint:check`: runs linter on all components and pages
- `prettier:check`: check formatting on all components and pages
- `prettier:format`: formats all components and pages


## Design patterns

* Arquitetura flux
* Controle de estado com Context API
* Uso de styled-components com padrão wildcard
* Tipagem com typescript

```
 /src
    /components
      _Componentes reutilizáveis_
    /modules
      _Componentes específicos_
    /hooks
      _Contextos e hooks customizadas_
    /icons
      _Ícones personalizados_
    /pages
      _Sistema de rotas_
    /services
      _Integrações e serviços_
    /styles
      _Themas e estilos globais_
    /templates
      _Páginas da aplicação_
    /types
      _Definições de tipagem global_
    /utils
      _Métodos úteis_
```

## Recommended extensions for VSCode

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

*Configuração do .settings*

```
{
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "typescript.tsdk": "node_modules/typescript/lib",
}

```
