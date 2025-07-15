# Forkify Recipe App

A modern recipe application built with vanilla JavaScript and Parcel v2.

## Features

- Search over 1,000,000 recipes
- View detailed recipe information
- Bookmark favorite recipes
- Add your own recipes
- Modern, responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm start
# or
npm run dev
```

The app will be available at `http://localhost:1234`

### Building for Production

Build the project:

```bash
npm run build
```

The built files will be in the `dist` folder.

### Scripts

- `npm start` - Start development server
- `npm run dev` - Start development server with auto-open
- `npm run build` - Build for production
- `npm run clean` - Clean build artifacts

## Tech Stack

- **Bundler**: Parcel v2
- **Styles**: SCSS
- **JavaScript**: ES6+ Modules
- **API**: Forkify API

## Project Structure

```
forkify/
├── src/
│   ├── js/
│   │   └── controller.js
│   ├── sass/
│   │   ├── _base.scss
│   │   ├── _components.scss
│   │   ├── _header.scss
│   │   ├── _preview.scss
│   │   ├── _recipe.scss
│   │   ├── _searchResults.scss
│   │   ├── _upload.scss
│   │   └── main.scss
│   └── img/
├── index.html
└── package.json
```
