function myFunction() {
    var x = "";
    var time = new Date().getHours();

    if (time < 16) {
        x = "Have a nice day";
    } else {
        x = "Good night";
    }

    document.getElementById("demonstration").innerHTML = x;
}