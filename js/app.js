// Constants
const BOYS_CSV = 'BOYS FIXTURES - BOYS FIXTURES.csv';
const GIRLS_CSV = 'GIRLS FIXTURES - GIRLS FIXTURES.csv';

// Main function to initialize the app
function initApp() {
    try {
        const processedData = processFixtures(FIXTURES_DATA.boys, FIXTURES_DATA.girls);
        displayFixtures(processedData);
    } catch (error) {
        console.error('Error initializing app:', error);
        document.getElementById('fixtures-container').innerHTML = 
            '<p class="text-red-600 text-center">Error loading fixtures. Please try again later.</p>';
    }
}

// Process fixtures data
function processFixtures(boysData, girlsData) {
    // Process boys fixtures
    const processedBoys = boysData
        .flatMap(fixture => {
            return fixture.matches
                .filter(match => match.team1 !== 'g' && match.team2 !== 'g')
                .map(match => ({
                    ...match,
                    day: fixture.day,
                    time: fixture.time,
                    gender: 'boys'
                }));
        });

    // Process girls fixtures
    const processedGirls = girlsData
        .flatMap(fixture => {
            return fixture.matches
                .filter(match => match.team1 !== 'b' && match.team2 !== 'b')
                .map(match => ({
                    ...match,
                    day: fixture.day,
                    time: fixture.time,
                    gender: 'girls'
                }));
        });

    // Combine and sort by day and time
    const daysOrder = { 'FRIDAY': 1, 'SATURDAY': 2, 'SUNDAY': 3 };
    return [...processedBoys, ...processedGirls]
        .sort((a, b) => {
            // First sort by day
            const dayDiff = daysOrder[a.day] - daysOrder[b.day];
            if (dayDiff !== 0) return dayDiff;
            
            // Then sort by time
            const [aHours, aMinutes] = a.time.split('h').map(Number);
            const [bHours, bMinutes] = b.time.split('h').map(Number);
            const timeDiff = (aHours * 60 + aMinutes) - (bHours * 60 + bMinutes);
            return timeDiff;
        });
}

// Display fixtures
function displayFixtures(fixtures) {
    const container = document.getElementById('fixtures-container');
    let currentDay = '';
    let html = '';

    fixtures.forEach(fixture => {
        // Add day header if it's a new day
        if (fixture.day !== currentDay) {
            currentDay = fixture.day;
            html += `
                <h2 class="text-2xl font-bold mt-8 mb-4">${fixture.day}</h2>
            `;
        }

        // Format team names with Durbanville emphasis
        const team1 = formatTeamName(fixture.team1, fixture.gender);
        const team2 = formatTeamName(fixture.team2, fixture.gender);

        // Get gender text and color
        const genderText = fixture.gender === 'boys' ? 'Boys' : 'Girls';
        const genderColor = fixture.gender === 'boys' ? 'text-blue-600' : 'text-pink-600';

        html += `
            <div class="fixture bg-white rounded-lg shadow-md p-4 mb-4" data-gender="${fixture.gender}">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div class="time font-semibold">${fixture.time}</div>
                    <div class="field text-gray-600">${fixture.field}</div>
                    <div class="teams">
                        ${team1} vs ${team2}
                    </div>
                    <div class="${genderColor} font-semibold text-right">
                        ${genderText}
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html || '<p class="text-center">No fixtures found</p>';
}

// Format team name with Durbanville emphasis
function formatTeamName(team, gender) {
    if (team.includes('Durbanville')) {
        const teamClass = team.includes('A') ? 
            `team--durbanville-${gender}-a` : 
            `team--durbanville-${gender}-b`;
        return `<span class="${teamClass}">${team}</span>`;
    }
    return team;
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', initApp); 
