const fs = require('fs'); //FS == FILE SYSTEM

const data = [
  { name: "larry", id: 123 },
  { name: "moe", id: 234 },
  { name: "curly", id: 456 }
];

const text = JSON.stringify(data);

fs.writeFile('data.txt', text, console.log);
