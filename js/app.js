// Constants

// Main function to initialize the app
function initApp() {
    try {
        // Load and display fixtures
        loadAndDisplayFixtures();
    } catch (error) {
        console.error('Error initializing app:', error);
    }
}

// Update tabs dynamically based on the active tab
function setupTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => {
                t.classList.remove('active');
                t.classList.add('bg-gray-200', 'text-gray-700');
            });
            tabContents.forEach(content => content.classList.add('hidden'));

            // Add active class to the clicked tab and corresponding content
            tab.classList.add('active');
            tab.classList.remove('bg-gray-200', 'text-gray-700');
            document.getElementById(tab.dataset.target).classList.remove('hidden');
        });
    });
}

// Load and display fixtures from in-memory data
function loadAndDisplayFixtures() {
    try {
        const fixtures = FIXTURES_DATA.fixtures || [];
        const upcomingFixtures = filterUpcomingFixtures(fixtures);
        displayFixtures(upcomingFixtures);
    } catch (error) {
        console.error('Error loading fixtures:', error);
        document.getElementById('fixtures-container').innerHTML = 
            '<p class="text-red-600 text-center">Error loading fixtures. Please try again later.</p>';
    }
}

// Filter out past fixtures
function filterUpcomingFixtures(fixtures) {
    const now = new Date();
    return fixtures.filter(fixture => {
        const fixtureDateTime = new Date(`${fixture.date}T${fixture.time}`);
        return fixtureDateTime >= now;
    });
}

// Display fixtures
function displayFixtures(fixtures) {
    const container = document.getElementById('fixtures-container');
    let html = '';

    // Helper to get display name for Durbanville Primary
    function getDurbanvilleDisplayName(team, gender) {
        if (team === 'Durbanville Primary') {
            if (gender === 'Boys') return 'Durbanville (Boys)';
            if (gender === 'Girls') return 'Durbanville (Girls)';
        }
        return team;
    }

    if (fixtures.length === 0) {
        html = '<p class="text-center text-gray-600">No upcoming fixtures found.</p>';
    } else {
        // Group fixtures by date
        const fixturesByDate = groupFixturesByDate(fixtures);
        Object.keys(fixturesByDate).forEach(date => {
            html += `
                <div class="month-section mb-8">
                    <h2 class="text-2xl font-bold mt-8 mb-4">${formatDate(date)}</h2>
            `;
            fixturesByDate[date].forEach(fixture => {
                html += `
                    <div class="fixture bg-white rounded-lg shadow-md p-4 mb-4" data-gender="${fixture.gender.toLowerCase()}">
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div class="time font-mono">${fixture.time}</div>
                            <div class="venue font-semibold">${fixture.venue}</div>
                            <div class="teams">
                                <span class="team ${getTeamClass(fixture.team1, fixture.gender)}">${getDurbanvilleDisplayName(fixture.team1, fixture.gender)}</span>
                                <span class="mx-2">vs</span>
                                <span class="team ${getTeamClass(fixture.team2, fixture.gender)}">${getDurbanvilleDisplayName(fixture.team2, fixture.gender)}</span>
                            </div>
                        </div>
                    </div>
                `;
            });
            html += `</div>`;
        });
    }
    container.innerHTML = html;
}

// Group fixtures by date
function groupFixturesByDate(fixtures) {
    const grouped = {};
    fixtures.forEach(fixture => {
        if (!grouped[fixture.date]) grouped[fixture.date] = [];
        grouped[fixture.date].push(fixture);
    });
    return grouped;
}

// Format date to a more readable format
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        day: 'numeric', 
        month: 'short' 
    });
}

// Get team class for styling
function getTeamClass(team, gender) {
    const t = team.toLowerCase();
    if (t.includes('durbanville') && t.includes('boys') && t.includes('a')) return 'team--durbanville-boys-a';
    if (t.includes('durbanville') && t.includes('boys') && t.includes('b')) return 'team--durbanville-boys-b';
    if (t.includes('durbanville') && t.includes('girls') && t.includes('a')) return 'team--durbanville-girls-a';
    if (t.includes('durbanville') && t.includes('girls') && t.includes('b')) return 'team--durbanville-girls-b';
    // fallback for Durbanville Primary
    if (t.includes('durbanville') && gender.toLowerCase() === 'boys') return 'team--durbanville-boys-a';
    if (t.includes('durbanville') && gender.toLowerCase() === 'girls') return 'team--durbanville-girls-a';
    return '';
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', initApp);
