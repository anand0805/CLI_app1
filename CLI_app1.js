var readlineSync = require("readline-sync");
var score = 0;

var highScores = [{
        name: "Aditya",
        score: 5,
    },

    {
        name: "Rahul",
        score: 1,
    },
]

var questions = [{
    question: "what is my name ? ",
    answer: "Anand",
}, {
    question: "where do i live ? ",
    answer: "patna",
}, {
    question: "what do i like watching ?",
    answer: "anime",
}, {
    question: "what is my favourate color ? ",
    answer: "blue",
}, {
    question: "where do i want to work ?",
    answer: "Product Based company",
}]

function welcome() {
    var username = readlineSync.question("what is my name ?");
    console.log("welcome" + username + "How much do you know Anand ? ");
}

function play(question, answer) {
    var useranswer = readlineSync.question(question);
    if (useranswer == answer) {
        console.log("you are right!");
        score++;
    } else {
        console.log("you are wrong!");
    }
    console.log("current_score" + score);
}

function game() {
    for (var i = 0; i < quesitons.length; i++) {
        var c_question = questions[i];
        play(c_question.question, c_question.answer);
    }
}

function displayscore() {
    console.log("Final score! = " + score);
    console.log("Check out the high scores, if you should be there ping me and I'll update it");

    highScores.map(score => console.log(score.name, " : ", score.score))
}
welcome();
game();
displayscore();