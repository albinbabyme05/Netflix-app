Netflix Clone App
=======================

Overview
-------

This Netflix Clone is a React-based web application that replicates the core UI and functionality of Netflix, allowing users to browse movie posters and details. The app demonstrates front-end development concepts and API integration.

Features
--------

•	Home Page: Movie categories and featured banners.
•	Dynamic Rows: Movie posters fetched from an external API.
•	Video Previews: Integration with YouTube for trailers (React-Youtube).
•	Responsive Design: Optimized for both desktop and mobile devices.

Technologies Used
------------------

•	Frontend: React.js, JavaScript, HTML, CSS
•	HTTP Requests: Axios
•	API Integration: TMDb (The Movie Database)
•	YouTube Integration: React-Youtube
•	Prerequisites
•	Node.js (v14 or higher)
•	How to Run Locally
•	Clone the Repository

How it works ?
--------------

1.	Copy code
2.	npm install
3.	Set Up API Key
4.	Obtain an API key from TMDb.
5.	Create a .env file in the root directory and add your API key:
6.	makefile
7.	Copy code
8.	REACT_APP_TMDB_API_KEY=your_api_key
9.	Run the Application (npm run dev)

--->	The app will be available at http://localhost:5173/.

Project Structure
-----------------
src/
├── Components/
│   ├── Banner.jsx
│   ├── RowPost.jsx
│   ├── NavBar.jsx
│
├── assets/
├── App.js
└── index.js

---> API Endpoints
--->	TMDb API is used for fetching movie data.

Deployment
----------
The app can be deployed using platforms like Vercel or Netlify for production use.

License
-------
This project is open-source and available for learning purposes.
![netflix_app](https://github.com/user-attachments/assets/053c62ca-50c8-448f-bd77-8aac46d1f0d4)


