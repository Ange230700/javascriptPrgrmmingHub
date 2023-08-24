// The apply() method allows to borrow functions /switch the context and set the this value in function invocation. 
// It allows an object to use another object's.method for its own designs.
var person =
{
    firstName: "Harry",
    lastName: "Edison",

    showFullName: function () {
        //The "context"
        console.log(this.firstName + " " + this.lastName);
    }
};

//when we invoke showFullName() on the person object, the context becomes person object.
person.showFullName(); // * Expected output: Harry Edison

//another object
var anotherPerson =
{
    firstName: "Mary",
    lastName: "Thomas"
};

//By using apply() method, "this" gets the value of whichever object invokes the "this" function
person.showFullName.apply(anotherPerson);// * Expected output: Mary Thomas
//So the context is now anotherPerson