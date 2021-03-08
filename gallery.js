/*eslint-disable*/
// const current = document.querySelector('#current');
// const thumbnails = document.querySelector('.imgthumbnail');
// const img = document.querySelectorAll('.imgthumbnail img');
// const opacity = 0.6;

// // imgthumbnail.forEach(img => 
// //     img.addEventListener('click', function(event) {
// //         current.src = event.target.src;
// //     })
// // );

// // Set first img opacity
// img[0].style.opacity = opacity;

// thumbnails.addEventListener('click', imgClick);

// function imgClick(e) {
//   // Reset the opacity
//   img.forEach(img => (img.style.opacity = 1));

//   // Change current image to src of clicked image
//   current.src = e.target.src;

//   // Add fade in class
//   current.classList.add('fade-in');

//   // Remove fade-in class after .5 seconds
//   setTimeout(() => current.classList.remove('fade-in'), 500);

//   // Change the opacity to opacity var
//   e.target.style.opacity = opacity;
// }

$(document).ready(function() {
  $('.pgwSlideshow').pgwSlideshow();
  displayControls: true;
});
