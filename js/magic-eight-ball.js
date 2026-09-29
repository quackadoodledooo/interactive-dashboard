//create array and establish element for the circle div
const answers = new Array("It is certain", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Don't count on it", "Outlook not so good");
const circleDiv = document.getElementById("circle")

function displayAnswer() {
    //set a variable to answer to be able to access it easily
    const answerIndex = Math.floor(Math.random() * answers.length);
    const answer = answers[answerIndex];
    //show block and display text
    circleDiv.style.display = 'block';
    circleDiv.innerHTML = answer;
}
//on click alert user to enter a question if there is none and then display an answer/
document.getElementById("ball").addEventListener('mousedown', (event) => {
    if (document.getElementById("question").value == "") {
        alert("Enter a question!");
    } else {
        displayAnswer();
    }
});

//clear the div off so the user can ask another question
document.getElementById("reset").addEventListener('mousedown', (event)=>{
    circleDiv.style.display = 'none';
});