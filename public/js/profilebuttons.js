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
  } else {
      alert('Failed to create blog post');
  }
};


const searchHandler = async (event) => {
  event.preventDefault();
  const searchInput = document.querySelector('.Title-search input');
  const search = searchInput.value.toLowerCase();

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
} else {
    alert('Error');
}
}





document
.querySelector('.recipe-form')
.addEventListener('submit', newFormHandler);

document
.querySelector('.search-button')
.addEventListener('click', searchHandler);
