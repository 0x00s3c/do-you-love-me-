const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Function to move the button
const moveButton = () => {
  // Get container dimensions
  const containerRect = questionContainer.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // Calculate max available space so button stays inside the container
  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute"; // Ensure it can move
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
};

// Desktop: Mouse hover
noBtn.addEventListener("mouseover", moveButton);

// Mobile: Touch start
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Prevents accidental clicking/scrolling
  moveButton();
});

// Yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    if (gifResult) gifResult.play();
  }, 3000);
});
