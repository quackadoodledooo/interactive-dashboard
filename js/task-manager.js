function weeklyGoal(userName, dailyGoal, bonusTasks) {
    //calculate weekly and total goals
    let weeklyGoal = dailyGoal * 5;
    let totalGoal = weeklyGoal + bonusTasks;

    //format output
    let output = "Hello " + userName +
                 "! Weekly Goal: " + weeklyGoal + 
                 " | Total Goal: " + totalGoal;

    //send output to output box
    document.getElementById("goal-message").innerHTML = output;
}

document.getElementById("goal-btn").addEventListener("click", function(event) {
    //stop the form from submitting(reloading the page)
    event.preventDefault();

    //retrieve values from HTML form
    let userName = document.getElementById("name").value;
    let dailyGoal = Number(document.getElementById("dailyGoal").value);
    let bonusTasks = Number(document.getElementById("bonusTasks").value);

    //use those values to calculate totals and output them
    weeklyGoal(userName, dailyGoal, bonusTasks);
});