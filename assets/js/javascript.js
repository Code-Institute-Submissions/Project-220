(function(){
function createQuiz(){
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}"value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
    output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
    );
        }
    );
    quizContainer.innerHTML = output.join('');
}

function showResults(){
    const answerContainers = quizContainer.querySelectAll('.answers');
    
    let nuCorrect = 0;
    
    myQuestions.forEach( (currentQuestion, questionNumber) => {
        
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=questions${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


const myQuestions = [
    {
        question: "Who won the frist ever Premier League Trophy in the 1992-93 season?",
            answers: {
                a: "Manchester United",
                b: "Blackburn Rovers",
                c: "Liverpool",
                d: "Aresnal"
            },
            correctAnswer: "a"
        },
    {
        question: "In the season 1993-94 who became the most expensive footballer signed by an English Football team?",
            answers: {
                a: "Andy Townsend",
                b: "Roy Keane",
                c: "Tim Flowers",
                d: "Neil Ruddock"
            },
            correctAnswer: "b"
        },
    {
        question: "In the 1994-95 which club had the smallest Stadium?",
            answers: {
                a: "Southampton-The Dell"
                b: "Norwich-Carrow Road"
                c: "Queens Park Rangers-Loftus Road"
                d: "Ipswich Town-Portman Road"
            },
            correctAnswer: "a"
        },
    {
        question: "Blackburn Rovers recored the lowest ever finsh by a Premier League title holder. Where did they finish in 1995-96",
            answers: {
                a: "9th",
                b: "15th",
                c: "4th",
                d: "7th"
            },
            correctAnswer: "d"
        },
    {
        question: "In 1996-97 Wimbledon had to play their home games at which stadium?",
            answers: {
                a: "Boleyn Ground",
                b: "Stamford Bridge",
                c: "Roker Park",
                d: "Selhurst Park"
            },
            correctAnswer: "d"
        },
    {
        question: "In 1997-98 the golden boot was shared between 3 players who each scored 18 goals, which player didn't share the golden boot?",
            answers: 
                a: "Andy Cole",
                b: "Chris Sutton",
                c: "Michael Owen",
                d: "Dion Dublin"
            },
            correctAnswer: "a"
        },
    {
        question: "Which team had the longest unbeaten run in the 1998-99 season?",
            answers: {
                a: "West Ham",
                b: "Chelsea",
                c: "Manchester United",
                d: "Arsenal"
            },
            correctAnswer: "b"
        },
    {
        question: 
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: {
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: 
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: 
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    {
        question: 
            answers: {
                a:
                    b:
                c:
                    d:
            },
            correctAnswer:
        },
    }
];

createQuiz();

submitButton.addEventListener('click', showResults)
})();
