const url = 'https://api.spacetraders.io/v2/';
const options = {method: 'GET', headers: {Accept: 'application/json'}};

fetch(url, options)
    .then(res => res.json())
    .then(json => document.getElementById('output').innerHTML = JSON.stringify(json, null, 2))
    .catch(err => console.error('error:' + err));