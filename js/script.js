// Steps: 
// * create variables that link to html divs 
// * create class for questions 
// * Create a couple of quetions 
// * push value of questions and answers to the div 
// * Make a function that checks if the quesiton is right 



//Create an array of objects for the questions 
//quesetion
//answers
//correct answrs 





//Creating Variables that I will need 

console.log("I'm working")

var submitButton = document.querySelector(".submit")
var theQuestion = document.querySelector(".question-box");
var answerBox = document.querySelector(".answer-choices");
var option = document.querySelectorAll("option")
var theQuestion = document.querySelector(".theQuestion")
var score = 0
var questionNumber = 0
var scored = document.querySelector(".scored")


//Including the var for the modal here 
var modal = document.querySelector(".modal")
var span = document.querySelector(".close");

//Correct answer var
var correctAnswer = document.querySelector(".correct-answer-modal")
var carrectSpan = document.querySelector(".close-correct")



class Question {
    constructor(text, choices, answer) {

        this.text = text;
        this.choices = choices;
        this.answer = answer

    }


    correctAnswer(choice) {

        answer = []
        if (this.answer === choices) {
            alert("Go Team Venture!")
        } else {
            alert("DID YOU THINK YOUR PITIFUL GUESSING WOULD BE ENOUGH TO FOOL THE MIGHTY MONARCH?")
        }
    }

}


//Adding some new classes for my questions

const question1 = new Question("Who is 21's best friend at the beginning of the series?", ["Doctor Venture", "24", "The Blue Morpho", "Doctor Girlfriend"], "24")
const question2 = new Question("Who is Billy Quizboy's partner?", ["Brock Sampson", "The Pink Pilgrim", "Sergent Hatred", "Hunter Gathers"], "The Pink Pilgrim")
const question3 = new Question("What is St. Cloud's super power?", ["Frogs with bricks", "Knife and a Bear Costume", "An Exorbitant Amount of Money", "Turns into a Bea"], "An Exorbitant Amount of Money")
const question4 = new Question("Where did Dr. Venture go to college?", ["Harvard", "Yale", "University of Sao Paulo", "State University"], "State University")
const question5 = new Question("Which episode's opening is based off of David Bowe's Space Odyseey", ["Season 7 Ep. 1", "Season 4 Ep.5", "Season 1 Ep.6", "Season 2 Ep.6"], "Season 1 Ep.6")
const question6 = new Question("Who cloned Hank & Dean", ["The Sovereign", "Ben", "Red Bannon", "Baron Werner Ünderbheit"], "Ben")
const question7 = new Question("Who is the Mighty Monarch's father?", ["Blind Rage", "Guild Stranger S-464", "Iggy Pop", "The Blue Morpho"], "The Blue Morpho")
const question8 = new Question("What is the name of Dr. Orpheus' Daughter?", ["Triana", "Lisa Hammer", "Raven", "Tatyana"], "Triana")
const question9 = new Question("Who was Dr. Girlfriend's ex boyfriend?", ["Professor Fantomas", "Hank", "Dr. Venture", "Phantom Limb"], "Phantom Limb")
const question10 = new Question("Who is Hunter Gather's charachter based on?", ["Hunter S Thompson", "Letterkenny", "Ralph Steadman", "Gonzo"], "Hunter S Thompson")
const theEnd = new Question("Thanks for playing", ["Thanks for coming", "Glad you were here", "Text", "Text"], "Thanks for coming")


const questionList = [question1, question2, question3, question4, question5, question6, question7, question8, question9,question10, theEnd]

var questionListLength = questionList.length

// const ventureBrosQuiz = new Quiz(questionList)





console.log(questionList[9])

//Trying to get the text into the html file

function pushText(questionNumber) {
    // option.style.innerText = questionIndex.choices

    theQuestion.innerHTML = questionList[questionNumber].text


    //Trying to create buttons for every choice in the choices array. 

    while (answerBox.firstChild) {
        answerBox.removeChild(answerBox.firstChild)
    }

    questionList[questionNumber].choices.forEach((choice, choiceIndex) => {
        console.log('choice = ' + choice)
        console.log(choiceIndex)


        var newButtons = document.createElement("button")
        var text = document.createTextNode(`${choice}`)
        newButtons.setAttribute("class", choice)
        newButtons.setAttribute("id", "hidden")
        
        var clickedButton = newButtons.appendChild(text)

        document.querySelector(".answer-choices").appendChild(newButtons)

        //Create a click functions that checks the answer 

        newButtons.addEventListener("click", function () { checkIfCorrect(choice) })
      



        
    });
    

}


function checkIfCorrect(choice) {
    
    

    if (choice === questionList[questionNumber].answer) {
        correctAnswer.style.display = "block"

        // span.addEventListener
        
        carrectSpan.onclick = function() {
            correctAnswer.style.display = "none";
          }



        score++
        console.log(score)
        scored.innerHTML = score;
       
        
    } else {
    
        modal.style.display = "block"

        // span.addEventListener
        
        span.onclick = function() {
            modal.style.display = "none";
          }
    }

    console.log("clickedButtons")
    questionNumber++
    pushText(questionNumber)
   
}

function endOfGame(){
    if(questionNumber === 10){
        alert("Thanks for playing")


    }
}





pushText(questionNumber)



