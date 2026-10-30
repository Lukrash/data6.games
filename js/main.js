const games = [
    {
        title: "Space Runner",
        description: "Esquiva obstáculos y consigue la máxima puntuación.",
        image: "images/game1.jpg",
        url: "games/space-runner/"
    },
    {
        title: "Block Puzzle",
        description: "Juego de lógica y estrategia basado en bloques.",
        image: "images/game2.jpg",
        url: "games/block-puzzle/"
    },
    {
        title: "Zombie Survival",
        description: "Sobrevive a hordas de enemigos y mejora tu equipo.",
        image: "images/game3.jpg",
        url: "games/zombie-survival/"
    }
];

const container = document.getElementById("gamesContainer");

games.forEach(game => {

    const card = document.createElement("article");

    card.classList.add("game-card");

    card.innerHTML = `
        <img
            src="${game.image}"
            alt="${game.title}"
            class="game-image">

        <div class="game-content">

            <h2 class="game-title">
                ${game.title}
            </h2>

            <p class="game-description">
                ${game.description}
            </p>

            <a
                href="${game.url}"
                class="play-btn">
                Jugar ahora
            </a>

        </div>
    `;

    container.appendChild(card);

});