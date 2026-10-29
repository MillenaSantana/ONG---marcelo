# Natalia — Padrinhos que Transformam

## Integrantes

Protótipo desenvolvido por: **[preencher com os nomes dos integrantes da equipe]**.

## Objetivo do projeto

Este projeto é um protótipo acadêmico de um site para uma ONG fictícia de apadrinhamento de crianças e adolescentes. A proposta é demonstrar como uma identidade natalina acolhedora pode convidar pessoas a conhecer projetos, participar da rede e iniciar uma conversa sobre apadrinhamento.

A estética usa **verde pinheiro** como cor de confiança e continuidade, **cranberry** para chamadas à ação, **creme** como base acolhedora, **dourado** para os detalhes de celebração e **azul-noite** para dar contraste ao rodapé. Os títulos usam uma serifada editorial (`Playfair Display`, com fallback Georgia) e os textos usam uma sans-serif legível (`DM Sans`, com fallback Arial).

## Páginas

- **Início (`index.html`)** — apresenta a causa, a campanha de fim de ano, números de impacto, chamada para os projetos e convite para participação.
- **Sobre (`sobre.html`)** — conta a história fictícia da ONG, apresenta missão, valores, público atendido e objetivos.
- **Projetos (`projetos.html`)** — apresenta as iniciativas Uma mochila pronta, Uma mesa compartilhada e Uma presença que fica, incluindo imagens, descrições e formas de contribuir.
- **Contato (`contato.html`)** — traz canais institucionais e um formulário de contato simulado com nome, e-mail, assunto e mensagem.

## Interações em JavaScript

O arquivo externo `js/script.js` contém três comportamentos:

1. Menu responsivo: o botão de menu abre e fecha a navegação em telas pequenas.
2. Detalhes do projeto: em Projetos, o botão **Ver como funciona** exibe ou oculta detalhes de Uma presença que fica usando `addEventListener("click", ...)`, sem recarregar a página.
3. Formulário: o envio é controlado por `addEventListener("submit", ...)` e `preventDefault()`. Os valores são lidos com `.value` e normalizados com `.trim()`.

A validação verifica nome com pelo menos 3 caracteres, e-mail preenchido com formato básico válido, assunto obrigatório e mensagem com pelo menos 10 caracteres. Os erros aparecem ao lado dos campos e, quando tudo está correto, uma mensagem de confirmação fica visível.

## Simulação do formulário

Nenhum e-mail será realmente enviado e nenhum dado será armazenado. O formulário existe apenas para demonstrar a funcionalidade no protótipo acadêmico.

## Como executar

1. Extraia o projeto mantendo as pastas `css`, `js` e `assets`.
2. Abra `index.html` em um navegador para uma leitura estática simples; ou sirva a pasta por um servidor local para testar a navegação, por exemplo:

   ```bash
   python3 -m http.server 3000
   ```

3. Acesse `http://localhost:3000`.
4. Teste a navegação entre as quatro páginas, o menu em uma largura próxima de 390px, a interação de detalhes em Projetos e o formulário com dados incorretos e corretos.

## Arquivos principais

```text
index.html
sobre.html
projetos.html
contato.html
css/styles.css
js/script.js
manus-routes.json
assets/
README.md
```

## Fontes e créditos

- Tipografia: [Google Fonts](https://fonts.google.com/), famílias Playfair Display e DM Sans.
- Imagens: ilustrações originais geradas para este protótipo por ferramenta de geração de imagens. O conjunto inclui a cena principal (`hero-natalia.webp`), três ilustrações de projetos (`projeto-mochila.webp`, `projeto-ceia.webp`, `projeto-presenca.webp`) e três novas ilustrações editoriais (`sobre-rede.webp`, `projeto-cultura.webp`, `contato-carta.webp`). Os arquivos são usados exclusivamente como elementos visuais do protótipo.
- Ícones e ornamentos: caracteres tipográficos e CSS autoral, sem biblioteca externa.

## Observação acadêmica

A Natalia — Padrinhos que Transformam é uma organização fictícia criada para fins acadêmicos. Números, endereços, e-mail, história e iniciativas são conteúdo demonstrativo e não representam uma ONG real.
