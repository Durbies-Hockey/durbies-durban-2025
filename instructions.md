# Hockey Fixtures App - Development Instructions

## 1. Project Setup
1. Initialize a basic HTML file (index.html) with proper meta tags for mobile responsiveness
2. Create CSS directory and main stylesheet (css/styles.css)
3. Create JavaScript directory and main script file (js/app.js)
4. Add modern CSS framework via CDN in index.html

## 2. Data Processing
1. Create functions to read both CSV data files:
   - Boys fixtures CSV
   - Girls fixtures CSV
2. Process the CSV data to create a structured format:
   - Extract day, time, field, and team information
   - Remove entries where teams are marked as 'g' in boys fixtures
   - Remove entries where teams are marked as 'b' in girls fixtures
   - Add gender identifier to each fixture
3. Create a function to filter fixtures based on current date/time:
   - Compare fixture date/time against current date/time
   - Return only upcoming fixtures

## 3. HTML Structure
1. Create semantic HTML structure:
   ```html
   <main>
     <section class="day">
       <div class="fixture" data-gender="boys|girls">
         <div class="time"></div>
         <div class="field"></div>
         <div class="teams">
           <span class="team team--durbanville-boys-a|team--durbanville-girls-a"></span>
           vs
           <span class="team"></span>
         </div>
       </div>
     </section>
   </main>
   ```
2. Add ARIA labels for accessibility

## 4. CSS Implementation
1. Set up base styles:
   - Define typography
   - Set color scheme with good contrast
   - Create responsive container widths
2. Create responsive breakpoints:
   - Mobile: 320px and up
   - Tablet: 768px and up
   - Desktop: 1024px and up
3. Style fixtures display:
   - Create grid/flexbox layout
   - Ensure no horizontal scrolling on mobile
   - Add distinct styles for boys and girls fixtures
   - Add bold styling for all Durbanville teams
   - Create visual distinction between boys and girls Durbanville teams

## 5. JavaScript Implementation
1. Create function to get current date/time
2. Create function to format fixture times
3. Create data processing functions:
   - Process boys fixtures
   - Process girls fixtures
   - Combine and sort all fixtures by date/time
4. Create main display function:
   - Filter out past fixtures
   - Sort by date/time
   - Apply appropriate team styling based on gender
   - Generate HTML for each fixture
5. Add page load/refresh handler to update display

## 6. Testing
1. Test responsive layout across different screen sizes
2. Verify past fixtures are hidden
3. Check Durbanville team emphasis:
   - Boys A and B teams
   - Girls A and B teams
4. Verify visual distinction between boys and girls fixtures
5. Validate accessibility 
