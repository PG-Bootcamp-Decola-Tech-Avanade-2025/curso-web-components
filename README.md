# Projeto de estudo, seguindo o conteúdo apresentado no curso 'Arquitetura de Aplicações Rest com Spring Web'

## Anotações

### DOM
- Estrutura de árvore que descreve o documento HTML.

### Shadow DOM
- Estrutura de árvore aninhada em um nodo da estrutura mãe (DOM), pode ser completamente separada ou aberta a interação.
- É a estrutura através da qual criamos componentes.

### Componentes na prática
- Sua estrutura contém uma árvore de tags, estilização e propriedades (inputs).
- Defino como uma classe JS com `attachShadow` no construtor e, então, `customElements.define()`.
- Para utilizar, o script do componente deve ser importado no documento HTML com defer, para que seja importado ao fim do carregamento da DOM.
- Estilização na Shadow DOM funciona apenas dentro do escopo da mesma, não 'vaza' para a DOM raíz do documento.
- Estrutura e estilização são criadas dentro da classe JS, utilizando de métodos de manipulação de DOM para inserir tags.
- Props são utilizadas com o método `this.getAttribute(<nome-da-prop>)`.
- É possível ter valores padrão pra props com `||`.