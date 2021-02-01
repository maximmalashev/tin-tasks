const scores = document.getElementById('scores');

let xhr = new XMLHttpRequest();
    xhr.open('POST', '/highscoresjson');

    xhr.responseType = 'json';
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  
    xhr.send();  

    xhr.onload = function() {
        if (xhr.status != 200) console.error('Cannot access the server!');
        else 
        {
            xhr.response.scores.forEach(element => {
                var line = document.createElement('p');
                var date = new Date(element.date);

                var hours = (date.getHours() < 10 ? '0' : '') + date.getHours(); 
                var minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes(); 

                line.innerHTML = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + '-' + hours + ':' + minutes + ': ' + element.score;

                scores.appendChild(line);
            });
        }
    }

