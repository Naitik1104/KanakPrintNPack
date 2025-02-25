const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", methods: ["GET", "POST"] }));
app.use("/uploads", express.static("uploads")); // Serve images

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "naitik@mysql",
  database: "KanakPrints",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL Database");
  }
});

// Set up Multer for Image Uploads
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// ✅ Fetch product names from database
app.get("/products", (req, res) => {
  db.query("SELECT ProductName FROM Products", (err, results) => {
    if (err) {
      res.status(500).json({ error: "Database query failed" });
    } else {
      res.json(results.map((row) => row.ProductName)); // Return an array of product names
    }
  });
});

// ✅ Contact Form Submission with Image Upload
app.post("/contact", upload.single("image"), (req, res) => {
  const { name, email, phone_no, company, message, product } = req.body;
  const imagePath = req.file ? `/uploads/${req.file.filename}` : null; // Save image path

  db.query(
    "INSERT INTO user_details (name, email, phone_no, company, message, image, productenq) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [name, email, phone_no, company, message, imagePath, product],
    (err) => {
      if (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Failed to save contact" });
      } else {
        res.json({ message: "Quote request submitted successfully" });
      }
    }
  );
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
