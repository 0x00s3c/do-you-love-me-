const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

/**
 * Moves the NO button to a random position anywhere on the screen.
 * Uses 'fixed' positioning to ensure it isn't trapped inside the 
 * container's boundaries.
 */
const moveButton = () => {
  // Calculate random positions based on total window size
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  // Apply fixed positioning so coordinates are relative to the viewport
  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  
  // Optional: Bring it to the very front so it doesn't hide behind the GIF
  noBtn.style.zIndex = "9999";
};

// Event Listeners for the NO button
noBtn.addEventListener("mouseover", moveButton);

noBtn.addEventListener("touchstart", (e) => {
  // PreventDefault stops the mobile browser from triggering a 'click' 
  // or zooming in when the user taps the button.
  e.preventDefault(); 
  moveButton();
});

// YES button functionality
yesBtn.addEventListener("click", () => {
  // Hide the question and show the heart loader
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  // Wait 3 seconds before showing the final result
  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    
    // Play the result video/gif if it exists
    if (gifResult) {
      gifResult.play();
    }
  }, 3000);
});
