export default function initOperation() {
  const nowDate = new Date();
  const nowDay = nowDate.getDay();
  const nowHour = nowDate.getHours();

  const operation = document.querySelector('[data-week]');
  const weekDays = operation.dataset.week.split(',').map(Number);
  const weekHours = operation.dataset.hour.split(',').map(Number);

  const openDay = weekDays.includes(nowDay);
  const openHour = nowHour >= weekHours[0] && nowHour < weekHours[1];

  if (openDay && openHour) {
    operation.classList.add('open');
  }
  
}
