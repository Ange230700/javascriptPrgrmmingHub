var x = "",
    i = 0;

while (i < 5) {
    x = x + "number = " + i + "<br>";
    i++;
}

document.getElementById("demo").innerHTML = x;