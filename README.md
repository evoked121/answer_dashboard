# Answer Dashboard

A React-based dashboard application with Firebase authentication and interactive data visualization.

## Setup Instructions

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Environment variables:**
   The `.env` file is included in the repository with Firebase configuration.

3. **Start development server:**
   ```bash
   npm start
   ```

## Features Implemented

### Required Interactions

1. **Slide-Over Variable Editing Card Interaction**

   - Triggered by clicking the "Edit Variables" button on the dashboard
   - Opens a slide-over card with smooth transitions
   - Allows users to modify variables used in visualization

2. **Data Point Hover Interaction**

   - Triggered by hovering over data points in the main graph
   - Reveals detailed information cards with fade-in animations
   - Beautiful and intuitive user experience

3. **Variable Selection Interaction**
   - Users can select variables from the "Variables Panel"
   - Hovering displays contextual information
   - Includes state management for active/inactive variable states

### Authentication

- Google Sign-in via Firebase
- Protected routes with automatic redirects
- User session management

### UI/UX

- Responsive design following Figma specifications
- Modern UI with Tailwind CSS and Ant Design
- Smooth animations and transitions

## Technical Decisions

### State Management

- **Zustand**: Chosen for its simplicity and performance
- Centralized state management for variables and user data
- Lightweight alternative to Redux

### Technology Stack

- **React 19**: Latest React features and performance improvements
- **TypeScript**: Type safety and better developer experience
- **Firebase**: Authentication and backend services
- **Tailwind CSS**: Utility-first CSS framework
- **Ant Design**: UI component library
- **Chart.js**: Data visualization library

### Architecture

- Component-based architecture with clear separation of concerns
- Context API for authentication state
- Custom componenets for reusable logic

## Known Limitations

- Cross-Origin-Opener-Policy warnings in development environment
- Limited to Google authentication method
- No offline functionality

## Development Time

- **Total**: ~6 hours
- **Authentication**: 30 minutes
- **UI Implementation**: 3 hours
- **Interactions**: 2 hours
- **Testing & Polish**: 1 hour

## Local Development

1. Clone the repository
2. Run `npm install`
3. Start with `npm start`
4. Access at `http://localhost:3000`

The application will automatically redirect to login if not authenticated.
