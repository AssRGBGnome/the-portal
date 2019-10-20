var click_count = 0;
var click_multiplier = 1;
var multiplier_button = 0;
var cheat = false;

document.addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        cheat = true;
    }
});

function start() {
    var count_text = document.getElementById("counter");
    count_text.innerText = click_count;
}

function on_click() {
    var current_count = click_count;

    if (cheat == false) {
        var count_text = document.getElementById("counter");
        click_count += 1 * click_multiplier;
        count_text.innerText = click_count;
    }
    else {
        count_text = current_count;
        cheat = false;
    }
}

function add_multiplier(multiplier) {
    click_multiplier = multiplier;
}