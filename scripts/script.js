


const currentDayOfTheWeek= document.querySelector('[data-testid="currentDayOfTheWeek"]')
const currentUTCTime= document.querySelector('[data-testid="currentUTCTime"]')

function updateDateTime() {
    const current = new Date();
    const currentDay = current.getDay();
    const currentMilliseconds = current.getUTCMilliseconds();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    currentUTCTime.textContent = Date.now();
    currentDayOfTheWeek.textContent = daysOfWeek[currentDay];
  }
  updateDateTime();
  setInterval(updateDateTime, 100);