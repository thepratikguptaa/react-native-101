# MoviesStack

This is a mobile application built with React Native and Expo that allows users to browse and search for movies. It features a clean, modern interface and leverages several cutting-edge technologies to provide a seamless user experience.

## Features

*   **Browse Latest Movies:** The home screen displays a list of the latest movies, allowing users to stay up-to-date with new releases.
*   **Discover Trending Movies:** A dedicated section showcases movies that are currently trending, helping users discover popular content.
*   **Search Functionality:** Users can search for specific movies by title. The search is performed in real-time, with results appearing as the user types.
*   **Movie Details:** Tapping on a movie card will navigate the user to a details screen (Note: The implementation of the details screen is not fully visible in the provided code, but the navigation is set up for it).

## How It's Made

This project was developed using the following technologies:

*   **React Native & Expo:** The core framework for building the cross-platform (iOS and Android) mobile application.
*   **TypeScript:** For static typing, improving code quality and developer experience.
*   **Expo Router:** For file-based routing and navigation within the app.
*   **NativeWind & Tailwind CSS:** For styling the user interface, allowing for rapid development with utility-first CSS classes.
*   **Appwrite:** Used for backend services, specifically for tracking and displaying trending movie searches.
*   **External Movie API:** The app fetches movie data (latest movies, search results) from an external API.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, you can run the project in a variety of ways:

### `npm start`

Runs the app in development mode.

### `npm run android`

Runs the app on a connected Android device or emulator.

### `npm run ios`

Runs the app on the iOS simulator.

### `npm run web`

Runs the app in a web browser.

## Available Scripts

In the project directory, you can run:

*   `npm start`: Runs the app in development mode.
*   `npm run reset-project`: Resets the project.
*   `npm run android`: Runs the app on a connected Android device or emulator.
*   `npm run ios`: Runs the app on the iOS simulator.
*   `npm run web`: Runs the app in a web browser.
*   `npm run lint`: Lints the project files.
