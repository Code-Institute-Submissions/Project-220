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
    
    let numCorrect = 0;
    
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
                a: "Southampton-The Dell",
                b: "Norwich-Carrow Road",
                c: "Queens Park Rangers-Loftus Road",
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
            answers: {
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
        question: "1999-2000 Alan Sherarer scored 5 goals in one game against which team?",
            answers: {
                a: "Sunderland",
                b: "Bradford City",
                c: "Sheffield Wednesday",
                d: "Watford"
            },
            correctAnswer: "c"
        },
    {
        question: "Which team finished the highest in the 2000-01 season?",
            answers: {
                a: "Everton",
                b: "Southampton",
                c: "Charlton Athletic",
                d: "Ipswich"
            },
            correctAnswer: "d"
        },
    {
        question: "In the 2001-02 season who mad the most yellow cards?",
        answers: {
            a: "Danny Mills",
            b: "Patrick Vieria",
            c: "Paul Ince",
            d: "Robbie Savage"
        },
        correctAnswer: "d"
    },
        {
            question: "Which team kept the most clean sheets in the 2002-03 season?",
                answers: {
            a: "Bolton Wanderers",
            b: "Blackburn Rovers",
            c: "Tottenham Hotspur",
            d: "Liverpool"
        },
        correctAnswer: "b"
    },
        {
            question: "How many points did Arsenal finish on in their invincible season",
                answers: {
            a: "88",
            b: "95",
            c: "90",
            d: "77"
        },
        correctAnswer: "c" 
    },
    {
            question: "How many points did Arsenal finish on in their invincible season",
                answers: {
            a: "88",
            b: "95",
            c: "90",
            d: "77"
        },
        correctAnswer: "c"
    },
    {
        question: "How many clean sheets did Petr Cech keep in his first season as a keeper?",
        answers: {
            a: "15",
            b: "19",
            c: "30",
            d: "25"
        },
        correctAnswer: "d"
    },
    {
        question: "In the 2005-06 season how many Premier League managers were sacked?",
        answers: {
            a: "3",
            b: "5",
            c: "0",
            d: "7"
        },
        correctAnswer: "a" 
    },
        {
            question: "Which team won the least amount of games at home in the 2006-07?",
            answers: {
            a: "Wigan Athletic",
            b: "Watford",
            c: "Reading",
            d: "Fulham"
        },
        correctAnswer: "b"
    },
    {
            question: "In the 2007-08 season Derby finished the season with one win, who did they beat?",
            answers: {
            a: "Liverpool",
            b: "Manchester City",
            c: "Newcastle",
            d: "Wigan Athletic"
        },
        correctAnswer: "c"
    },
    {
            question: "Who scored the first own goal of the 2008-09 season?",
            answers: {
            a: "Steve Sidwell",
            b: "Kenwyne Jones",
            c: "Ryan Giggs",
            d: "Robert Huth"
        },
        correctAnswer: "d"
    },
    {
            question: "In the 2009-10 Chelsea failed to score against one team in the Premier League, who was that team?",
            answers: {
            a: "Birmingham",
            b: "Wolves",
            c: "Burnley",
            d: "Everton"
        },
        correctAnswer: "a"
    },
    {
            question: "How many teams were up for relegation on the final day of the season in the year 2010-11?",
            answers: {
            a: "5",
            b: "0",
            c: "3",
            d: "2"
        },
        correctAnswer: "a"
    },
    {
            question: "Who scored Swanesa City's first ever Premier League goal?",
            answers: {
            a: "Scott Sinclair",
            b: "Ashley Williams",
            c: "Gary Monk",
            d: "Nathan Dyer"
        },
        correctAnswer: "a"
    },
     {
            question: "How many goals did Michu score in the 2012-13 season?",
            answers: {
            a: "20",
            b: "15",
            c: "7",
            d: "18"
        },
        correctAnswer: "d"
    },
     {
            question: "Which team qualified for the Europa League by finsihing runners up in the FA Cup Final in 2013-14?",
            answers: {
            a: "Stoke City",
            b: "Hull City",
            c: "Swansea City",
            d: "Southampton"
        },
        correctAnswer: "b"
    },
     {
            question: "Who had the most yellow cards in the 2014-15 season?",
            answers: {
            a: "Tom Huddlestone",
            b: "Ashley Cole",
            c: "Lee Cattermole",
            d: "Ryan Bertand"
        },
        correctAnswer: "c"
    },
     {
            question: "How much did Leicester City pay for N'Golo Kante?",
            answers: {
            a: "£5.6 Million",
            b: "£13.7 Million",
            c: "£9.5 Million",
            d: "£400 Thousand"
        },
        correctAnswer: "a"
    },
     {
            question: "Who won the young player of the year award in the 2016-17 season?",
            answers: {
            a: "Romleu Lukaku",
            b: "Leroy Sane",
            c: "Dele Ali",
            d: "Michael Keane"
        },
        correctAnswer: "c"
    },
     {
            question: "Huddersfield completed their first ever double over which Premier League opponent in the 2017/18?",
            answers: {
            a: "Burnley",
            b: "West Brom",
            c: "Bournemouth",
            d: "Watford"
        },
        correctAnswer: "b"
    },
    {
            question: "In 2018-19 the golden boot was shared between 3 players who each scored 22 goals, which player didn't share the golden boot?",
            answers: {
            a: "Aubameyang",
            b: "Mane",
            c: "Son",
            d: "Salah"
        },
        correctAnswer: "c"
    },
    {
            question: "In 2018-19 the golden boot was shared between 3 players who each scored 22 goals, which player didn't share the golden boot?",
            answers: {
            a: "Aubameyang",
            b: "Mane",
            c: "Son",
            d: "Salah"
        },
        correctAnswer: "c"
    },
];
    
];

createQuiz();

submitButton.addEventListener('click', showResults)
})();
