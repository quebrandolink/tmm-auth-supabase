# My White Label App

Este projeto é uma aplicação Next.js projetada para ser reutilizável como uma solução white label. Ele permite que você personalize a aparência e a funcionalidade da aplicação para diferentes marcas, mantendo uma base de código comum.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
supabase-auth-app
├── src
│   ├── app
│   │   ├── layout.tsx          # Layout principal da aplicação
│   │   ├── page.tsx            # Página inicial da aplicação
│   │   └── auth
│   │       ├── confirm-email
│   │       │   └── page.tsx    # Página de confirmação de e-mail
│   │       ├── magiclink
│   │       │   └── page.tsx    # Página de login via link mágico
│   │       └── reset-password
│   │           └── page.tsx    # Página de redefinição de senha
│   ├── themes
│   │   ├── default
│   │   │   ├── colors.ts        # Definições de cores para o tema padrão
│   │   │   ├── typography.ts     # Configurações de tipografia para o tema padrão
│   │   │   └── index.ts         # Exporta as configurações de tema padrão
│   │   └── types.ts             # Tipos utilizados para os temas
│   ├── config
│   │   ├── brands.ts            # Configurações específicas das marcas
│   │   └── theme.ts             # Configuração do tema
│   └── styles
│       └── globals.css          # Estilos globais da aplicação
├── package.json                  # Configuração do npm
├── next.config.js               # Configurações específicas do Next.js
└── README.md                    # Documentação do projeto
```

## Instalação

Para instalar as dependências do projeto, execute:

```bash
npm install
```

## Uso

Para iniciar a aplicação em modo de desenvolvimento, execute:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Personalização

Para personalizar a aplicação para diferentes marcas, você pode modificar os arquivos em `src/config/brands.ts` e ajustar os temas em `src/themes/default/`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias e correções. Para isso, faça um fork do repositório e envie um pull request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.


