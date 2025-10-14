        // ==================== MAIN.JS - Dashboard Functionality ====================



        // ==================== navigation js ====================
        // Select all nav items and all sections
            const switchButtons = document.querySelectorAll('.nav-menu__item');
            const sections = document.querySelectorAll('.section');

            switchButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = button.getAttribute('data-target');

                    sections.forEach(section => {
                        if (section.id === target) {
                            section.classList.add('active');
                        } else {
                            section.classList.remove('active');
                        }
                    });

                    // Optional: highlight active nav item
                    switchButtons.forEach(btn => btn.querySelector('.nav-menu__link').classList.remove('active'));
                    button.querySelector('.nav-menu__link').classList.add('active');
                });
            });
        // ==================== navigation js end====================



        // ==================== button filter container====================
        // Select elements for Exam Permits section
        const filterButton = document.querySelector('.button.filter');
        const filterPopup = document.getElementById('filterPopup');
        const closeFilter = document.getElementById('closeFilter');

        // Open the modal when clicking the Filter button
        if (filterButton && filterPopup) {
            filterButton.addEventListener('click', () => {
                filterPopup.style.display = 'flex'; // flex to center modal
            });
        }

        // Close the modal when clicking the Close button
        if (closeFilter && filterPopup) {
            closeFilter.addEventListener('click', () => {
                filterPopup.style.display = 'none';
            });
        }

        // Optional: Close modal when clicking outside the modal content
        if (filterPopup) {
            window.addEventListener('click', (e) => {
                if (e.target === filterPopup) {
                    filterPopup.style.display = 'none';
                }
            });
        }

        // ==================== Application Management Filter ====================
        const filterButtonApplications = document.querySelector('#application_management_section .button.filter');
        const filterPopupApplications = document.getElementById('filterPopupApplications');
        const closeFilterApplications = document.getElementById('closeFilterApplications');

        if (filterButtonApplications && filterPopupApplications) {
            filterButtonApplications.addEventListener('click', () => {
                filterPopupApplications.style.display = 'flex';
            });
        }

        if (closeFilterApplications && filterPopupApplications) {
            closeFilterApplications.addEventListener('click', () => {
                filterPopupApplications.style.display = 'none';
            });
        }

        if (filterPopupApplications) {
            window.addEventListener('click', (e) => {
                if (e.target === filterPopupApplications) {
                    filterPopupApplications.style.display = 'none';
                }
            });
        }

        // ==================== Scheduling Filter ====================
        const filterButtonScheduling = document.querySelector('#scheduling_section .button.filter');
        const filterPopupScheduling = document.getElementById('filterPopupScheduling');
        const closeFilterScheduling = document.getElementById('closeFilterScheduling');

        if (filterButtonScheduling && filterPopupScheduling) {
            filterButtonScheduling.addEventListener('click', () => {
                filterPopupScheduling.style.display = 'flex';
            });
        }

        if (closeFilterScheduling && filterPopupScheduling) {
            closeFilterScheduling.addEventListener('click', () => {
                filterPopupScheduling.style.display = 'none';
            });
        }

        if (filterPopupScheduling) {
            window.addEventListener('click', (e) => {
                if (e.target === filterPopupScheduling) {
                    filterPopupScheduling.style.display = 'none';
                }
            });
        }

        
        /**
         * Enhanced sidebar toggle functionality with smooth transitions
         * Includes auto-close on outside click and proper main content expansion
         */
        // ==================== SIDEBAR TOGGLE ====================
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.querySelector('.main-content');
        const sidebarToggle = document.getElementById('sidebarToggle');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');

        // Function to close sidebar (for both desktop and mobile)
        function closeSidebar() {
            if (window.innerWidth > 640) {
                sidebar.classList.add('collapsed');
                mainContent.classList.add('expanded');
                localStorage.setItem('sidebarCollapsed', 'true');
            } else {
                sidebar.classList.remove('mobile-open');
            }
        }

        // Function to open sidebar
        function openSidebar() {
            if (window.innerWidth > 640) {
                sidebar.classList.remove('collapsed');
                mainContent.classList.remove('expanded');
                localStorage.setItem('sidebarCollapsed', 'false');
            } else {
                sidebar.classList.add('mobile-open');
            }
        }

        // Desktop toggle with improved behavior
        sidebarToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            if (window.innerWidth > 640) {
                if (sidebar.classList.contains('collapsed')) {
                    openSidebar();
                } else {
                    closeSidebar();
                }
            }
        });

        // Mobile toggle
        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            if (sidebar.classList.contains('mobile-open')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });

        // Auto-close sidebar when clicking outside (desktop and mobile)
        document.addEventListener('click', (e) => {
            // Only close if sidebar is open and click is outside sidebar
            const isSidebarOpen = !sidebar.classList.contains('collapsed') || sidebar.classList.contains('mobile-open');
            const isClickInsideSidebar = sidebar.contains(e.target);
            const isClickOnToggleButton = sidebarToggle.contains(e.target) || mobileMenuToggle.contains(e.target);
            
            if (isSidebarOpen && !isClickInsideSidebar && !isClickOnToggleButton) {
                closeSidebar();
            }
        });

        // Prevent sidebar from closing when clicking inside it
        sidebar.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Load sidebar state from localStorage
        const savedSidebarState = localStorage.getItem('sidebarCollapsed');
        if (savedSidebarState === 'true' && window.innerWidth > 640) {
            sidebar.classList.add('collapsed');
            mainContent.classList.add('expanded');
        }

        // Responsive auto-reset
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 640) {
                mainContent.classList.remove('expanded');
                sidebar.classList.remove('collapsed');
            } else {
                sidebar.classList.remove('mobile-open');
                // Restore desktop state if it was collapsed
                const savedState = localStorage.getItem('sidebarCollapsed');
                if (savedState === 'true') {
                    sidebar.classList.add('collapsed');
                    mainContent.classList.add('expanded');
                }
            }
        });





        
        // ==================== Table Button Functionality sa permist to  ====================
            const sendButtons = document.querySelectorAll('.sendbtn');// inuutusan natin na kuhainang may mga class name na .sendbtn

            sendButtons.forEach(button => {//sinasabi natin sa bawat button na icliclik ay 
                button.addEventListener('click', () => {

                const row = button.closest('tr');//hahanapin niya yung pinaka malapit na tr or cnatiner nung button nayon 
                const status_badge = row.querySelector('.status').textContent; //ito diniclear natin para matawag yung mga buttons
                const show_view_button = row.querySelector('.showViewbtn');
                const show_Resend_button = row.querySelector('.showResendbtn');

                if (status_badge === "Failed") {//pag ststus niya ay failed mag shshsow up lang is resend
                show_view_button.style.display = "none";
                show_Resend_button.style.display = "block";
                button.style.display = "none";
                } 
                else if (status_badge === "Sent") {//pag ststus niya ay failed mag shshsow up lang is Sview
                show_view_button.style.display = "block";
                show_Resend_button.style.display = "block";
                button.style.display = "none";
                }
             });
        });

        
        /**
         * Enhanced theme functionality with toggle button
         * Replaces dropdown with simple light/dark toggle
         */
        const themeToggle = document.getElementById('themeToggle');
        const mobileThemeToggle = document.getElementById('mobileThemeToggle');
        const settingsThemeToggle = document.getElementById('settingsThemeToggle');
        const html = document.documentElement;

        // Check for saved theme preference or default to system
        const savedTheme = localStorage.getItem('theme') || 'system';
        
        // Apply initial theme
        applyTheme(savedTheme);
        
        // Update toggle button icons based on current theme
        updateThemeToggleIcons();

        function applyTheme(theme) {
            if (theme === 'system') {
                // Use system preference
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                html.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
            } else {
                html.setAttribute('data-theme', theme);
            }
            localStorage.setItem('theme', theme);
            updateThemeToggleIcons();
        }

        function toggleTheme() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
        }

        // Update toggle button icons to reflect current theme
        function updateThemeToggleIcons() {
            const currentTheme = html.getAttribute('data-theme');
            const isDark = currentTheme === 'dark';
            
            // Update desktop toggle icon
            if (themeToggle) {
                const icon = themeToggle.querySelector('svg path');
                if (icon) {
                    if (isDark) {
                        // Sun icon for dark mode (to switch to light)
                        icon.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z');
                    } else {
                        // Moon icon for light mode (to switch to dark)
                        icon.setAttribute('d', 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z');
                    }
                }
            }
            
            // Update mobile toggle icon
            if (mobileThemeToggle) {
                const icon = mobileThemeToggle.querySelector('svg path');
                if (icon) {
                    if (isDark) {
                        // Sun icon for dark mode (to switch to light)
                        icon.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z');
                    } else {
                        // Moon icon for light mode (to switch to dark)
                        icon.setAttribute('d', 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z');
                    }
                }
            }
            
            // Update settings toggle icon
            if (settingsThemeToggle) {
                const icon = settingsThemeToggle.querySelector('svg path');
                if (icon) {
                    if (isDark) {
                        // Sun icon for dark mode (to switch to light)
                        icon.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z');
                    } else {
                        // Moon icon for light mode (to switch to dark)
                        icon.setAttribute('d', 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z');
                    }
                }
            }
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            const currentPreference = localStorage.getItem('theme');
            if (currentPreference === 'system') {
                applyTheme('system');
            }
        });

        // Theme toggle button handlers
        if (themeToggle) {
            themeToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleTheme();
            });
        }
        if (mobileThemeToggle) {
            mobileThemeToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleTheme();
            });
        }
        if (settingsThemeToggle) {
            settingsThemeToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleTheme();
            });
        }

        /**
         * Navigation menu active state
         * Highlights the currently active menu item
         */
        const navLinks = document.querySelectorAll('.nav-menu__link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                link.classList.add('active');
            });
        });

        // ==================== CHART.JS - Application Trends Chart ====================
        
        /**
         * Initialize and render the application trends chart
         * Shows monthly statistics for applications
         */
        const ctx = document.getElementById('applicationChart').getContext('2d');
        
        // Chart configuration
        const chartData = {
            labels: ['May', 'June', 'July', 'August', 'September', 'October'],
            datasets: [
                {
                    label: 'Applications',
                    data: [980, 1050, 1120, 1180, 1210, 1248],
                    borderColor: '#2563eb',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    pointBackgroundColor: '#2563eb',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                },
                {
                    label: 'Approved',
                    data: [720, 780, 820, 850, 875, 892],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    pointBackgroundColor: '#10b981',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                },
                {
                    label: 'Pending',
                    data: [180, 195, 220, 245, 255, 264],
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    pointBackgroundColor: '#f59e0b',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                },
                {
                    label: 'Rejected',
                    data: [80, 75, 80, 85, 80, 92],
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    pointBackgroundColor: '#ef4444',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }
            ]
        };

        const chartConfig = {
            type: 'line',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 15,
                            font: {
                                family: 'Poppins',
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        titleFont: {
                            family: 'Poppins',
                            size: 14
                        },
                        bodyFont: {
                            family: 'Poppins',
                            size: 13
                        },
                        cornerRadius: 8
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                family: 'Poppins',
                                size: 12
                            }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            font: {
                                family: 'Poppins',
                                size: 12
                            }
                        }
                    }
                }
            }
        };

        // Create the chart
        const applicationChart = new Chart(ctx, chartConfig);

        /**
         * Update chart colors based on theme
         */
        function updateChartTheme() {
            const theme = html.getAttribute('data-theme');
            const isDark = theme === 'dark';
            
            if (applicationChart) {
                applicationChart.options.scales.y.grid.color = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
                applicationChart.options.scales.x.ticks.color = isDark ? '#9ca3af' : '#6b7280';
                applicationChart.options.scales.y.ticks.color = isDark ? '#9ca3af' : '#6b7280';
                applicationChart.options.plugins.legend.labels.color = isDark ? '#f9fafb' : '#111827';
                applicationChart.update();
            }
        }

        // Listen for theme changes
        const observer = new MutationObserver(updateChartTheme);
        observer.observe(html, { attributes: true, attributeFilter: ['data-theme'] });

        // Initial theme update
        updateChartTheme();

        /**
         * Responsive handling
         * Adjusts layout based on window size
         */
        function handleResize() {
            if (window.innerWidth <= 640) {
                mainContent.classList.remove('expanded');
                sidebar.classList.remove('collapsed');
            } else {
                sidebar.classList.remove('mobile-open');
            }
            }
        window.addEventListener('resize', handleResize);

        // Console log for developers
        console.log('%c🎓 Student Portal Dashboard', 'color: #2563eb; font-size: 20px; font-weight: bold;');
        console.log('%cDashboard loaded successfully!', 'color: #10b981; font-size: 14px;');