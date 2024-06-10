const requestURL = 'https://jsonplaceholder.typicode.com/users';

document.getElementById('loadButton').addEventListener('click', loadData);

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    };
    return fetch(url, 
        {
            method: method,
            body: JSON.stringify(body),
            headers: headers
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return response.json().then(error => {
                const e = new Error('something went wrong');
                e.data = error;
                throw e;
            })
        })
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