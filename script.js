// const feedbackButton = document.getElementById('feedback-button');
// const nameInput = document.querySelector('input[type="text"]');
// const emailInput = document.querySelector('input[type="email"]');
// const feedbackTextarea = document.querySelector('textarea');
// const feedbackMessage = document.getElementById('feedback-message');

// feedbackButton.addEventListener('click', function() {
//   nameInput.value = ''; // Clear the name input
//   emailInput.value = ''; // Clear the email input
//   feedbackTextarea.value = ''; // Clear the textarea
//   feedbackMessage.textContent = 'Your feedback has been submitted!'; // Display the message
// });


const flagImages = document.querySelectorAll('.flag img');
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  flagImages.forEach((image) => {
    const imagePosition = image.offsetTop;
    if (scrollPosition > imagePosition - window.innerHeight / 2) {
      image.classList.add('show');
    }
  });
});



// slideshow background stuff


// Array of image paths

// console.log(foodimgs[0]);
// var imageIndex = 0;
// function changeImage() {

//   var foodimgs = ["food1.jpeg", "food2.jpeg", "food3.jpeg"];
//   // Get the image element
//   console.log("clicked")
//   var imageI = [0, 1, 2]
//   var image = document.getElementById("foodimg");
//   var imageIndex = imageI[Math.floor(Math.random() * imageI.length)]; // Cycle through the images
//     image.src = foodimgs[imageIndex];
//     image.alt = "food " + (imageIndex + 1);

//   }

// var imageIndex = 0;
// var foodimgs = ["food1.jpeg", "food2.jpeg", "food3.jpeg"];

// function changeImage() {

//   var foodimgs = ["food1.jpeg", "food2.jpeg", "food3.jpeg"];
//   // Get the image element
//   console.log("clicked")
//   var image = document.getElementById("foodimg");
//   var imageIndex = imageIndex+1;
//   if (imageIndex>=foodimg.length)
//     imageIndex=0;// Cycle through the images
//   image.src = foodimgs[imageIndex];
//   image.alt = "food " + (imageIndex + 1);

//   }






// import "./styles.css";
//  let index = 0;
// displayImages();
// function displayImages() {
//   let i;
//   const images = document.getElementsByClassName("image");
//   for (i = 0; i < images.length; i++) {
//     images[i].style.display = "none";
//   }
//   index++;
//   if (index > images.length) {
//     index = 1;
//   }
//   images[index-1].style.display = "block";
//   setTimeout(displayImages, 2000); 
// }



