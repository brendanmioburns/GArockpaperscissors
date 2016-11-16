$(document).ready(function() {

    // randomize computer's choice on page load
    var computerChoice = math.Random();

    if (computerChoice =< 0.33) {
        computerChoice = "rock";
    } else if (0.66 >= computerChoice && computerChoice >= 0.34) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    // add click events to user choices
    $(this).on("click", function() {
        var userChoice = .attr()
    });

});
