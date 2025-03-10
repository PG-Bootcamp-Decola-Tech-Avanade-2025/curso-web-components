class NewsCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = "<h1> Hello world! </h1>";
    }
}

customElements.define("news-card", NewsCard);