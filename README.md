# User Data API

This API is designed to manage user data in a MongoDB database. It provides endpoints for storing user data, retrieving random user data, checking user existence, filtering users by age, and listing user names.

## Technologies Used
- Node.js
- MongoDB
- Express.js

## Installation

### Clone the repository:

```bash
git clone https://github.com/Muralitharan2002/node_api.git
 ```

### Install dependencies:

```bash
npm install
```

### Start the server:

```bash
npm start
```
### Set up MongoDB:
   - Make sure MongoDB is installed and running on your system.
   - Update the MongoDB connection URI in the `.env` file if necessary.


The API should now be running on http://localhost:8080.

## Endpoints

### 1. Create User Data

- **URL**: POST /api/create
- **Purpose**: Store user data in the MongoDB database.
- **Request Body**: JSON object with the following fields:
  - name (string): User's name
  - dob (string): Date of birth (format: YYYY-MM-DD)
  - age (number): User's age
  - location (string): User's location (city)

### 2. Get Random User

- **URL**: GET /api/fetch
- **Purpose**: Fetch and return data of a single random user.

### 3. Check User Existence

- **URL**: POST /api/checkExist
- **Purpose**: Check if a user with the provided name exists in the database.
- **Request Body**: JSON object with the following field:
  - name (string): User's name to check existence

### 4. Users Above Age

- **URL**: POST /api/filter
- **Purpose**: Retrieve users whose age is greater than or equal to the specified age.
- **Request Body**: JSON object with the following field:
  - age (number): Minimum age to filter users

### 5. List User Names

- **URL**: GET /api/allNames
- **Purpose**: Return an array of the names of all users.


