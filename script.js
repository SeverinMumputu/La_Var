
        /* =========================================
           1. DATA DECLARATION (Déclaration depuis le script)
           ========================================= */
        const guests = [
            //Table 1 - Rose 
            { id: 1, firstName: "Lydia", lastName: "Zihindula", gender: "M", tableNumber: 1, tableName: "Rose", status: "Couple", state: "waiting" },
            { id: 2, firstName: "Serge", lastName: "Cishugi", gender: "F", tableNumber: 1, tableName: "Rose", status: "Couple", state: "waiting" },
            { id: 3, firstName: "Eric", lastName: "UWE", gender: "M", tableNumber: 1, tableName: "Rose", status: "Couple", state: "waiting" },
            { id: 4, firstName: "Président Albert", lastName: "Kisimba", gender: "F", tableNumber: 1, tableName: "Rose", status: "Couple", state: "waiting" },
            { id: 5, firstName: "Mandana", lastName: "", gender: "M", tableNumber: 1, tableName: "Rose", status: "Mr", state: "waiting" },
            { id: 6, firstName: "Magistrat JC", lastName: "Katako", gender: "N/A", tableNumber: 1, tableName: "Rose", status: "Couple", state: "waiting" },
                
            //Table 2 - Pivoine
            { id: 7, firstName: "Papa Rodrice", lastName: "", gender: "M", tableNumber: 2, tableName: "Pivoine", status: "Mr", state: "waiting" },
            { id: 8, firstName: "Blaise", lastName: "Mavangu", gender: "M", tableNumber: 2, tableName: "Pivoine", status: "Mr", state: "waiting" },
            { id: 9, firstName: "Célé", lastName: "Shomba", gender: "F", tableNumber: 2, tableName: "Pivoine", status: "Mme", state: "waiting" },
            { id: 10, firstName: "Ketshia", lastName: "", gender: "F", tableNumber: 2, tableName: "Pivoine", status: "Mme", state: "waiting" },
            { id: 11, firstName: "Eliza", lastName: "", gender: "F", tableNumber: 2, tableName: "Pivoine", status: "Mme", state: "waiting" },
            { id: 12, firstName: "Bintu", lastName: "", gender: "F", tableNumber: 2, tableName: "Pivoine", status: "Mme", state: "waiting" },
            { id: 13, firstName: "Gabriel", lastName: "", gender: "M", tableNumber: 2, tableName: "Pivoine", status: "Mr", state: "waiting" },
            { id: 14, firstName: "Tigre", lastName: "", gender: "N/A", tableNumber: 2, tableName: "Pivoine", status: "Couple", state: "waiting" },

            //Table 3 - Orchidee
            { id: 15, firstName: "AG", lastName: "Kabamba", gender: "N/A", tableNumber: 3, tableName: "Orchidee", status: "Couple", state: "waiting" },
            { id: 16, firstName: "Pierrot", lastName: "Kayabika", gender: "N/A", tableNumber: 3, tableName: "Orchidee", status: "Couple", state: "waiting" },
            { id: 17, firstName: "Conseiller Allain", lastName: "", gender: "N/A", tableNumber: 3, tableName: "Orchidee", status: "Couple", state: "waiting" },
            { id: 18, firstName: "Kabwe", lastName: "Kaloko", gender: "N/A", tableNumber: 3, tableName: "Orchidee", status: "Couple", state: "waiting" },
            { id: 19, firstName: "Didier", lastName: "Kingombe", gender: "N/A", tableNumber: 3, tableName: "Orchidee", status: "Couple", state: "waiting" },

            //Table 4 - Lys
            { id: 20, firstName: "Gabin", lastName: "Manzonzika", gender: "N/A", tableNumber: 4, tableName: "Lys", status: "Couple", state: "waiting" },
            { id: 21, firstName: "Colonel", lastName: "Saidi", gender: "N/A", tableNumber: 4, tableName: "Lys", status: "Couple", state: "waiting" },
            { id: 22, firstName: "Tshimanga", lastName: "", gender: "N/A", tableNumber: 4, tableName: "Lys", status: "Couple", state: "waiting" },
            { id: 23, firstName: "Maguy", lastName: "Kaloko", gender: "F", tableNumber: 4, tableName: "Lys", status: "Mme", state: "waiting" },
            { id: 24, firstName: "Marie", lastName: "Kaloko", gender: "F", tableNumber: 4, tableName: "Lys", status: "Mme", state: "waiting" },
            { id: 25, firstName: "Agnès", lastName: "Kayombo", gender: "F", tableNumber: 4, tableName: "Lys", status: "Mme", state: "waiting" },
            { id: 26, firstName: "Micheline", lastName: "Nyawu Sohoya", gender: "F", tableNumber: 4, tableName: "Lys", status: "Mme", state: "waiting" },

            //Table 5 - Tulipe
            { id: 27, firstName: "Gina", lastName: "Mwamba", gender: "F", tableNumber: 5, tableName: "Tulipe", status: "Mme", state: "waiting" },
            { id: 28, firstName: "Bebi", lastName: "Mayombo", gender: "F", tableNumber: 5, tableName: "Tulipe", status: "Mme", state: "waiting" },
            { id: 29, firstName: "Onyebushi", lastName: "", gender: "N/A", tableNumber: 5, tableName: "Tulipe", status: "Couple", state: "waiting" },
            { id: 30, firstName: "Gendrette", lastName: "Bonzeka", gender: "F", tableNumber: 5, tableName: "Tulipe", status: "Mme", state: "waiting" },
            { id: 31, firstName: "Patsheli", lastName: "Bonzeka", gender: "F", tableNumber: 5, tableName: "Tulipe", status: "Mme", state: "waiting" },
            { id: 32, firstName: "Emmanuel", lastName: "Kapayika", gender: "N/A", tableNumber: 5, tableName: "Tulipe", status: "Couple", state: "waiting" },
            { id: 33, firstName: "Plamedi", lastName: "Kasinga", gender: "F", tableNumber: 5, tableName: "Tulipe", status: "Mme", state: "waiting" },
            { id: 34, firstName: "Ketshia", lastName: "Kilele", gender: "F", tableNumber: 5, tableName: "Tulipe", status: "Mme", state: "waiting" },

            //Table 6 - Jasmin
            { id: 35, firstName: "Romeo", lastName: "Yaekela", gender: "M", tableNumber: 6, tableName: "Jasmin", status: "Mr", state: "waiting" },
            { id: 36, firstName: "Glody", lastName: "Kabongo", gender: "M", tableNumber: 6, tableName: "Jasmin", status: "Mr", state: "waiting" },
            { id: 37, firstName: "Kabu", lastName: "Alphonse", gender: "M", tableNumber: 6, tableName: "Jasmin", status: "Mr", state: "waiting" },
            { id: 38, firstName: "Narcisse", lastName: "Nambonu", gender: "F", tableNumber: 6, tableName: "Jasmin", status: "Mme", state: "waiting" },
            { id: 39, firstName: "Jemima", lastName: "Kumbi", gender: "F", tableNumber: 6, tableName: "Jasmin", status: "Mme", state: "waiting" },
            { id: 40, firstName: "Du Grone", lastName: "Badibanga", gender: "F", tableNumber: 6, tableName: "Jasmin", status: "Mme", state: "waiting" },
            { id: 41, firstName: "Onezim", lastName: "Kashala", gender: "M", tableNumber: 6, tableName: "Jasmin", status: "Mr", state: "waiting" },
            { id: 42, firstName: "Ngoy", lastName: "Kabeya", gender: "M", tableNumber: 6, tableName: "Jasmin", status: "Mr", state: "waiting" },
            { id: 43, firstName: "Miadedaka", lastName: "", gender: "F", tableNumber: 6, tableName: "Jasmin", status: "Mme", state: "waiting" },
            { id: 44, firstName: "Grâce", lastName: "Madimda", gender: "F", tableNumber: 6, tableName: "Jasmin", status: "Mme", state: "waiting" },

            //Table 7 - Lavande
            { id: 45, firstName: "Lydia", lastName: "Nakahemba caziga", gender: "N/A", tableNumber: 7, tableName: "Lavande", status: "Couple", state: "waiting" },
            { id: 46, firstName: "Beta", lastName: "Nyamuhira", gender: "N/A", tableNumber: 7, tableName: "Lavande", status: "Couple", state: "waiting" },
            { id: 47, firstName: "Dibala", lastName: "Byemba", gender: "N/A", tableNumber: 7, tableName: "Lavande", status: "Couple", state: "waiting" },
            { id: 48, firstName: "Bahati", lastName: "Mugaruka", gender: "N/A", tableNumber: 7, tableName: "Lavande", status: "Couple", state: "waiting" },
            { id: 49, firstName: "Idesbal", lastName: "Shinamula", gender: "N/A", tableNumber: 7, tableName: "Lavande", status: "Couple", state: "waiting" },

            //Table 8 - Hortensia
            { id: 50, firstName: "Safari", lastName: "Mulume", gender: "N/A", tableNumber: 8, tableName: "Hortensia", status: "Couple", state: "waiting" },
            { id: 51, firstName: "Remy", lastName: "Bashengezi", gender: "N/A", tableNumber: 8, tableName: "Hortensia", status: "Couple", state: "waiting" },
            { id: 52, firstName: "Elige", lastName: "Ntumwa", gender: "N/A", tableNumber: 8, tableName: "Hortensia", status: "Couple", state: "waiting" },
            { id: 53, firstName: "Robert", lastName: "Kuzanwa", gender: "N/A", tableNumber: 8, tableName: "Hortensia", status: "Couple", state: "waiting" },
            { id: 54, firstName: "Nyakura", lastName: "", gender: "N/A", tableNumber: 8, tableName: "Hortensia", status: "Couple", state: "waiting" },

            //Table 9 - Magnolia
            { id: 55, firstName: "Martin", lastName: "Nkuba Muliro", gender: "N/A", tableNumber: 9, tableName: "Magnolia", status: "Couple", state: "waiting" },
            { id: 56, firstName: "Elga", lastName: "Beya", gender: "N/A", tableNumber: 9, tableName: "Magnolia", status: "Couple", state: "waiting" },
            { id: 57, firstName: "Josué", lastName: "Beya", gender: "M", tableNumber: 9, tableName: "Magnolia", status: "Mr", state: "waiting" },
            { id: 58, firstName: "Fiston", lastName: "Ngandu", gender: "N/A", tableNumber: 9, tableName: "Magnolia", status: "Couple", state: "waiting" },
            { id: 59, firstName: "Polydor", lastName: "Kashala", gender: "N/A", tableNumber: 9, tableName: "Magnolia", status: "Couple", state: "waiting" },

            //Table 10 - Dahlia
            { id: 60, firstName: "Materne", lastName: "Chiribwanwa", gender: "N/A", tableNumber: 10, tableName: "Dahlia", status: "Couple", state: "waiting" },
            { id: 61, firstName: "Rigobert", lastName: "Muhayangabo", gender: "N/A", tableNumber: 10, tableName: "Dahlia", status: "Couple", state: "waiting" },
            { id: 62, firstName: "Auguy", lastName: "Bisonga", gender: "N/A", tableNumber: 10, tableName: "Dahlia", status: "Couple", state: "waiting" },
            { id: 63, firstName: "Birhuga", lastName: "Dede", gender: "N/A", tableNumber: 10, tableName: "Dahlia", status: "Couple", state: "waiting" },
            { id: 64, firstName: "Zabona Katwanyi", lastName: "Symphorie", gender: "M", tableNumber: 10, tableName: "Dahlia", status: "Mr", state: "waiting" },

                        //Table 11 - Gardenia
            { id: 65, firstName: "Bashilwango", lastName: "Obeni Benedicte", gender: "N/A", tableNumber: 11, tableName: "Gardenia", status: "Couple", state: "waiting" },
            { id: 66, firstName: "Patrick", lastName: "Barahiga", gender: "N/A", tableNumber: 11, tableName: "Gardenia", status: "Couple", state: "waiting" },
            { id: 67, firstName: "Steve", lastName: "Telemuka", gender: "N/A", tableNumber: 11, tableName: "Gardenia", status: "Couple", state: "waiting" },
            { id: 68, firstName: "Nciko", lastName: "Mushamalirwa Alain", gender: "N/A", tableNumber: 11, tableName: "Gardenia", status: "Couple", state: "waiting" },
            { id: 69, firstName: "Mushamalirwa", lastName: "Luc", gender: "N/A", tableNumber: 11, tableName: "Gardenia", status: "Couple", state: "waiting" },

            //Table 12 - Camelia
            { id: 70, firstName: "Jonathan", lastName: "Chubaka", gender: "N/A", tableNumber: 12, tableName: "Camelia", status: "Couple", state: "waiting" },
            { id: 71, firstName: "Rodriguez", lastName: "Biraheka", gender: "N/A", tableNumber: 12, tableName: "Camelia", status: "Couple", state: "waiting" },
            { id: 72, firstName: "Monsieur", lastName: "Chihimba", gender: "N/A", tableNumber: 12, tableName: "Camelia", status: "Couple", state: "waiting" },
            { id: 73, firstName: "Teddy", lastName: "Mbiavanga", gender: "M", tableNumber: 12, tableName: "Camelia", status: "Mr", state: "waiting" },
            { id: 74, firstName: "Chancellier", lastName: "Mobonda", gender: "M", tableNumber: 12, tableName: "Camelia", status: "Mr", state: "waiting" },
            { id: 75, firstName: "Eric", lastName: "Kabemba", gender: "M", tableNumber: 12, tableName: "Camelia", status: "Mr", state: "waiting" },
            { id: 76, firstName: "Edmond", lastName: "Mashukano", gender: "M", tableNumber: 12, tableName: "Camelia", status: "Mr", state: "waiting" },

            //Table 13 - Zinnia
            { id: 77, firstName: "Credo", lastName: "Kitobo Kabinga", gender: "N/A", tableNumber: 13, tableName: "Zinnia", status: "Couple", state: "waiting" },
            { id: 78, firstName: "Zachari", lastName: "Mukenge", gender: "N/A", tableNumber: 13, tableName: "Zinnia", status: "Couple", state: "waiting" },
            { id: 79, firstName: "Julien", lastName: "Mau", gender: "N/A", tableNumber: 13, tableName: "Zinnia", status: "Couple", state: "waiting" },

            //Table 14 - Hibiscus
            { id: 80, firstName: "Katembwe", lastName: "", gender: "N/A", tableNumber: 14, tableName: "Hibiscus", status: "Couple", state: "waiting" },
            { id: 81, firstName: "Pére Arcade", lastName: "", gender: "M", tableNumber: 14, tableName: "Hibiscus", status: "Mr", state: "waiting" },
            { id: 82, firstName: "Patrick", lastName: "Chirubala", gender: "M", tableNumber: 14, tableName: "Hibiscus", status: "Mr", state: "waiting" },
            { id: 83, firstName: "Jean Fikiri", lastName: "Wabene", gender: "N/A", tableNumber: 14, tableName: "Hibiscus", status: "Couple", state: "waiting" },

            //Table 15 - Amaryllis
            { id: 84, firstName: "Honoré", lastName: "Muganza", gender: "N/A", tableNumber: 15, tableName: "Amaryllis", status: "Couple", state: "waiting" },
            { id: 85, firstName: "Nathalie", lastName: "Masa", gender: "N/A", tableNumber: 15, tableName: "Amaryllis", status: "Couple", state: "waiting" },
            { id: 86, firstName: "Joel", lastName: "Moke", gender: "N/A", tableNumber: 15, tableName: "Amaryllis", status: "Couple", state: "waiting" },
            { id: 87, firstName: "Joseph", lastName: "Ndeshi", gender: "N/A", tableNumber: 15, tableName: "Amaryllis", status: "Couple", state: "waiting" },
                        
        ];

        /* =========================================
           2. STATE & CONFIG
           ========================================= */
        let currentFilterTable = 'All';
        let currentSearchQuery = '';

        // Extract unique tables for filtering
        const tables = ['All', ...new Set(guests.map(g => `${g.tableNumber} - ${g.tableName}`))];

        // Dictionary for guest states
        const stateConfig = {
            'not_arrived': { label: 'Non arrivé', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', colorClass: 'bg-gray-100 text-gray-500 border-gray-200 dark:bg-navy-800 dark:text-gray-400 dark:border-navy-700 hover:bg-gray-200 dark:hover:bg-navy-700', activeClass: 'bg-gray-500 text-white border-gray-500 shadow-md ring-2 ring-gray-200 dark:ring-navy-800' },
            'waiting': { label: 'En attente', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z', colorClass: 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/40', activeClass: 'bg-amber-500 text-white border-amber-500 shadow-md ring-2 ring-amber-100 dark:ring-amber-900/50' },
            'placed': { label: 'Placé', icon: 'M5 13l4 4L19 7', colorClass: 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/40', activeClass: 'bg-emerald-500 text-white border-emerald-500 shadow-md ring-2 ring-emerald-100 dark:ring-emerald-900/50' }
        };

        /* =========================================
           3. DOM ELEMENTS
           ========================================= */
        const grid = document.getElementById('guestsGrid');
        const emptyState = document.getElementById('emptyState');
        const desktopFiltersContainer = document.getElementById('desktopTableFilters');
        const mobileFiltersContainer = document.getElementById('mobileTableFilters');
        const listTitle = document.getElementById('listTitle');
        const resultCount = document.getElementById('resultCount');
        const searchInputDesktop = document.getElementById('searchInputDesktop');
        const searchInputMobile = document.getElementById('searchInputMobile');
        
        // Stats
        const statTotal = document.getElementById('statTotal');
        const statPlaced = document.getElementById('statPlaced');
        const statMissing = document.getElementById('statMissing');

        /* =========================================
           4. RENDER FUNCTIONS
           ========================================= */
        
        // Initialize filters UI
        function renderFilters() {
            const createFilterHTML = (table, isMobile) => {
                const isActive = currentFilterTable === table;
                const baseClasses = isMobile 
                    ? "whitespace-nowrap flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors border flex items-center gap-2"
                    : "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors border flex justify-between items-center";
                
                const activeClasses = isActive 
                    ? "bg-navy-900 text-white border-navy-900 dark:bg-white dark:text-navy-900 dark:border-white shadow-md" 
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 dark:bg-navy-800 dark:text-gray-300 dark:border-navy-700 dark:hover:bg-navy-700";

                const countBadge = isActive
                    ? `<span class="bg-white/20 text-white text-xs py-0.5 px-2 rounded-full backdrop-blur-sm shadow-sm dark:bg-navy-900/20 dark:text-navy-900">${getGuestCountForTable(table)}</span>`
                    : `<span class="bg-gray-100 text-gray-500 text-xs py-0.5 px-2 rounded-full dark:bg-navy-900 dark:text-gray-400">${getGuestCountForTable(table)}</span>`;

                const label = table === 'All' ? 'Toutes les tables' : `Table ${table}`;

                return `<button
            id="filter-${table.replace(/[^a-zA-Z0-9]/g,'-')}"
            onclick="setTableFilter('${table}')"
            class="${baseClasses} ${activeClasses}">
                            <span>${label}</span>
                            ${countBadge}
                        </button>`;
            };

            desktopFiltersContainer.innerHTML = tables.map(t => createFilterHTML(t, false)).join('');
            mobileFiltersContainer.innerHTML = tables.map(t => createFilterHTML(t, true)).join('');
        }

        function getGuestCountForTable(tableStr) {
            if (tableStr === 'All') return guests.length;
            const [num] = tableStr.split(' - ');
            return guests.filter(g => g.tableNumber == num).length;
        }

        // Render the main guest grid
        function renderGrid() {
            // Apply Search & Filter
            let filtered = guests.filter(g => {
                // Table Filter
                const tableStr = `${g.tableNumber} - ${g.tableName}`;
                const matchTable = currentFilterTable === 'All' || tableStr === currentFilterTable;
                
                // Search Filter
                const q = currentSearchQuery.toLowerCase();
                const matchSearch = q === '' || 
                    g.firstName.toLowerCase().includes(q) || 
                    g.lastName.toLowerCase().includes(q) || 
                    g.tableName.toLowerCase().includes(q) || 
                    g.tableNumber.toString().includes(q) ||
                    g.status.toLowerCase().includes(q);

                return matchTable && matchSearch;
            });

            // Update Counters
            resultCount.textContent = `${filtered.length} résultat${filtered.length > 1 ? 's' : ''}`;
            updateGlobalStats();

            // Render Empty state
            if (filtered.length === 0) {
                grid.innerHTML = '';
                grid.classList.add('hidden');
                emptyState.classList.remove('hidden');
                emptyState.classList.add('flex');
                return;
            }

            // Render Cards
            grid.classList.remove('hidden');
            emptyState.classList.add('hidden');
            emptyState.classList.remove('flex');

            grid.innerHTML = filtered.map(guest => `
                <div class="bg-white dark:bg-navy-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-navy-700 hover:shadow-md transition-shadow relative overflow-hidden group">
                    
                    <!-- Top accent line based on state -->
                    <div class="absolute top-0 left-0 w-full h-1 ${guest.state === 'placed' ? 'bg-emerald-500' : (guest.state === 'waiting' ? 'bg-amber-500' : 'bg-gray-300 dark:bg-navy-600')}"></div>
                    
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <span class="inline-block px-2.5 py-1 rounded-md bg-blue-50 text-navy-800 text-xs font-bold dark:bg-navy-900/50 dark:text-blue-300 mb-2 border border-blue-100 dark:border-navy-700">
                                ${guest.status}
                            </span>
                            <h3 class="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                ${guest.lastName.toUpperCase()} ${guest.firstName}
                            </h3>
                            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1.5">
                                ${guest.gender === 'M' ? '👨' : (guest.gender === 'F' ? '👩' : '👥')} Sexe: ${guest.gender}
                            </p>
                        </div>
                        
                        <!-- Table Info Badge -->
                        <div class="text-right">
                            <div class="inline-flex flex-col items-center justify-center bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl px-3 py-2">
                                <span class="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Table</span>
                                <span class="text-xl font-black text-navy-900 dark:text-white">${guest.tableNumber}</span>
                            </div>
                            <p class="text-xs font-semibold text-gray-600 dark:text-gray-300 mt-1 uppercase">${guest.tableName}</p>
                        </div>
                    </div>

                    <!-- Dynamic State Buttons -->
                    <div class="pt-4 mt-4 border-t border-gray-100 dark:border-navy-700">
                        <p class="text-xs text-gray-400 dark:text-gray-500 mb-2 font-medium uppercase tracking-wide">État de l'invité</p>
                        <div class="flex gap-2">
                            ${Object.keys(stateConfig).map(stateKey => {
                                const conf = stateConfig[stateKey];
                                const isActive = guest.state === stateKey;
                                const btnClass = isActive ? conf.activeClass : conf.colorClass;
                                
                                return `
                                <button onclick="changeGuestState(${guest.id}, '${stateKey}')" 
                                        class="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl border transition-all duration-200 ${btnClass}"
                                        title="${conf.label}">
                                    <svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${conf.icon}"></path>
                                    </svg>
                                    <span class="text-[10px] font-bold uppercase tracking-wide">${conf.label}</span>
                                </button>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function updateGlobalStats() {
            statTotal.textContent = guests.length;
            statPlaced.textContent = guests.filter(g => g.state === 'placed').length;
            statMissing.textContent = guests.filter(g => g.state !== 'placed').length;
        }

        /* =========================================
           5. ACTIONS & EVENT LISTENERS
           ========================================= */

        // Change guest state dynamically
        window.changeGuestState = function(id, newState) {
            const guestIndex = guests.findIndex(g => g.id === id);
            if (guestIndex > -1) {
                guests[guestIndex].state = newState;
                renderGrid(); // Re-render to show updated state
            }
        };

        // Filter by table click
        window.setTableFilter = function(tableStr) {
    currentFilterTable = tableStr;

    listTitle.textContent =
        tableStr === 'All'
            ? 'Tous les invités'
            : `Filtre: Table ${tableStr}`;

    renderFilters();
    renderGrid();

    document.getElementById('guestsGrid').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
        const activeButton = document.getElementById(
    `filter-${tableStr.replace(/[^a-zA-Z0-9]/g,'-')}`
);

if (activeButton) {
    activeButton.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });
}
    };

        // Reset everything
        window.resetFilters = function() {
            currentFilterTable = 'All';
            currentSearchQuery = '';
            searchInputDesktop.value = '';
            searchInputMobile.value = '';
            listTitle.textContent = 'Tous les invités';
            renderFilters();
            renderGrid();
        };

        // Search Input Handlers
        const handleSearch = (e) => {
            currentSearchQuery = e.target.value;
            // Sync both inputs
            if(e.target.id === 'searchInputDesktop') searchInputMobile.value = currentSearchQuery;
            else searchInputDesktop.value = currentSearchQuery;
            
            renderGrid();
        };
        
        searchInputDesktop.addEventListener('input', handleSearch);
        searchInputMobile.addEventListener('input', handleSearch);

        /* =========================================
           6. DARK MODE LOGIC
           ========================================= */
        const themeToggleBtns = [document.getElementById('themeToggleBtn'), document.getElementById('themeToggleBtnMobile')];
        const html = document.documentElement;
        
        // Initial check
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        updateThemeIcons();

        // Toggle action
        themeToggleBtns.forEach(btn => {
            if(!btn) return;
            btn.addEventListener('click', () => {
                html.classList.toggle('dark');
                if (html.classList.contains('dark')) {
                    localStorage.theme = 'dark';
                } else {
                    localStorage.theme = 'light';
                }
                updateThemeIcons();
            });
        });

        function updateThemeIcons() {
            const isDark = html.classList.contains('dark');
            const sun = document.getElementById('themeIconSun');
            const moon = document.getElementById('themeIconMoon');
            if(sun && moon) {
                if (isDark) {
                    sun.classList.remove('hidden');
                    moon.classList.add('hidden');
                } else {
                    sun.classList.add('hidden');
                    moon.classList.remove('hidden');
                }
            }
        }

        /* =========================================
           7. INITIALIZATION
           ========================================= */
        function init() {
            renderFilters();
            renderGrid();
            updateGlobalStats();
        }

        // Start App
        init();
