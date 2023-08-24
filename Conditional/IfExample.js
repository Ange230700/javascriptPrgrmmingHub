function myFunction() {
    var x = "";
    var time = new Date().getHours();

    if (time < 21) {
        x = "Have a nice day";
    }

    document.getElementById("demonstration").innerHTML = x;
}