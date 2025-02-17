**Products Listing with Search and Pagination**

**Overview**

This is a React-based project that fetches product data from the Fake Store API and displays it in a grid layout using Material-UI components. The project includes a search functionality to filter products based on their title and implements pagination to navigate through multiple pages of products efficiently.

**Features**

Fetches Products from API: Retrieves product data dynamically from https://fakestoreapi.com/products.

Material-UI Integration: Utilizes Material-UI components like Grid, TextField, Pagination, and CircularProgress for a modern UI.

Search Functionality: Users can search for products by title in real-time.

Pagination: Allows users to navigate through multiple pages with a limit of 8 products per page.

Loading State: Displays a loading spinner while fetching data from the API.

Responsive Design: Works on different screen sizes, ensuring a smooth user experience.

**Installation & Setup**

Clone the repository:

git clone https://github.com/your-username/your-repository.git

Navigate to the project directory:

cd your-repository

Install dependencies:

npm install

Start the development server:

npm start

**Project Structure**

📂 src
 ┣ 📂 components
 ┃ ┣ 📜 ProductCard.js  # Displays individual product details
 ┃ ┣ 📜 Products.js     # Main product listing component
 ┃ ┗ 📜 App.js          # Entry point of the React app
 ┣ 📜 index.js          # Renders the app
 ┗ 📜 styles.css        # Optional custom styles

**Technologies Used**

React.js - Frontend framework

Material-UI - UI components

Fake Store API - Mock product data

**How It Works**

The Products.js component fetches product data from the API on mount.

Users can search for products using the search bar, which dynamically filters results.

The pagination component allows users to navigate through multiple pages of products.

Products are displayed in a responsive grid format using Material-UI.
