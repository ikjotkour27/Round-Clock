function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
  
    const secondDegrees = (seconds / 60) * 360 + 90;
    const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    const hourDegrees = (hours % 12 / 12) * 360 + (minutes / 60) * 30 + 90;
  
    document.getElementById("second-hand").style.transform = `rotate(${secondDegrees}deg)`;
    document.getElementById("minute-hand").style.transform = `rotate(${minuteDegrees}deg)`;
    document.getElementById("hour-hand").style.transform = `rotate(${hourDegrees}deg)`;
  }
  
  setInterval(updateClock, 1000);
  updateClock(); // Initialize clock immediately
  