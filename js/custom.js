/** INSERT CUSTOM JS HERE **/

const hamburger = document.querySelector(".navi_hamburger");
const nav = document.querySelector(".navi");
const bg = document.querySelector(".bgBlur");

export default function () {
  hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    bg.classList.toggle("active");
  });

  bg.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    bg.classList.toggle("active");
  });
}

// Get the video popup and the YouTube player element
const videoPopup = document.getElementById('video-popup');
const player = new YT.Player('player', {
  videoId: '5OZ-JOSWx1Q', // Replace with your YouTube video ID
});

// Get the button that opens the video popup
const openButton = document.getElementById('.hero_button');

// Add a click event listener to the button
openButton.addEventListener('click', function() {
  // Display the video popup
  videoPopup.style.display = 'block';

  // Play the video
  player.playVideo();
});
