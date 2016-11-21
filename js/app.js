$(document).ready(function() {

    // randomize computer's choice on page load
    var randomNumber = Math.random();

    if (randomNumber < 0.33) {
        var computerChoice = "rock";
    } else if (randomNumber >= 0.33 && randomNumber < 0.66) {
        var computerChoice = "paper";
    } else {
        var computerChoice = "scissors";
    }

    console.log(computerChoice);

    // add click events to user choices
    $("#rock").on("click", function() {
        if (computerChoice === "scissors") {
            $(this).addClass("success green-background");
        } else if (computerChoice === "rock") {
            alert("Tie game!");
        } else {
            alert("You lost!");
        }
    });

    $("#paper").on("click", function() {
        if (computerChoice === "rock") {
            $(this).addClass("success green-background");
        } else if (computerChoice === "paper") {
            alert("Tie game!");
        } else {
            alert("You lost!");
        }
    });

    $("#scissors").on("click", function() {
        if (computerChoice === "paper") {
            $(this).addClass("success green-background");
        } else if (computerChoice === "scissors") {
            alert("Tie game!");
        } else {
            alert("You lost!");
        }
    });

});
