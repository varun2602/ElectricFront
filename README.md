

## Description

This is a ReactJS application that serves as an Connection request management system. Below is a detailed overview of the features and functionalities of the app.

## Features

### Home Page
- **Analytics Dashboard**: Displays a line graph showing the number of requests every month. This graph is built using the Chart.js library.
- **Authentication**: All routes are protected and require login. The authentication system is integrated with the backend Django app using Simple JWT. It includes response interceptors to auto-refresh and retry if the access token expires.

### Navbar
- **Application List**: Accessible via the "Application List" button on the navbar. This page displays all applications to date.
  - **Pagination**: Automatically generates pagination buttons based on the size of the data. Each page contains up to 10 records. Clicking on a pagination button loads the corresponding data.
  - **Date Filter**: Allows filtering of applications based on a specified date range.
  - **Editable Table**: Clicking on any field in the table opens a modal form with the current value of the clicked item. Users can update the value and save it, which will automatically update the data in both the frontend and backend.

### Routes
- **Applied Route**: Accessible without login. This route allows users to submit applications for electric connections, which updates the database.
- **Search Functionality**: Provides a search feature to look up applications by a common ID number.

### Other Features
- **Logout Button**: Logs out the user, revoking access to authenticated templates.

## Installation and Setup


1. Install the dependencies.
    ```sh
    npm install
    ```
2. Start the development server.
    ```sh
    npm run dev
    ```

## Backend Setup

The backend of this application is built using Django with Simple JWT for authentication. Ensure that the Django server is running and properly configured to handle authentication and data requests.

## Usage

1. **Login**: Access the app by logging in with your credentials.
2. **View Analytics**: Check the home page for monthly request analytics.
3. **Manage Applications**: Navigate to the application list to view, filter, and edit applications.
4. **Submit Applications**: Use the applied route to submit new applications without logging in.
5. **Search Applications**: Utilize the search feature to find specific applications.
6. **Logout**: Click the logout button to end your session.




