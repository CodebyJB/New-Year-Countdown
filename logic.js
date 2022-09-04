const elements = {};
const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

const domMapping = () => {
  elements.days = document.getElementById("days");
  elements.hours = document.getElementById("hours");
  elements.minutes = document.getElementById("minutes");
  elements.seconds = document.getElementById("seconds");
  elements.year = document.createElement("p");
  elements.year.classList.add("year");
  elements.cdWindow = document.querySelector(".cd_window");
  elements.cdWindow.append(elements.year);
};

const countdownUpdate = () => {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  elements.days.innerHTML = d;
  elements.hours.innerHTML = h < 10 ? "0" + h : h;
  elements.minutes.innerHTML = m < 10 ? "0" + m : m;
  elements.seconds.innerHTML = s < 10 ? "0" + s : s;
  elements.year.innerHTML = currentYear + 1;
};

const init = () => {
  domMapping();
  setInterval(countdownUpdate, 1000);
};

init();
