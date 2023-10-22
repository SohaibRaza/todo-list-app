# Products Listing

## Table of Contents

- [Products Listing](#products-listing)
  - [Table of Contents](#table-of-contents)
  - [Folder Structure](#folder-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Running Tests](#running-tests)


## Folder Structure

Here's an overview of the project's folder structure:

- `/src`: The main source code directory.
  - `/components`: Common components used throughout the application.
  - `/layout` Different page layouts i.e `Admin | Dashboard`
  - `/helpers`: Reusable helper methods and utilities.
  - `/pages`: Application pages.
    - `Home.tsx`: The main component for the Products page.
    - `Completed.tsx` Completed tasks.
  - `/services`: Services for data fetching and other interactions.
  - `/store` Redux store for central state management.
- `App.test.tsx`: Tests for the main App component.
- `App.tsx`: The root component of the application.
- `index.tsx`: The entry point of the application.

## Getting Started

To get started with this project, follow the steps below:

### Prerequisites

Make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/): Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/SohaibRaza/your-project.git
   ```

2. Navigate to the project directory:

    ```bash
    cd todo-list-app
    ```

3. Install project dependencies:

    ```bash
    npm install
    ```

### Usage

To use this React.js application, follow these steps:

- Start the development server:

    ```bash
    npm start
    ```

### Running Tests

- To run tests, use the following command:

    ```bash
    npm run test
    ```
