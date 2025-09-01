# School Management App

## Project Overview

**School Management App** is a full-stack web application built with React (frontend) and Node.js + Express (backend) to manage school information efficiently. Users can add school details, including images, and view all schools in a modern, responsive card layout. 

This project demonstrates how to integrate a React frontend with a Node.js backend using MySQL as the database, handling file uploads with Multer, and validating forms with react-hook-form.

## Features

- Add school details with the following fields:
  - Name
  - Address
  - City
  - State
  - Contact Number (exactly 10 digits)
  - Email
  - Image upload
- View all schools in a premium card layout (like an e-commerce product listing)
- Responsive design for both mobile and desktop
- Image upload and storage in the backend (`schoolImages` folder)
- Form validation including email format and 10-digit contact number

## Technologies Used

### Frontend
- React
- Vite
- react-hook-form
- react-router-dom
- Axios
- CSS (responsive design, modern UI)

### Backend
- Node.js
- Express
- MySQL
- Multer (for image upload)
- CORS

## Folder Structure

```
school-management-app/
│── backend/        # Node.js + Express + MySQL
│   │── server.js
│   │── schoolImages/  # Uploaded school images
│   │── package.json
│── frontend/       # React + Vite frontend
│   │── src/
│   │   │── components/
│   │   │   │── AddSchool.jsx
│   │   │   │── ShowSchools.jsx
│   │   │   │
│   │   │   ├── App.jsx
│   │   │   ├── main.jsx
│   │   │   └── styles/
│   │   │       ├── app.css
│   │   │       ├── form.css
│   │   │       └── grid.css
│   │── package.json
│── README.md
│── .gitignore
```

## Backend Setup

1. Navigate to the backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install express mysql2 multer cors
```

3. Create MySQL database and table:
```sql
CREATE DATABASE school_db;
USE school_db;

CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  contact VARCHAR(20),
  image TEXT,
  email_id TEXT
);
```

4. Start the backend server:
```bash
node server.js
```
Backend will run at `http://localhost:5000`

## Frontend Setup

1. Navigate to the frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm run dev
```
Frontend will run at `http://localhost:5173`

## Usage

1. Open the app in the browser (`http://localhost:5173`).
2. Homepage will show **Add School** and **Show Schools** buttons.
3. Click **Add School** to open the form:
   - Fill in school details
   - Upload an image
   - Submit the form
4. Click **Show Schools** to view all schools in a premium card layout.

## Sample Data

You can use the following sample schools to test the app:

| Name                     | Address         | City         | State | Contact     | Email                    | Image       |
|---------------------------|----------------|-------------|-------|------------|--------------------------|------------|
| Sunshine International    | 12 Park Street | New York    | NY    | 1234567890 | sunshine@school.com       | school1.jpg|
| Greenfield Academy        | 45 Oak Avenue  | Chicago     | IL    | 2345678901 | greenfield@academy.com    | school2.jpg|
| Riverdale High School     | 78 River Road  | Los Angeles | CA    | 3456789012 | riverdale@high.com        | school3.jpg|
| Bright Minds Institute    | 23 Elm Street  | Houston     | TX    | 4567890123 | brightminds@institute.com | school4.jpg|
| Horizon Public School     | 56 Maple Lane  | Miami       | FL    | 5678901234 | horizon@publicschool.com  | school5.jpg|
| Oakwood Academy           | 89 Pine Street | Seattle     | WA    | 6789012345 | oakwood@academy.com       | school6.jpg|
| Starlight High            | 34 Cedar Avenue| Boston      | MA    | 7890123456 | starlight@highschool.com  | school7.jpg|
| Crestview School          | 12 Willow Road | Denver      | CO    | 8901234567 | crestview@school.com      | school8.jpg|
| Maple Leaf Academy        | 90 Birch Street| San Francisco | CA   | 9012345678 | mapleleaf@academy.com     | school9.jpg|
| Silver Oak Institute      | 67 Chestnut Lane | Austin    | TX    | 9123456789 | silveroak@institute.com   | school10.jpg|

## License

This project is licensed under the MIT License.

---

**Note:** Make sure to place uploaded images in the backend `schoolImages` folder or adjust image paths accordingly.
