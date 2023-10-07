(function () {
    function createQuiz() {
        const output = [];

        myQuestions.forEach(
            (currentQuestion, questionNumber) => {
                const answers = [];
                for (var letter in currentQuestion.answers) {
                    if (currentQuestion.answers.hasOwnProperty(letter)) {
                        answers.push(
                            `<label>
                         <input type="radio" name="question${questionNumber}" value="${letter}">
                         ${letter} :
                         ${currentQuestion.answers[letter]}
                         </label>`
                        );
                    }
                }

                output.push(
                    `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
                );
            }
        );
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');

        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {

            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            }
            else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        }
        else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    function showMessage() {
        alert(" 1. 31 Questions about each of the 31 years in Premier League History.\n 2. Click either a,b,c or d lick next question to show the next question.\n 3.Once you have answered all the questions and clicked submit click the previous button to see what questions you got correct!");
    }


    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    

    const myQuestions = [
        {
            question: "1. Who won the first ever Premier League Trophy in the 1992-93 season?",
            answers: {
                a: "Manchester United",
                b: "Blackburn Rovers",
                c: "Liverpool",
                d: "Arsenal"
            },
            correctAnswer: "a"
        },
        {
            question: "2. In the season 1993-94 who became the most expensive footballer signed by an English Football team?",
            answers: {
                a: "Andy Townsend",
                b: "Roy Keane",
                c: "Tim Flowers",
                d: "Neil Ruddock"
            },
            correctAnswer: "b"
        },
        {
            question: "3. In the 1994-95 which club had the smallest Stadium?",
            answers: {
                a: "Southampton-The Dell",
                b: "Norwich-Carrow Road",
                c: "Queens Park Rangers-Loftus Road",
                d: "Ipswich Town-Portman Road"
            },
            correctAnswer: "a"
        },
        {
            question: "4. Blackburn Rovers recorded the lowest ever finish by a Premier League title holder. Where did they finish in 1995-96?",
            answers: {
                a: "9th",
                b: "15th",
                c: "4th",
                d: "7th"
            },
            correctAnswer: "d"
        },
        {
            question: "5. In 1996-97 Wimbledon had to play their home games at which stadium?",
            answers: {
                a: "Boleyn Ground",
                b: "Stamford Bridge",
                c: "Roker Park",
                d: "Selhurst Park"
            },
            correctAnswer: "d"
        },
        {
            question: "6. In 1997-98 the golden boot was shared between 3 players who each scored 18 goals, which player didn't share the golden boot?",
            answers: {
                a: "Andy Cole",
                b: "Chris Sutton",
                c: "Michael Owen",
                d: "Dion Dublin"
            },
            correctAnswer: "a"
        },
        {
            question: "7. Which team had the longest unbeaten run in the 1998-99 season?",
            answers: {
                a: "West Ham",
                b: "Chelsea",
                c: "Manchester United",
                d: "Arsenal"
            },
            correctAnswer: "b"
        },
        {
            question: "8. 1999-2000 Alan Shearer scored 5 goals in one game against which team?",
            answers: {
                a: "Sunderland",
                b: "Bradford City",
                c: "Sheffield Wednesday",
                d: "Watford"
            },
            correctAnswer: "c"
        },
        {
            question: "9. Which team finished the highest in the 2000-01 season?",
            answers: {
                a: "Everton",
                b: "Southampton",
                c: "Charlton Athletic",
                d: "Ipswich"
            },
            correctAnswer: "d"
        },
        {
            question: "10. In the 2001-02 season who mad the most yellow cards?",
            answers: {
                a: "Danny Mills",
                b: "Patrick Vieria",
                c: "Paul Ince",
                d: "Robbie Savage"
            },
            correctAnswer: "d"
        },
        {
            question: "11. Which team kept the most clean sheets in the 2002-03 season?",
            answers: {
                a: "Bolton Wanderers",
                b: "Blackburn Rovers",
                c: "Tottenham Hotspur",
                d: "Liverpool"
            },
            correctAnswer: "b"
        },
        {
            question: "12. How many points did Arsenal finish on in their invincible season back in the 2003-04 season?",
            answers: {
                a: "88",
                b: "95",
                c: "90",
                d: "77"
            },
            correctAnswer: "c"
        },
        {
            question: "13. How many clean sheets did Petr Cech keep in his first season as a keeper in 2004-05 season?",
            answers: {
                a: "15",
                b: "19",
                c: "30",
                d: "25"
            },
            correctAnswer: "d"
        },
        {
            question: "14. In the 2005-06 season how many Premier League managers were sacked?",
            answers: {
                a: "3",
                b: "5",
                c: "0",
                d: "7"
            },
            correctAnswer: "a"
        },
        {
            question: "15. Which team won the least amount of games at home in the 2006-07?",
            answers: {
                a: "Wigan Athletic",
                b: "Watford",
                c: "Reading",
                d: "Fulham"
            },
            correctAnswer: "b"
        },
        {
            question: "16. In the 2007-08 season Derby finished the season with one win, who did they beat?",
            answers: {
                a: "Liverpool",
                b: "Manchester City",
                c: "Newcastle",
                d: "Wigan Athletic"
            },
            correctAnswer: "c"
        },
        {
            question: "17. Who scored the first own goal of the 2008-09 season?",
            answers: {
                a: "Steve Sidwell",
                b: "Kenwyne Jones",
                c: "Ryan Giggs",
                d: "Robert Huth"
            },
            correctAnswer: "d"
        },
        {
            question: "18. In the 2009-10 Chelsea failed to score against one team in the Premier League, who was that team?",
            answers: {
                a: "Birmingham",
                b: "Wolves",
                c: "Burnley",
                d: "Everton"
            },
            correctAnswer: "a"
        },
        {
            question: "19. How many teams were up for relegation on the final day of the season in the year 2010-11?",
            answers: {
                a: "5",
                b: "0",
                c: "3",
                d: "2"
            },
            correctAnswer: "a"
        },
        {
            question: "20. Who scored Swansea City's first ever Premier League goal?",
            answers: {
                a: "Scott Sinclair",
                b: "Ashley Williams",
                c: "Gary Monk",
                d: "Nathan Dyer"
            },
            correctAnswer: "a"
        },
        {
            question: "21. How many goals did Michu score in the 2012-13 season?",
            answers: {
                a: "20",
                b: "15",
                c: "7",
                d: "18"
            },
            correctAnswer: "d"
        },
        {
            question: "22. Which team qualified for the Europa League by finishing runners up in the FA Cup Final in 2013-14?",
            answers: {
                a: "Stoke City",
                b: "Hull City",
                c: "Swansea City",
                d: "Southampton"
            },
            correctAnswer: "b"
        },
        {
            question: "23. Who had the most yellow cards in the 2014-15 season?",
            answers: {
                a: "Tom Huddlestone",
                b: "Ashley Cole",
                c: "Lee Cattermole",
                d: "Ryan Bertrand"
            },
            correctAnswer: "c"
        },
        {
            question: "24. How much did Leicester City pay for N'Golo Kante?",
            answers: {
                a: "£5.6 Million",
                b: "£13.7 Million",
                c: "£9.5 Million",
                d: "£400 Thousand"
            },
            correctAnswer: "a"
        },
        {
            question: "25. Who won the young player of the year award in the 2016-17 season?",
            answers: {
                a: "Romelu Lukaku",
                b: "Leroy Sane",
                c: "Dele Ali",
                d: "Michael Keane"
            },
            correctAnswer: "c"
        },
        {
            question: "26. Huddersfield completed their first ever double over which Premier League opponent in the 2017/18?",
            answers: {
                a: "Burnley",
                b: "West Brom",
                c: "Bournemouth",
                d: "Watford"
            },
            correctAnswer: "b"
        },
        {
            question: "27. In 2018-19 the golden boot was shared between 3 players who each scored 22 goals, which player didn't share the golden boot?",
            answers: {
                a: "Aubameyang",
                b: "Mane",
                c: "Son",
                d: "Salah"
            },
            correctAnswer: "c"
        },
        {
            question: "28. What was the first game played after the pandemic break finished?",
            answers: {
                a: "Manchester City vs Arsenal",
                b: "Manchester City vs Manchester Utd",
                c: "Bournemouth vs Fulham",
                d: "Aston Villa vs Sheffield Utd"
            },
            correctAnswer: "d"
        },
        {
            question: "29. Which one of these players did not score a hattrick in the 2020-21 season?",
            answers: {
                a: "Chris Wood",
                b: "Tammy Abraham",
                c: "Gareth Bale",
                d: "Ollie Watkins"
            },
            correctAnswer: "b"
        },
        {
            question: "30. Which one of these players was not in the PFA team of the season for 2021-22?",
            answers: {
                a: "Joao Cancelo",
                b: "Thiago",
                c: "Cristiano Ronaldo",
                d: "Harry Kane"
            },
            correctAnswer: "d"
        },
        {
            question: "31. How many Managerial sackings were there in the 2022-23 season?",
            answers: {
                a: "14",
                b: "10",
                c: "5",
                d: "16"
            },
            correctAnswer: "a"
        },
    ];



    createQuiz();

    const instructionButton = document.getElementById("instruction");
    const previousButton = document.getElementById("previous-question");
    const nextButton = document.getElementById("next-question");
    const refreshButton = document.getElementById("restart");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    const refreshPage = () => {
        location.reload();
    };

    showSlide(currentSlide);

    instructionButton.addEventListener("click", showMessage);
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    refreshButton.addEventListener("click", refreshPage);
})();
