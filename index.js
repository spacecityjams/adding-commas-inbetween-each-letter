var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
    var newArray = data.toString().split("")
    console.log(newArray)

/*

    for (var i = 0; i < newArray.length; i++) {
        console.log(data.toString().charAt(i) + ',');
        fs.writefile
        
      }
 });
*/
});