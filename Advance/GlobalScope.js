// A global variable has global scope means all scripts and functions on a web page can access it. 

var Name = "Michel";

getName(); // * Expected output: My name is Michel

//Here, getName using 'Name' variable is declared in global scope.
function getName() {
    console.log("My name is " + Name);
}