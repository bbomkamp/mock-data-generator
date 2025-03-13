# React + TypeScript + Vite
```
 ____                _   ____                  _                         
| __ ) _ __ __ _  __| | | __ )  ___  _ __ ___ | | ____ _ _ __ ___  _ __  
|  _ \| '__/ _` |/ _` | |  _ \ / _ \| '_ ` _ \| |/ / _` | '_ ` _ \| '_ \ 
| |_) | | | (_| | (_| | | |_) | (_) | | | | | |   < (_| | | | | | | |_) |
|____/|_|  \__,_|\__,_| |____/ \___/|_| |_| |_|_|\_\__,_|_| |_| |_| .__/ 
                                                                  |_|  
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
