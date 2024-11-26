# Role Based Access Control App

A React-based web application for managing users, enabling functionalities like adding, editing, deleting, and toggling user statuses. This project leverages **React** for building the UI, **Tailwind css** for styling and **Redux** for effective state management.

## Project Overview

The **Role Based Access Control**  application provides an intuitive interface for managing a user list with the following capabilities:

- Add new users.
- Edit existing users' information (name and role).
- Toggle user status between **Active** and **Inactive**.
- Delete users seamlessly.

Built with **React** for the front-end and **Redux** for robust state management, this application ensures an efficient and organized approach to handling user data.

## User Experience

- The application features two dedicated tabs (**Manage Roles** and **Manage Users**) to enhance user experience and streamline navigation.

- A visually appealing and responsive UI ensures a delightful experience for users across all devices.

## Features

- **Add User**: Quickly add new users with predefined roles and default statuses.
- **Edit User**: Effortlessly update the name and role of any existing user.
- **Delete User**: Seamlessly remove users from the list as needed.
- **Toggle Status**: Switch a user's status between "Active" and "Inactive."
- **Search Functionality**: Quickly search for users by their name to find specific individuals in the user list.
- **Filter by Status**: Filter the user list to show only Active or Inactive users, making it easier to manage users based on their current status.
- **Responsive UI**: The app is designed to be responsive, providing a smooth experience across devices (with additional improvements planned).
- **User Management**: Manage user data efficiently in a well-structured table that displays details like name, role, and status.


## Setup Instructions

To set up this project locally, follow these steps:

# Clone the repository

https://github.com/apoorv15verma/Role-Based-Access-Control-App

# Navigate into the project directory
cd RoleBasedAcessControl-UI

# Install dependencies
npm install

# Start the application
npm start


## Technologies Used

This project is built using the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps, used for managing application state.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **UUID**: A library for generating unique IDs (used for user identification).
- **React-Redux**: The official React bindings for Redux, allowing React components to interact with the Redux store.
- **JavaScript (ES6+)**: Modern JavaScript features for cleaner, more efficient code.
- **React Hooks**: Utilizing state and lifecycle features in function components.


### Explanation of the directories:

- **public/**: Contains static files that will be publicly accessible.
- **src/**: Contains the source code of the React application.
  - **components/**: Contains React components used throughout the app.
  - **store/**: Contains Redux-related files (actions, reducers, and store configuration).
  - **styles/**: If you're using custom styles or configuration files (e.g., Tailwind CSS), they will be here.
- **package.json**: Contains metadata about the project and its dependencies.
- **README.md**: This file with documentation about the project.


## Future Improvements

### 1. **User Authentication**
   - Implement user authentication using JWT (JSON Web Token) or OAuth to allow different user roles (e.g., Admin, Viewer) and secure access to user management features.



### 3. **Performance Optimization**
   - Implement code splitting and lazy loading for components that are not immediately required to reduce the initial bundle size and optimize the app's performance.











