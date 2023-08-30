function myFunction() {
    var x = "",
        i = 0;

    for (i = 0; i < 10; i++) {
        if (i == 3) {
            continue;
        }

        x = x + "number = " + i + "<br>";
    }

    document.getElementById("demo").innerHTML = x;
}