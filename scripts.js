// Get the buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

// Array of playful messages for the "No" button
const playfulMessages = [
    "Sure najud ka? 🥺",
    "Consider nlang jud! 🥺",
    "Ampingan lagi taka! 🥹",
    "Wana gahilak nako... 😢",
    "Ma broken nako ani! 💔",
    "Ipa smile lagi taka promise! 😁",
    "Sge najud, please huna hunaa! 🧐",
    "Gabinuang raka ba? 🥲",
    "sge najud naa🥺",
    "Di lagi ka mag mahay nako huhu",
    "kaya taka protektahan",
    "waman koy kwarta pero naa koy heart",
    "sge na Iloveyou HAHAHAHA",
    "Love lagi taka I swear!",
];

// Yes Button Event
yesBtn.addEventListener("click", function() {
    response.textContent = "Yay! I'm so happy! ❤️";
    response.classList.remove("hidden");
});

// No Button Event (random playful message and move button on click)
noBtn.addEventListener("click", function() {
    // Pick a random message from the array
    const randomIndex = Math.floor(Math.random() * playfulMessages.length);
    const randomMessage = playfulMessages[randomIndex];
    
    // Display the random message
    response.textContent = randomMessage;
    response.classList.remove("hidden");
    
    // Move the button to a random position
    moveButton();
});

// Function to move the No button to a random position
function moveButton() {
    // Get the container dimensions
    const container = document.querySelector('.container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Calculate random positions
    const randomX = Math.floor(Math.random() * (containerWidth - noBtn.offsetWidth));
    const randomY = Math.floor(Math.random() * (containerHeight - noBtn.offsetHeight));

    // Set the new position
    noBtn.style.position = "absolute"; // Set position to absolute
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}
