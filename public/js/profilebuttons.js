const Handlebars = require('handlebars');
const formSubmitEL = document.querySelector('#form-submit');

formSubmitEL.addEventListener('click', function (event) {
    sendtoDB();
});


function sendtoDB() {
    //Defining aspects of the form as separate variables
const titleEl = document.querySelector('#title');
// DOUBLE CHECK IMAGE FILE TYPE
const imageEl = document.querySelector('#upload-point');
const prepTimeEl = document.querySelector('#prep-time');
const cookTimeEl = document.querySelector('#cook-time');
const ingredientsEl = document.querySelector('#ingredients');
const difficultyEl = document.querySelector('#difficulty');
const step1El = document.querySelector('#step1');
const step2El = document.querySelector('#step2');
const step3El = document.querySelector('#step3');
const step4El = document.querySelector('#step4');
const step5El = document.querySelector('#step5');
const step6El = document.querySelector('#step6');
    //fetch request to API endpoint
    //post request to routes under the API file
    //the route(CONTROLLER/SQL) will take the data that its passed to the DB
};