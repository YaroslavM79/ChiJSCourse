const requestURL = 'https://jsonplaceholder.typicode.com/users';

document.getElementById('loadButton').addEventListener('click', loadData);

function sendRequest(method, url, body = null) {
    return new Promise( (resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json'
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
        if (xhr.status >= 400){
            reject(xhr.response)
        } else {
            resolve(xhr.response)
        }
    }
    xhr.onerror = () => {
        reject(xhr.response)
    }

    xhr.send(JSON.stringify(body));
    } )
}

body = {
    name: 'Iaroslav',
    age: 40
}

function loadData() {
    // sendRequest('GET', requestURL)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));
    sendRequest('POST', requestURL, body = body)
    .then(data => console.log(data))
    .catch(err => console.log(err));
}