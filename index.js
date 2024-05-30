// Solution 1: Using list from array in index.js

import express from "express";
const app = express();

const employees = [ 
  { id: 1, name: "Mike", age: 27 }, 
  { id: 2, name: "Nina", age: 28 }, 
  { id: 3, name: "Hacibala", age: 30 } 
];

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Solution 2: Using list from JSON

// import express from "express";
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();

// const filePath = path.join(__dirname, "employees.json");

// app.get("/employees", (req, res) => {
//   fs.readFile(filePath, "utf-8", (err, data) => {
//     if (err) {
//       res.status(500).send("Error reading file");
//       return;
//     }
    
//     const employees = JSON.parse(data);
//     res.json(employees);
//   });
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });


