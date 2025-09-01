const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/schoolImages", express.static(path.join(__dirname, "schoolImages")));


const db = mysql.createConnection({
  host: "localhost",
  user: "root",      // apna username
  password: "Dream_Alpesh",      // apna password
  database: "testdb" // apna database
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// Multer config for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "schoolImages"); // save in folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique name
  }
});
const upload = multer({ storage });

// 📌 API: Add School
app.post("/api/schools", upload.single("image"), (req, res) => {
    
  const { name, address, city, state, contact, email_id } = req.body;
  const image = req.file ? req.file.filename : null;

  const sql = "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?,?,?,?,?,?,?)";
  db.query(sql, [name, address, city, state, contact, image, email_id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ message: "School added successfully", id: result.insertId });
  });
});

// 📌 API: Get Schools
app.get("/api/schools", (req, res) => {
  db.query("SELECT * FROM schools ORDER BY id DESC", (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
