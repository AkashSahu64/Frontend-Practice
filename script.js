// Set the event date and time
const eventDate = new Date("2023-07-01T12:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(() => {
  // Get today's date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const remainingTime = eventDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").innerText = formatTime(days);
  document.getElementById("hours").innerText = formatTime(hours);
  document.getElementById("minutes").innerText = formatTime(minutes);
  document.getElementById("seconds").innerText = formatTime(seconds);

  // If the countdown ends, display a message
  if (remainingTime < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "<h2>Event has started!</h2>";
  }
}, 1000);

// Add leading zero to single-digit numbers
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
