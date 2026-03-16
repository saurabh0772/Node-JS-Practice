import fs from 'fs';

const data = "Hello, this is a sample file";

if (!fs.existsSync("saurabh.txt")) {
    fs.writeFile("./saurabh.txt", data, (err) => (
        err ? console.log(err) : console.log("File created successfully with name saurabh.txt")
    ));
}

// fs.readFile("./saurabh.txt" , "utf-8", (err, data) => {
//     err ? console.log(err) : console.log("Content of the file : \n", data);
// })

// append something on the existing file

if(fs.existsSync("saurabh.txt")) {
    fs.appendFile("./saurabh.txt", "\nThis is the appended data", (err) => (
        err ? console.log(err) : console.log("Data appended successfully")
    ));
}

fs.readFile("./saurabh.txt" , "utf-8", (err, data) => {
    err ? console.log(err) : console.log("Content of the file : \n", data);
})

if(fs.existsSync("saurabh.txt")) {
    fs.unlink("./saurabh.txt" , (err) => {
        err ? console.log(err) : console.log("File deleted successfully")
    })
}
