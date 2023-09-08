const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTime = document.querySelector('[ data-testid="currentUTCTime"]');

console.log(currentDayOfTheWeek)

function updateDate ()  {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = new Date();
    const dayOfWeek = daysOfWeek[currentDay.getDay()];
    const currentTime = currentDay.getUTCMilliseconds();
   
    currentDayOfTheWeek.textContent= dayOfWeek;
    currentUTCTime.textContent=currentTime;
}
updateDate()
setInterval(updateDate, 1000)