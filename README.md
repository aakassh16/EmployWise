# EmployWise Assignment

This project is a React application that integrates with the Reqres API to perform basic user management functions. It includes login, user list with pagination, and the ability to edit and delete users.

## Live Demo
Here you can view the live demo of this application here:

[Deployed Application Link](https://aakassh16.github.io/EmployWise/)

## Features

1. **Authentication**: Users can log in with their credentials. Token is stored in `localStorage` for session management.
2. **User List**: Display a paginated list of users fetched from the Reqres API.
3. **Edit User**: Update user details such as first name, last name, and email.
4. **Delete User**: Remove a user from the list.
5. **Pagination**: Navigate through multiple pages of users.
6. **Routing**: Uses `react-router-dom` for routing between Login, User List, and Edit User pages.

## Prerequisites

You have to install the following:
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Technologies Used

- **React**: Frontend library for building the user interface.
- **Axios**: HTTP client for making API requests.
- **React Router**: For navigating between different pages.
- **Reqres API**: Mock API for user data and authentication.
- **Tailwind CSS**: Basic styling for layout and design.

## Folder Structure

```bash
.
├── public
│   └── index.html 
├── src
│   ├── components
│   │   ├── Auth.js
│   │   ├── UserList.js
│   │   └── EditUser.js
│   │
│   ├── App.js
│   ├── index.css
│   └── index.js
│
├── README.md
├── .postcssrc
├── tailwind.config.js
├── package-lock.json
└── package.json

```

## Clone the repository

```bash
git clone https://github.com/aakassh16/employwise-assignment.git
cd employwise-assignment

```


## Install dependencies

```bash
npm install

```
## Start the Application

```bash
npm start

```

