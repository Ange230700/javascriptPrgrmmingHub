onerror = handleErr;
var txt = "";

function handleErr(msg, url, l) {
    txt = "There was an error on this page.\n\n";
    txt += "Error: " + msg + "\n";
    txt += "URL: " + url + "\n";
    txt += "Line: " + l + "\n\n";
    txt += "Click OK to continue.\n\n";
    alert(txt);

    return true;
}

function message() {
    handleErr("Welcome guest!");
}