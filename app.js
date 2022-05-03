const hourNeedle = document.querySelector('.hour');
const minuteNeedle = document.querySelector('.minute');
const secondNeedle = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.getElementById('date-element');
const toggle = document.querySelector('.toggle');
const daySpan = document.getElementById('day');

const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

toggle.addEventListener('click', (e) => {
   const html = document.querySelector('html');
   if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      e.target.textContent = 'Dark Mode'
   }
   else {
      html.classList.add('dark');
      e.target.textContent = 'Light Mode'
   }
})

function setTime() {
   const currentTime = new Date();
   const month = currentTime.getMonth();
   const dayOfWeek = currentTime.getDay();
   const dayOfMonth = currentTime.getDate();
   const hours = currentTime.getHours();
   const hoursClock = hours % 24;
   const minutesClock = currentTime.getMinutes();
   const secondsClock = currentTime.getSeconds();


   hourNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(hoursClock, 0, 12, 0, 360)}deg)`;
   minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(minutesClock, 0, 60, 0, 360)}deg)`;
   secondNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(secondsClock, 0, 60, 1, 360)}deg)`;

   timeEl.textContent = `${hoursClock}:${minutesClock < 10 ? `0${minutesClock}` : minutesClock}`;
   dateEl.textContent = `${days[dayOfWeek]}, ${months[month]}`;
   daySpan.textContent = dayOfMonth;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers 
const scale = (num, in_min, in_max, out_min, out_max) => {
   return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime();
setInterval(setTime, 1000);
