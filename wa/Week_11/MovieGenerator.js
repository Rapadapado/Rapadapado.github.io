let triviaBtn = document.querySelector("#js-new-quote").addEventListener('click', newTrivia);

let answerBtn = document.querySelector('#js-tweet').addEventListener('click', newAnswer);

let current = {
    question: "",
    answer: "",
}

const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=caddf17';

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
        displayTrivia(json["Title"]);
        current.question = json["Title"];
        current.answer = json["Plot"];
        console.log(current.question);
        console.log(current.answer);
    } 
    catch(err){
        console.log(err)
        alert('Failed to get new trivia');
    }

    //const axios = require('axios').default;

    /*const options = {method: 'GET', url: 'https://imdb.iamidiotareyoutoo.com/search'};

    try {
        const { data } = await axios.request(options);
        console.log(data);
    } 
    catch (error) {
        console.error(error);
    }*/


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