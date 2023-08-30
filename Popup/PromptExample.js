function myFunction() {
    var x;

    var person = prompt("Please enter your name", "BatMan");

    if (person != null) {
        x = "Hello " + person + "! How are you today?";
        document.getElementById("demo").innerHTML = x;
    }
}