var txt = "";
var person = {
    fname: "John",
    lname: "Doe",
    age: 20,
};

for (var x in person) {
    if (x == "age") {
        txt = txt + ". I am " + person[x] + " years old.";
        break;
    }
    txt = txt + " " + person[x];
}

document.getElementById("demo").innerHTML = txt;