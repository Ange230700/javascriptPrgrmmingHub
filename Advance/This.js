//this keyword gets the value of the object that invokes the function where this is used.
var person = {
    firstName: "Harry",
    lastName: "Edison",
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}
person.fullName(); // Harry Edison