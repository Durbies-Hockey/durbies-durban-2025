// Constants
const IMPORTANT_DATES = FIXTURES_DATA.important_dates;

// Main function to initialize the app
function initApp() {
    try {
        // Filter out dates that have already passed
        const upcomingDates = filterUpcomingDates(IMPORTANT_DATES);
        displayImportantDates(upcomingDates);
    } catch (error) {
        console.error('Error initializing app:', error);
        document.getElementById('important-dates-container').innerHTML = 
            '<p class="text-red-600 text-center">Error loading important dates. Please try again later.</p>';
    }
}

// Filter out dates that have already passed
function filterUpcomingDates(dates) {
    const today = new Date();
    // Set time to beginning of day for accurate comparison
    today.setHours(0, 0, 0, 0);
    
    return dates.filter(dateObj => {
        const eventDate = new Date(dateObj.date);
        // Set time to beginning of day for accurate comparison
        eventDate.setHours(0, 0, 0, 0);
        return eventDate >= today;
    });
}

// Display important dates
function displayImportantDates(dates) {
    const container = document.getElementById('important-dates-container');
    let html = '';

    if (dates.length === 0) {
        html = '<p class="text-center text-gray-600">No upcoming events found.</p>';
    } else {
        // Group dates by month
        const datesByMonth = groupDatesByMonth(dates);

        // Display each month
        Object.keys(datesByMonth).forEach(month => {
            html += `
                <div class="month-section mb-8">
                    <h2 class="text-2xl font-bold mt-8 mb-4">${month}</h2>
            `;

            // Display each date in the month
            datesByMonth[month].forEach(dateObj => {
                const formattedDate = formatDate(dateObj.date);
                const eventType = getEventType(dateObj.event);
                
                html += `
                    <div class="important-date bg-white rounded-lg shadow-md p-4 mb-4" data-event-type="${eventType}">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="date font-semibold">${formattedDate}</div>
                            <div class="event">${dateObj.event}</div>
                            <div class="description text-gray-600">${dateObj.description}</div>
                        </div>
                    </div>
                `;
            });

            html += `</div>`;
        });

        // Add note if it exists
        if (FIXTURES_DATA.note) {
            html += `<p class="text-center text-gray-500 italic mt-4">${FIXTURES_DATA.note}</p>`;
        }
    }

    container.innerHTML = html;
}

// Group dates by month
function groupDatesByMonth(dates) {
    const months = {};
    
    dates.forEach(dateObj => {
        const date = new Date(dateObj.date);
        const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });
        
        if (!months[monthYear]) {
            months[monthYear] = [];
        }
        
        months[monthYear].push(dateObj);
    });
    
    return months;
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

// Determine event type for styling
function getEventType(event) {
    const eventLower = event.toLowerCase();
    
    if (eventLower.includes('league') || eventLower.includes('match')) {
        return 'league-match';
    } else if (eventLower.includes('trial') || eventLower.includes('trials')) {
        return 'trial';
    } else if (eventLower.includes('tour') || eventLower.includes('tournament')) {
        return 'tournament';
    } else if (eventLower.includes('sport day')) {
        return 'sport-day';
    } else if (eventLower.includes('school')) {
        return 'school';
    } else {
        return 'other';
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', initApp); 
