var firstName = "Harry",
    lastName = "Edison";

function showFullName() {
    //"this" inside this function will have the value of the window object​
    console.log(this.firstName + " " + this.lastName);
}

var person =
{
    firstName: "Pascal",
    lastName: "Thomas",

    showFullName: function () {
        //"this" on the line below refers to the person object, because 
        //the showFullName function will be invoked by person object.​
        console.log(this.firstName + " " + this.lastName);
    }
}

showFullName(); // * Expected output: Harry Edison
window.showFullName(); // * Expected output: Harry Edison
person.showFullName(); // * Expected output: Pascal Edison