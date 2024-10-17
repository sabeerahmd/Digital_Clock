function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`; // Corrected template literal syntax
    document.getElementById('clock').textContent = timeString;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);
