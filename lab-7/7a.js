const http = require("http");
const url = require("url");

const port = 3500;
const server = http.createServer((request, response) => {
    
    var parameters = url.parse(request.url, true).query;
    var numbers = []

    for (var p in parameters) {
        numbers.push(Number.parseFloat(parameters[p]));
    }

    var pathname = url.parse(request.url).pathname;
    var operation = "";

    response.writeHead(200, {"Content-Type": "text/html"});

    if (pathname == "/add") {
        var result = 0;
        operation = "+";

        for (var i = 0; i < numbers.length; i++) 
            result += numbers[i];
    }
    else if (pathname == "/sub") {
        var result = numbers[0];
        operation = "-";

        for (var i = 1; i < numbers.length; i++) 
            result -= numbers[i];
    }
    else if (pathname == "/div") {
        var result = numbers[0];
        operation = "/";

        for (var i = 1; i < numbers.length; i++) 
            result /= numbers[i];
    }
    else if (pathname == "/mul") {
        var result = 1;
        operation = "*";

        for (var i = 0; i < numbers.length; i++) 
            result *= numbers[i];
    }

    var responseString = "";
    for (var i = 0; i < numbers.length; i++) { 
        responseString += numbers[i];
        if (i != numbers.length - 1) responseString += operation;
    }

    responseString += "=";
    responseString += result;

    var responseHTML = '<!DOCTYPE html>\
    <html lang="en">\
    <head>\
        <meta charset="UTF-8">\
        <meta name="viewport" content="width=device-width, initial-scale=1.0">\
        <title>Document</title>\
    </head>\
    <body>\ ' + responseString + '</body>\
    </html>';

    response.write(responseHTML);
    response.end();
});

server.listen(port, (error) => {
    if (error) 
        console.log("Something went wrong: ", error);
    else console.log("Server is listening on port " + port);
});