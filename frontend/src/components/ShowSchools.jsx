import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/grid.css";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/schools")
      .then(res => setSchools(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid-container">
      {schools.map((school) => (
        <div className="card" key={school.id}>
          <img src={`http://localhost:5000/schoolImages/${school.image}`} alt={school.name} />
          <div className="card-body">
            <h3>{school.name}</h3>
            <p>{school.address}</p>
            <p>{school.city}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
