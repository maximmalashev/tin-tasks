const express = require('express');
const cors = require('cors');
const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/calculate', (request, response) => {
    console.log(request.body);

    var p1 = parseFloat(request.body.p1);
    var p2 = parseFloat(request.body.p2);

    var operation = request.body.operation;

    if (operation === 'add') {
        response.json({ result: (p1 + p2) });
    } else if (operation === 'sub') {
        response.json({ result: (p1 - p2) });
    } else if (operation === 'mul') {
        response.json({ result: (p1 * p2) });
    } else if (operation === 'div') {
        if (p2 === 0) response.json(null); 
        else response.json({ result: (p1 / p2) });
    }
});

app.listen(port, () => {
    console.log('Listening at port ' + port);
});