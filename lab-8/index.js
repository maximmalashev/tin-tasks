const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/hello', (request, response) => {
    response.send('Hello, World!');
});

app.get('/form', (request, response) => {
    response.sendFile(path.join(__dirname, 'form.html'));
});

// this is the solution for the c and d tasks
// since we are using the json middleware, we can use both url encoded and json bodies and it will work fine for both of them
app.post('/formdata', (request, response) => {
    response.render('formdata', {name: request.body.name, surname: request.body.surname, dob: request.body.dob});
});

app.listen(port, () => {
    console.log('Listening at port ' + port);
});