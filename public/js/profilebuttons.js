const newFormHandler = async (event) => {
  event.preventDefault();
  //Defining aspects of the form as separate variables
  const title = document.querySelector('.recipe-title').value.trim();
  // DOUBLE CHECK IMAGE FILE TYPE
  //   const imageEl = document.querySelector('#upload-point').value.trim();
  const preptime = document.querySelector('.prep-time').value.trim();
  const cooktime = document.querySelector('.cook-time').value.trim();
  const ingredients = document.querySelector('.ingredients').value.trim();
  const difficulty = document.querySelector('.difficulty').value.trim();
  const step1 = document.querySelector('.step1').value.trim();
  const step2 = document.querySelector('.step2').value.trim();
  const step3 = document.querySelector('.step3').value.trim();
  const step4 = document.querySelector('.step4').value.trim();
  const step5 = document.querySelector('.step5').value.trim();
  const step6 = document.querySelector('.step6').value.trim();
  
  // Add post 
  // if (titleEl, imageEl, prepTimeEl, cookTimeEl, ingredientsEl, difficultyEl, step1El, step2El, step3El, step4El, step5El && step6El) 
  // {
  console.log('posting')
  console.log(title, preptime, cooktime, ingredients, difficulty, step1, step2, step3, step4, step5)
  console.log(JSON.stringify(title, preptime, cooktime, ingredients, difficulty, step1, step2, step3, step4, step5, step6) )
  const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        preptime,
        cooktime,
        ingredients,
        difficulty,
        step1,
        step2,
        step3,
        step4,
        step5,
        step6
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
 
  
  if (response.ok) {
     document.location.replace('/profile');
      console.log(response);
  } else {
      alert('Failed to create blog post');
  }
  // }
};


const searchHandler = async (event) => {
  event.preventDefault();
  const searchInput = document.querySelector('.Title-search input');
  const search = searchInput.value.toLowerCase();
  console.log(search);

  const response = await fetch(`/api/recipes/search`, {
    method: 'POST',
    body: JSON.stringify({
      search: search
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
   // document.location.replace('/profile');
    console.log(response);
} else {
  console.log(response);
    alert('Error');
}
}





document
.querySelector('.recipe-form')
.addEventListener('submit', newFormHandler);
console.log('check')

document
.querySelector('.search-button')
.addEventListener('click', searchHandler);
console.log('check')
