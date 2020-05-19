var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
    for (var i = 0; i < data.toString().length; i++) {
        console.log(data.toString().charAt(i) + ',');
      }
 });

