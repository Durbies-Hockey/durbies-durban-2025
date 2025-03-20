# Hockey Fixtures App Requirements

## Overview
A mobile-responsive web application to display boys and girls hockey fixtures, with special emphasis on Durbanville teams.

## Core Features

### Data Display
- Display fixtures in an easy-to-read format showing:
  - Field name
  - Time slot
  - Teams playing (Team vs Team)
- Special formatting for Durbanville teams:
  - **Durbanville Boys A** and **Durbanville Boys B** should be displayed in bold
  - **Durbanville Girls A** and **Durbanville Girls B** should be displayed in bold
  - Clear visual distinction between boys and girls fixtures
- Empty slots (marked as 'g' or 'b' in source data) should be excluded from display
- Time-based display:
  - Only show upcoming fixtures (current day and time onwards)
  - Automatically filter out past time slots on page load/refresh
  - Use client's local time for determining current time

### User Interface
- Mobile-first design approach
- Responsive layout adapting to different screen sizes:
  - Mobile phones (320px and up)
  - Tablets (768px and up)
  - Desktop (1024px and up)

## Technical Requirements

### Frontend
- Modern, responsive CSS framework
- Semantic HTML5 markup
- Flexbox/Grid layout for responsive design
- Mobile-first media queries
- Accessibility compliance

### Data Management
- Parse both boys and girls CSV data
- Filter out gaps/empty slots:
  - Remove 'g' entries from boys fixtures
  - Remove 'b' entries from girls fixtures
- Time-based filtering:
  - Compare fixture dates/times against current date/time
  - Update display based on client's timezone
  - Handle date/time formatting consistently

### Performance
- Fast initial load time
- Efficient data filtering
- Smooth responsive transitions

## Design Requirements

### Layout
- Clean, minimalist design
- Easy-to-read typography
- Sufficient contrast for field names and times
- Clear visual hierarchy
- Visual separation between boys and girls fixtures

### Mobile Considerations
- Touch-friendly interface
- Appropriate tap target sizes
- No horizontal scrolling on mobile devices
- Collapsible/expandable sections if needed

### Visual Elements
- Clear distinction between:
  - Different days
  - Different fields
  - Time slots
  - Boys and girls fixtures
- Visual emphasis on Durbanville teams with clear gender distinction
- Intuitive navigation elements
