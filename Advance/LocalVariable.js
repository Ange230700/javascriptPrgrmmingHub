//Variables declared within a JavaScript function, become LOCAL to the function.

//In following example,'Name' is a LOCAL variable.
function writeName() {
    var Name = "Michel";
    console.log("I am " + Name);
}

writeName(); // * Expected Output: I am Michel