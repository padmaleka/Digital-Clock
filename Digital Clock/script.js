function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // '0' should be '12'

    // Pad minutes and seconds with leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').innerText = timeString;

    // Update date
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const dateString = `${dayName}, ${monthName} ${now.getDate()}, ${now.getFullYear()}`;
    document.getElementById('date').innerText = dateString;
}

// Dark/Light mode toggle
const toggleSwitch = document.getElementById('toggle-theme'); // Correct ID
toggleSwitch.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
});

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initialize immediately
