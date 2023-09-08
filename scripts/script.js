const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentTime = document.querySelector('[ data-testid="currentUTCTime"]');

console.log(currentDayOfTheWeek)

function updateDate ()  {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = new Date();
    const dayOfWeek = daysOfWeek[currentDay.getDay()];

   
    currentDayOfTheWeek.textContent= dayOfWeek;
    
}
updateDate()