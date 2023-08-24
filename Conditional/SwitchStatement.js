function myFunction() {
    var content;
    var dayOfToday = new Date().getDay();

    switch (dayOfToday) {
        case 0:
            content = "Today is Sunday";
            break;
        case 1:
            content = "Today is Monday";
            break;
        case 2:
            content = "Today is Tuesday";
            break;
        case 3:
            content = "Today is Wednesday";
            break;
        case 4:
            content = "Today is Thursday";
            break;
        case 5:
            content = "Today is Friday";
            break;
        case 6:
            content = "Today is Saturday";
            break;
    }

    document.getElementById("demonstration").innerHTML = content;
}