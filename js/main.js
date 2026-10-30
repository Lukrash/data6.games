// Main JavaScript Logic for Data6 Games Web App

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Render Game Cards
    const gamesGrid = document.getElementById('games-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderGames(filter = 'all') {
        gamesGrid.innerHTML = '';

        const filteredGames = filter === 'all' 
            ? GAMES_DATA 
            : GAMES_DATA.filter(game => game.genre === filter);

        filteredGames.forEach(game => {
            const card = document.createElement('div');
            card.className = "game-card bg-[#121824] border border-gray-800 rounded-2xl overflow-hidden flex flex-col group";

            card.innerHTML = `
                <div class="relative overflow-hidden h-48">
                    <img src="${game.image}" alt="${game.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#121824] via-transparent to-transparent opacity-80"></div>
                    <span class="absolute top-3 left-3 bg-cyan-500/90 text-black font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-md tracking-wider">
                        ${game.badge}
                    </span>
                </div>
                <div class="p-6 flex-1 flex flex-col justify-between">
                    <div>
                        <div class="text-xs text-cyan-400 font-semibold mb-1 uppercase tracking-wider">${game.category}</div>
                        <h3 class="text-xl font-bold text-white mb-2">${game.title}</h3>
                        <p class="text-gray-400 text-xs font-sans line-clamp-2 mb-4 leading-relaxed">${game.description}</p>
                    </div>
                    <div class="pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400 font-sans">
                        <div class="flex items-center gap-2">
                            <i data-lucide="monitor" class="w-4 h-4 text-cyan-400"></i>
                            <span>${game.platforms.join(' / ')}</span>
                        </div>
                        <button onclick="window.open('${game.url}', '_blank')" class="text-white hover:text-[#ff007f] font-bold text-xs flex items-center gap-1 transition-colors">
                            Jugar <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                </div>
            `;
            gamesGrid.appendChild(card);
        });

        // Re-initialize dynamic icons inside cards
        lucide.createIcons();
    }

    // Initial Render
    renderGames();

    // Filter Buttons Event Listeners
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('active', 'border-cyan-500', 'bg-cyan-500/20', 'text-cyan-300');
                b.classList.add('border-gray-800', 'bg-gray-900', 'text-gray-400');
            });

            btn.classList.add('active', 'border-cyan-500', 'bg-cyan-500/20', 'text-cyan-300');
            btn.classList.remove('border-gray-800', 'bg-gray-900', 'text-gray-400');

            const filter = btn.getAttribute('data-filter');
            renderGames(filter);
        });
    });
});
