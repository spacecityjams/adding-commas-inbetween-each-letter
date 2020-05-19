var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
//    console.log("Asynchronous read: " + data.toString());
    var inputArray = data.toString().split("");
//    console.log(inputArray);

    var outputArray = []
    for (i = 0; i < inputArray.length; i++){
        outputArray.push(inputArray[i]);
        outputArray.push(",");
    }

    outputArray.pop();
//    console.log(outputArray)

    for (j = 0; j < outputArray.length; j++){
        fs.writeFileSync('output.txt', outputArray.join(""))
    }   
 });