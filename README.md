# 🚗 Vehicle Movement Simulation – Frontend Development

## 📘 Overview
The **Vehicle Movement Simulation** is a React-based web application that simulates a vehicle moving along a predefined route on a map. It uses **React Leaflet** for map rendering and **dummy JSON data** for route points to visualize real-time movement with play and pause controls.

---

## 🎯 Objective
To design and implement a single-page, frontend-only web application that:
- Displays a map centered on a predefined route.
- Draws the entire route using polyline.
- Simulates a vehicle marker moving along the route.
- Allows users to control movement (start, pause, reset).
- Displays real-time metadata like coordinates and speed.

---

## 🧩 Features
✅ **Interactive Map** – Built with React Leaflet for smooth map rendering.  
✅ **Vehicle Movement Simulation** – Marker moves dynamically along a fixed path.  
✅ **Play & Pause Controls** – Start, stop, and reset the simulation easily.  
✅ **Route Polyline** – Displays the vehicle’s full path.  
✅ **Metadata Display** – Shows coordinates, timestamp, and speed.  
✅ **Responsive UI** – Works seamlessly on desktop and mobile devices.  
✅ **Clean Component Structure** – Organized React components for clarity and scalability.  

---

## 🖥 Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend Framework** | React.js |
| **Map Library** | React-Leaflet + Leaflet |
| **Styling** | CSS |
| **Data Handling** | Static JSON file (dummy-route.json) |
| **Deployment** | Vercel |

---

## 📂 Folder Structure
vehicle-movement/
├── public/
│ └── dummy-route.json # Static route data
├── src/
│ ├── components/
│ │ └── MapView.js # Main map and simulation logic
│ ├── App.js # Root component
│ ├── index.js # Entry point
│ ├── index.css # Global styles
│ └── utils.js (optional) # Utility functions like speed calculation
├── package.json
└── README.md


---

## 🚀 How to Run Locally
```
# 1️⃣ Clone the repository
git clone https://github.com/mounika-2510/Vehicle-Movement.git

# 2️⃣ Navigate to the project folder
cd Vehicle-Movement

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm start
The app will be available at http://localhost:3000.

```

## 🌍 Live Preview

🔗 Deployed Link: https://vehicle-movement-bice.vercel.app/

## Resume Link: 

🔗 Link: https://drive.google.com/file/d/1ChyEu65aTV67ZkeI1R3m_FNBNyeo5sTm/view?usp=drive_link

