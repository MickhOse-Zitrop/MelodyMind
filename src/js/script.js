var documentTitle = document.title;
var countTitle = 1;
var boolTitle = true;

window.onload = () => {
    writeTitle();
}

function writeTitle() {
    document.title = documentTitle.substring(0, countTitle);
    if (boolTitle) {
        if (countTitle == documentTitle.length) {
            boolTitle = false;
            writeTitle();
        } else {
            countTitle++;
            setTimeout('writeTitle()', 300);
        }
    } else {
        if (countTitle != 1) {
            countTitle--;
            setTimeout('writeTitle()', 300);
        } else {
            boolTitle = true;
            writeTitle();
        }
    }
}