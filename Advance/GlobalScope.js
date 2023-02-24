// A global variable has global scope means all scripts and functions on a web page can access it. 

var Name = "Michel";

getName();

//Here, getName using 'Name' variable is declared in global scope.
function getName() {
    console.log("My name is " + Name);
}