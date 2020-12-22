var fs = require("fs");

fs.watch("watchDirectory", (eventType, filename) => {
    console.log("Change detected in file " + filename + ":");

    fs.readFile("watchDirectory/" + filename, (err, data) => {
        if (err) console.log(err);
        else console.log(data.toString());
    });
});