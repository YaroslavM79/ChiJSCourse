document.getElementById('loadButton').addEventListener('click', loadData);

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1') // Замените URL на ваш собственный API
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation: ', error);
        });
}

function displayData(data) {
    const container = document.getElementById('dataContainer');
    container.innerHTML = '<p>Заголовок: ' + data.title + '</p>' +
                          '<p>Описание: ' + data.body + '</p>';
}