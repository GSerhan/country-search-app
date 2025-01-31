# FILE: /country-search-app/country-search-app/README.md

# Country Search App

## Overview

The Country Search App is a React application that allows users to search for country names using a slow search API. It features a user-friendly interface with a search bar, request throttling, and organized display of search results.

## Features

- Search for country names with a responsive search bar.
- Throttled API requests to optimize performance.
- Request cancellation for outdated queries to ensure accurate results.
- Organized display of search results in a list format.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd country-search-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```

2. Open your browser and go to `http://localhost:3000` to view the application.

## Project Structure

```
country-search-app
├── public
│   ├── index.html
│   └── manifest.json
├── src
│   ├── components
│   │   ├── SearchBar.tsx
│   │   └── SearchResults.tsx
│   ├── hooks
│   │   └── useDebounce.ts
│   ├── services
│   │   └── api.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── styles
│       └── App.css
├── package.json
├── tsconfig.json
└── README.md
```

## License

This project is licensed under the MIT License.