// const Handlebars = require('handlebars');
// const formSubmitEL = document.querySelector('#form-submit');

// formSubmitEL.addEventListener('click', function (event) {
//     // sendtoDB();
//     //Defining aspects of the form as separate variables
//     const titleEl = document.querySelector('#title');
//     // DOUBLE CHECK IMAGE FILE TYPE
//     const imageEl = document.querySelector('#upload-point');
//     const prepTimeEl = document.querySelector('#prep-time');
//     const cookTimeEl = document.querySelector('#cook-time');
//     const ingredientsEl = document.querySelector('#ingredients');
//     const difficultyEl = document.querySelector('#difficulty');
//     const step1El = document.querySelector('#step1');
//     const step2El = document.querySelector('#step2');
//     const step3El = document.querySelector('#step3');
//     const step4El = document.querySelector('#step4');
//     const step5El = document.querySelector('#step5');
//     const step6El = document.querySelector('#step6');

//    // Add post 
//    if (title && content) {
//     console.log('posting')
//   const response = await fetch(`/api/post`, {
//     method: 'POST',
//     body: JSON.stringify({title, content}),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   console.log(await response.json());
//   console.log(title, content )

//   if (response.ok) {
//     document.location.replace('/dashboard');
//   } else {
//     alert('Failed to create blog post');
//   }
// }
// });


const newFormHandler = async (event) => {
    event.preventDefault();
      //Defining aspects of the form as separate variables
      const titleEl = document.querySelector('#title');
      // DOUBLE CHECK IMAGE FILE TYPE
      const imageEl = document.querySelector('#upload-point').value.trim();
      const prepTimeEl = document.querySelector('#prep-time').value.trim();
      const cookTimeEl = document.querySelector('#cook-time').value.trim();
      const ingredientsEl = document.querySelector('#ingredients').value.trim();
      const difficultyEl = document.querySelector('#difficulty').value.trim();
      const step1El = document.querySelector('#step1').value.trim();
      const step2El = document.querySelector('#step2').value.trim();
      const step3El = document.querySelector('#step3').value.trim();
      const step4El = document.querySelector('#step4').value.trim();
      const step5El = document.querySelector('#step5').value.trim();
      const step6El = document.querySelector('#step6').value.trim();

    // Add post 
    if (titleEl, imageEl, prepTimeEl, cookTimeEl, ingredientsEl, difficultyEl, step1El, step2El, step3El, step4El, step5El && step6El) {
        console.log('posting')
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify(titleEl, imageEl, prepTimeEl, cookTimeEl, ingredientsEl, difficultyEl, step1El, step2El, step3El, step4El, step5El && step6El),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(await response.json());
      console.log(title, content )

      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create blog post');
      }
    }
  };

  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
    console.log('check')


function sendtoDB() {

    //fetch request to API endpoint
    //post request to routes under the API file
    //the route(CONTROLLER/SQL) will take the data that its passed to the DB
};
