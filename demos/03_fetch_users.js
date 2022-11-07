import fetch from 'node-fetch'; 

const url = "https://jsonplaceholder.typicode.com/users"

function displayData(data){ // GET by default
    data.forEach(element => {
        console.log(element.email);
    });
}

fetch(url)
    .then((response) => response.json())
    .then((data) => displayData(data));
