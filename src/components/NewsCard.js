class NewsCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.classList.add("card");

        const cardLeft = document.createElement("div");
        cardLeft.classList.add("card__left");
        componentRoot.appendChild(cardLeft);

        const authorName = document.createElement("span");
        authorName.textContent = "By " + (this.getAttribute("author") || "Anonymous");
        cardLeft.appendChild(authorName);

        const cardTitleAnchor = document.createElement("h1");
        cardLeft.appendChild(cardTitleAnchor);

        const cardTitle = document.createElement("h1");
        cardTitle.textContent = this.getAttribute("title");
        cardTitleAnchor.appendChild(cardTitle);

        const cardContent = document.createElement("p");
        cardContent.textContent = this.getAttribute("content");
        cardLeft.appendChild(cardContent);

        const cardRight = document.createElement("div");
        cardRight.classList.add("card__right");
        componentRoot.appendChild(cardRight);

        const cardImg = document.createElement("img");
        cardImg.src = this.getAttribute("img_src");
        cardImg.alt = this.getAttribute("img_alt");

        cardRight.appendChild(cardImg);

        return componentRoot;
    }

    styles() {
        const stylesRoot = document.createElement("style");
        stylesRoot.textContent = `
        .card {
            min-width: 720px;
            max-width: 1024px;
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            padding: 1rem;
            gap: 1rem;
            border-radius: .5rem;
            filter: drop-shadow(0 0 .5rem rgba(0, 0, 0, .125));
            background-color: white;
        }

        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .card__left>span {
            font-weight: bold;
        }

        .card__left>a {
            text-decoration: none;
            color: black;
        }

        .card__left>h1 {
            margin-top: 1rem;
            font-size: 1.5rem;
        }

        .card__left>p {
            color: gray;
        }

        .card img {
            width: 100%;
            height: auto;
        }

        .card__right {
            display: flex;
            align-items: center;
        }
        `

        return stylesRoot;
    }
}

customElements.define("news-card", NewsCard);