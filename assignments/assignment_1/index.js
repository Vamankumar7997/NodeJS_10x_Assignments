const readline = require("readline");

function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    const myName = process.argv[process.argv.length - 1];
    return myName
}

function getNameFromEnv() {
    // Write your code here
    var name = process.env.name;
    return name;
}

function getNameFromReadLine() {
    // Write your code here
    
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    var Names = " "
    read.question(" ",myName=> {
        Names = myName
        read.close()
    })   
    return Names
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}