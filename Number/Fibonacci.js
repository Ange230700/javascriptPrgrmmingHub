var a = 0;
var b = 1;
var c = 0;
document.write("Fibonacci Series<br/>");

while (b <= 20) {
    document.write(c);
    document.write("<br/>");
    c = a + b;
    a = b;
    b = c;
}