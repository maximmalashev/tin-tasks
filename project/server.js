const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'mainMenu.html'));
});

app.get('/game', (request, response) => {
    response.sendFile(path.join(__dirname, 'game.html'));
});

app.get('/loseScreen', (request, response) => {
    response.sendFile(path.join(__dirname, 'loseScreen.html'));
});


app.get('/finalScreen', (request, response) => {
    response.sendFile(path.join(__dirname, 'winScreen.html'));
});

app.get('/highscores', (request, response) => {
    response.sendFile(path.join(__dirname, 'highscores.html'));
});

app.post('/highscoresjson', (request, response) => {
    response.json(JSON.parse(fs.readFileSync('highscores.json')));
});

app.post('/finalScreen', (request, response) => {
    console.log(request.body)

    var candidate = request.body;
    var json = JSON.parse(fs.readFileSync('highscores.json'));
    json.scores.push(candidate);
    json.scores.sort((a, b) => (a.score > b.score) ? 1 : -1);
    if (json.scores.length > 5) json.scores.pop();

    fs.writeFile('highscores.json', JSON.stringify(json), function (err) {
        if (err) throw err;
      });
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
});
