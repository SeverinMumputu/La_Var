
        /* =========================================
           1. DATA DECLARATION (Déclaration depuis le script)
           ========================================= */
        const guests = [
            { id: 1, firstName: "Jean", lastName: "Dupont", gender: "M", tableNumber: 1, tableName: "Honneur", status: "Mr", state: "placed" },
            { id: 2, firstName: "Marie", lastName: "Curie", gender: "F", tableNumber: 1, tableName: "Honneur", status: "Mme", state: "placed" },
            { id: 3, firstName: "Albert", lastName: "Einstein", gender: "M", tableNumber: 1, tableName: "Honneur", status: "Mr", state: "waiting" },
            { id: 4, firstName: "Sophie", lastName: "Martin", gender: "F", tableNumber: 2, tableName: "Diamant", status: "Mlle", state: "not_arrived" },
            { id: 5, firstName: "Luc", lastName: "Bernard", gender: "M", tableNumber: 2, tableName: "Diamant", status: "Mr", state: "not_arrived" },
            { id: 6, firstName: "Famille", lastName: "Lefebvre", gender: "N/A", tableNumber: 2, tableName: "Diamant", status: "Famille", state: "placed" },
            { id: 7, firstName: "Ivan", lastName: "Muller", gender: "M", tableNumber: 3, tableName: "Saphir", status: "Mr", state: "waiting" },
            { id: 8, firstName: "Diane", lastName: "Roux", gender: "F", tableNumber: 3, tableName: "Saphir", status: "Mme", state: "waiting" },
            { id: 9, firstName: "Paul", lastName: "Garnier", gender: "M", tableNumber: 4, tableName: "Rubis", status: "Mr", state: "not_arrived" },
            { id: 10, firstName: "Claire", lastName: "Fontaine", gender: "F", tableNumber: 4, tableName: "Rubis", status: "Mlle", state: "placed" },
            { id: 11, firstName: "Antoine", lastName: "Lambert", gender: "M", tableNumber: 4, tableName: "Rubis", status: "Mr", state: "not_arrived" },
            { id: 12, firstName: "Julie & Marc", lastName: "Moreau", gender: "N/A", tableNumber: 5, tableName: "Émeraude", status: "Couple", state: "not_arrived" },
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

                return `<button onclick="setTableFilter('${table}')" class="${baseClasses} ${activeClasses}">
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
            listTitle.textContent = tableStr === 'All' ? 'Tous les invités' : `Filtre: Table ${tableStr}`;
            
            renderFilters();
            renderGrid();
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
