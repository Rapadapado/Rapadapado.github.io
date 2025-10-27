
let triviaBtn = document.querySelector("#js-new-quote").addEventListener('click', newTrivia);

let answerBtn = document.querySelector('#js-tweet').addEventListener('click', newAnswer);

let current = {
    question: "",
    answer: "",
}

const apiUrl = 'https://quoteapi.pythonanywhere.com/random';

/*
fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
*/

async function newTrivia(){
    //console.log("Success");
/*
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
*/
    
    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        //console.log(json);
        displayTrivia(json["quote"]);
        current.question = json["quote"];
        current.answer = json["author"];
        console.log(current.question);
        console.log(current.answer);
    } 
    catch(err){
        console.log(err)
        alert('Failed to get new trivia');
    }


}

function displayTrivia(question){
    const questionText = document.querySelector('#js-quote-text');
    const answerText = document.querySelector("#js-answer-text");

    questionText.textContent = question;
    answerText.textContent = "";
}

function newAnswer(){
    //console.log("Success == answer!")

    const answerText = document.querySelector("#js-answer-text");
    answerText.textContent = current.answer;
}

newTrivia();