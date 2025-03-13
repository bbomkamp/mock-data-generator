# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Dummy Data - Mock Data Generator

This application is a mock data generator built with React, TypeScript, and Vite. It allows users to generate mock user data with various fields and download the generated data as a JSON file.

## Features

- Generate mock user data with customizable fields
- Download generated data as a JSON file with a timestamped filename
- Responsive layout with a sidebar for data generation options and a main panel for data preview

## Technologies Used

- React
- TypeScript
- Vite
- Faker.js for generating mock data

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/mock-data-generator.git
cd mock-data-generator
```

2. Install dependencies:

```sh
npm install
# or
yarn install
```

### Running the Application

To start the development server:

```sh
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To build the application for production:

```sh
npm run build
# or
yarn build
```

The production-ready files will be in the `dist` directory.

## Usage

1. Enter the number of entries you want to generate.
2. Select the fields you want to include in the generated data.
3. Click the "Generate Data" button.
4. Preview the generated data in the main panel.
5. Click the "Download JSON" button to download the generated data as a JSON file with a timestamped filename.

## Available Fields

- Bio
- First Name
- Full Name
- Gender
- Job Area
- Job Descriptor
- Job Title
- Job Type
- Last Name
- Middle Name
- Prefix
- Sex
- Sex Type
- Suffix
- Zodiac Sign
- Email
- Birthday

## Project Structure

- `src/components`: Contains the React components (`DataForm`, `Preview`)
- `src/utils`: Contains utility functions (`mockDataGenerator.ts`)
- `src/types`: Contains TypeScript type definitions (`index.ts`)
- `src/App.tsx`: Main application component
- `src/App.css`: Application styles

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
