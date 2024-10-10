# EmployWise Assignment

This project is a React application that integrates with the Reqres API to perform basic user management functions. It includes login, user list with pagination, and the ability to edit and delete users.

## Features

1. **Authentication**: Users can log in with their credentials. Token is stored in `localStorage` for session management.
2. **User List**: Display a paginated list of users fetched from the Reqres API.
3. **Edit User**: Update user details such as first name, last name, and email.
4. **Delete User**: Remove a user from the list.
5. **Pagination**: Navigate through multiple pages of users.
6. **Routing**: Uses `react-router-dom` for routing between Login, User List, and Edit User pages.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **Axios**: HTTP client for making API requests.
- **React Router**: For navigating between different pages.
- **Reqres API**: Mock API for user data and authentication.
- **Tailwind CSS**: Basic styling for layout and design.


## Clone the repository

```bash
git clone https://github.com/aakassh16/employwise-assignment.git
cd employwise-assignment
