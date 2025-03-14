const Questions = [
    {
        q: "When was La Liga founded?",
        a: [{text: "1976", isCorrect: false},
            {text: "2002", isCorrect: false},
            {text: "1929", isCorrect: true},
            {text: "1878", isCorrect: false},
           ]
    },
    {
        q: "How many Champions League's Does Real Madrid have?",
        a: [{text: "12", isCorrect: false},
            {text: "15", isCorrect: true},
            {text: "10", isCorrect: false},
            {text: "20  ", isCorrect: false},
           ]
    },
    {
        q: "How many players are on each team in?",
        a: [{text: "12", isCorrect: false},
            {text: "6", isCorrect: false},
            {text: "17", isCorrect: false},
            {text: "11", isCorrect: true},
           ]
    },
    {
        q: "How many teams are in La Liga?",
        a: [{text: "15", isCorrect: false},
            {text: "22", isCorrect: false},
            {text: "18", isCorrect: false},
            {text: "20", isCorrect: true},
           ]
    },
    
    // add more questions here....
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    // ToDo: finish this later...
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;

}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
