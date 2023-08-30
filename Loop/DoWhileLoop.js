function myFunction() {
    var x = "",
        i = 0;

    do {
        x = x + "number = " + i + "<br>";
        i++;
    } while (i < 5);

    document.getElementById("demo").innerHTML = x;
}