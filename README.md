# NWY Advocacia - Site Institucional
feito or tauatech.com](https://tauatech.com)

Este projeto é o site institucional moderno e responsivo do escritório **NWY Advocacia**, desenvolvido utilizando as melhores práticas de React, TypeScript e TailwindCSS.

---

## 🏗️ Arquitetura e Modularização

O projeto foi totalmente refatorado sob o princípio de responsabilidade única (*Single Responsibility Principle*), dividindo o código em componentes menores, modulares e de fácil manutenção:

```
src/
└── app/
    ├── constants/
    │   └── colors.ts            # Centralização da paleta de cores (Design Tokens)
    ├── components/
    │   ├── layout/
    │   │   ├── Logo.tsx         # Componente do logotipo vetorial (SVG)
    │   │   ├── Watermarks.tsx   # Marcas d'água decorativas de fundo
    │   │   ├── Navbar.tsx       # Barra de navegação e menu mobile responsivo
    │   │   └── Footer.tsx       # Rodapé institucional do escritório
    │   └── sections/
    │       ├── Hero.tsx         # Seção principal com background em vídeo
    │       ├── About.tsx        # Seção institucional (O Escritório)
    │       ├── PracticeAreas.tsx# Grade com as áreas de atuação jurídica
    │       ├── Methodology.tsx  # Linha metodológica e eixos de atuação
    │       ├── Lawyers.tsx      # Perfil dos advogados em escala de cinza
    │       ├── Quote.tsx        # Manifesto de posicionamento
    │       └── Contact.tsx      # Formulário de contato com mapa integrado
    └── App.tsx                  # Orquestrador declarativo conciso
```

---

## 🔒 Segurança e Melhores Práticas

* **Zero Vulnerabilidades**: Todas as dependências (incluindo o servidor de build Vite e o processador de estilos PostCSS) foram atualizadas e auditadas. O projeto conta com **0 vulnerabilidades conhecidas** (`npm audit`).
* **Proteção contra Bots (Honeypot)**: O formulário de contato inclui um campo invisível para usuários humanos. Caso bots automatizados tentem disparar spams preenchendo este campo, a submissão é bloqueada instantaneamente.
* **Validação de Inputs**: Validação automática nativa com HTML5 e lógica interna em JavaScript para checagem de e-mails válidos através de expressão regular (`regex`), prevenindo entradas malformadas.
* **Notificações Dinâmicas (Sonner Toasts)**: Notificações elegantes de erro e sucesso no canto inferior direito para guiar a interação do usuário durante o envio de formulários.
* **Links Seguros**: Uso rigoroso do atributo `rel="noopener noreferrer"` em todos os links externos de destino dinâmico, prevenindo falhas de segurança de redirecionamento de aba (*Reverse Tabnabbing*).
* **SEO e Privacidade**: Meta tags configuradas para compartilhamento (Open Graph) e indexação restrita via controle de robôs (`noindex`).

---

## 🚀 Tecnologias

* **Core**: React 18.3 & TypeScript
* **Servidor e Compilador**: Vite 6.4
* **Estilização**: TailwindCSS
* **Notificações**: Sonner (Toast)
* **Compressores**: Vite Image Optimizer (compressão otimizada de imagens na compilação)

---

## 💻 Desenvolvimento Local

Siga as instruções abaixo para rodar o projeto localmente:

### 1. Instalar as dependências
```bash
npm install
```

### 2. Executar o servidor de desenvolvimento
```bash
npm run dev
```

### 3. Compilar para Produção (Build Otimizado)
```bash
npm run build
```
O build otimizará automaticamente as imagens de assets em até 41% e empacotará os scripts e CSS para máxima performance.