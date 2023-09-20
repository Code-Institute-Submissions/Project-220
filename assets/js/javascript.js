const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function createQuiz(){
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}"value="
                    </label>`
                )
            }
        }
    )
}

function showResults(){}

createQuiz();

submitButton.addEventListener('click', showResults)
/* Will add the questions later
const questions = [
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
    }
]
*/
