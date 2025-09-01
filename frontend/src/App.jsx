import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AddSchool from "./components/AddSchool";
import ShowSchools from "./components/ShowSchools";
import "./styles/app.css";

export default function App() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="hero">
        <h1>Welcome to School Management</h1>
        <p>Manage your schools easily and efficiently!</p>

        <div className="hero-buttons">
          <button onClick={() => navigate("/add")} className="hero-btn">
            Add School
          </button>
          <button onClick={() => navigate("/list")} className="hero-btn">
            Show Schools
          </button>
        </div>
      </header>

      <Routes>
        <Route path="/add" element={<AddSchool />} />
        <Route path="/list" element={<ShowSchools />} />
      </Routes>
    </div>
  );
}
