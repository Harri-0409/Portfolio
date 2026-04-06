$(document).ready(function () {
    $("#book").turn({
        width: 800,
        height: 500,
        autoCenter: true
    });
});

function next() {
    $("#book").turn("next");
}

function prev() {
    $("#book").turn("previous");
}
