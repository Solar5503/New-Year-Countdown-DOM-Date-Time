const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24; //count of hours remaining in the day
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerText = `${d}`.padStart(2, 0);
  hours.innerText = `${h}`.padStart(2, 0);
  minutes.innerText = `${m}`.padStart(2, 0);
  seconds.innerText = `${s}`.padStart(2, 0);
}

setInterval(updateCountdown, 1000);
