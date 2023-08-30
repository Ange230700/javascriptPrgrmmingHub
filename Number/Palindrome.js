function Palindrome() {
    var revStr = "";
    var str = document.getElementById("str").value;
    var i = str.length;

    for (var j = i; j >= 0; j--) {
        revStr = revStr + str.charAt(j);
    }

    if (str == "") {
        alert("Please Enter a number or some text");
    } else if (str == revStr) {
        alert(str + " is Palindrome");
    } else {
        alert(str + " is not a Palindrome");
    }
}