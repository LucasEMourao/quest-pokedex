# Quest Pokédex API

Essa aplicação mostra uma lista inicial de dez pokémons, com um botão(uma pokeball fechada) para recarregar a página e um botão abaixo para exibir mais dez pokémons. E támbém há um alternador de temas, do tema claro para o tema escuro de toda a página principal e interna.

## Funcionalidades do site:
- Listagem de dez pokémons, com botão para mostrar mais dez.
- Um botão para alternar os temas.
- Uma página interna de cada pokémon, com os respectivos detalhes pedidos, sendo eles as habilidades e suas descrições, os movimentos, o tipo, o nome e a imagem do pokémon.

## Ferramentas Utilizadas
- **react.js**: Para construção da interface do usuário, no modelo SPA(Single Page Application).
- **axios**: Para realizar as requisições da API.
- **styled-components**: Estilização do projeto.
- **context API**: Alternar entre os temas claro e escuro.
- **react router DOM**: Para navegação entre as páginas.

## Como rodar o projeto:
1- Clone o repositório do mesmo.
2- No terminal, execute o comando `npm install` para instalar as dependências.
3- Execute `npm run dev` para iniciar a aplicação web.

## Desafios, decisões e informações adicionais
Foi um projeto muito desafiador onde pude colocar a prova tudo que vim aprendendo no curso, eu busquei a simplicidade e objetividade. Após vários erro, tentativas e novos erros e bugs finalmente o acerto veio e consegui concluir o passo a passo que eu fiz anteriormente, que foi basicamente buscar a API, o caminho para as informações pedidas ( o mais dificil foram as descrições das habilidades ), fazer as requisições especificas para a quantidade de pokémons e por id(para conseguir buscar a descrição das habilidades), e organizando as informações e as requisições para renderizar na tela do usuário da maneira mais organizada e responsiva possível. Espero que que gostem e pretendo vim e adicionar algumas funcionalidades e testes nesse projeto futuramente, um compromisso que faço comigo mesmo publicamente. Até breve 😁.