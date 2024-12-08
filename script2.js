// JavaScript - Infinite Notification display
const messages = [
    "My name is Bharat Sharma",
    "I'm a Computer Science Engineer",
    "I'm a Developer",
    "I'm an Innovator",
    "I'm a Researcher"
];

const notification = document.getElementById('notification');
let messageIndex = 0;

// Function to display each message
function showMessage() {
    notification.textContent = messages[messageIndex]; // Display the current message
    notification.classList.add('active'); // Make the notification visible

    // After 3 seconds, hide the notification
    setTimeout(() => {
        notification.classList.remove('active');
    }, 3000); // Message visible for 3 seconds

    // Move to the next message in the array
    messageIndex++;
    if (messageIndex >= messages.length) {
        messageIndex = 0; // If we've reached the end of the array, loop back to the beginning
    }
}

// Start the interval to repeat the notifications
setInterval(showMessage, 4000); // Show a new message every 4 seconds (3 seconds visible + 1 second wait)

