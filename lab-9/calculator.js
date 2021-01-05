calculate = function() {
    var p1 = document.getElementById('p1').value;
    var p2 = document.getElementById('p2').value;

    var operation = document.getElementById('operations').value;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/calculate');

    xhr.responseType = 'json';
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");    

    xhr.send(JSON.stringify({
        'p1': p1,
        'p2': p2,
        'operation': operation
    }));

    xhr.onload = function() {
        console.log(123);
        if (xhr.status != 200) console.error('Cannot access the server!');
        else 
        {
            if (xhr.response === null) document.getElementById('result').innerText = 'Error!';
            else document.getElementById('result').innerText = xhr.response.result;
        }
    }
}