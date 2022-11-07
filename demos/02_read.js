const fs = require('fs');

const text = fs.readFileSync('data.txt', 'utf8')
const data = JSON.parse(text);
console.log(data);
