
# NodeJS-ExpressJS-Projects

This repository contains various NodeJS-ExpressJS-Projects, including a Blog Site and a Money Tracker application. Each project is built using different technologies and frameworks.

## Project Structure

```
├── Blog Site/
│   ├── models/
│   ├── routes/
│   ├── view-articles/
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── Money Tracker/
│   ├── public/
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│
├── User Registration Form/
│   ├── views/
│   ├── App.js
│   ├── User.js
│   ├── package-lock.json
│   ├── package.json
│   ├── style.css
└── README.md
```

## Projects

### 1. User Registration Form (App.js)

A blog site allowing users to create, read, update, and delete articles, with user authentication using Passport.js.

#### Features

- User Authentication
- CRUD Operations for Articles
- Passport.js for authentication

#### Installation

1. **Clone the Repository**

   ```sh
   git clone https://github.com/Danesh1520/NodeJS-ExpressJS-Projects
   cd NodeJS-ExpressJS-Projects/User Registration Form
   ```

2. **Install Dependencies**

   Make sure you have Node.js and MongoDB installed. Install the required packages using:

   ```sh
   npm install
   ```

3. **Set Up Database**

   Ensure MongoDB is running and connected to the correct port.

4. **Run the Application**

   ```sh
   node app.js
   ```

5. **Usage**

   Open your web browser and go to `http://localhost:3000` to access the blog site. Register a new account or log in with an existing account to start creating articles.

### 2. Blog Site (Server.js)

A blog site built with Express.js and MongoDB, allowing users to create, read, update, and delete articles.

#### Features

- Article Management
- EJS for templating

#### Installation

1. **Clone the Repository**

   ```sh
   git clone https://github.com/Danesh1520/NodeJS-ExpressJS-Projects
   cd Web_Development_Projects/Blog Site
   ```

2. **Install Dependencies**

   Make sure you have Node.js and MongoDB installed. Install the required packages using:

   ```sh
   npm install
   ```

3. **Set Up Database**

   Ensure MongoDB is running and connected to the correct port.

4. **Run the Application**

   ```sh
   node server.js
   ```

5. **Usage**

   Open your web browser and go to `http://localhost:3000` to access the blog site. You can view, create, edit, and delete articles.

### 3. Money Tracker (index.js)

A money tracker application to manage and track your expenses and income.

#### Features

- Add Income and Expenses
- View Transaction History
- Track Balance

#### Installation

1. **Clone the Repository**

   ```sh
   git clone https://github.com/Danesh1520/NodeJS-ExpressJS-Projects
   cd Web_Development_Projects/Money Tracker
   ```

2. **Install Dependencies**

   Make sure you have Node.js installed. Install the required packages using:

   ```sh
   npm install
   ```

3. **Run the Application**

   ```sh
   node index.js
   ```

4. **Usage**

   Open your web browser and go to `http://localhost:3000` to access the money tracker application. Add your income and expenses to keep track of your financial status.
