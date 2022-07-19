const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = deadline.querySelectorAll('h4')
// console.log(items);
const futureDate = new Date(2022,8,26,11,30,0)
// console.log(futureDate);
const year = futureDate.getFullYear()
const month = months[futureDate.getMonth()]
const week = weekdays[futureDate.getDay()]
const day = futureDate.getDate()
const time = futureDate.getHours()
// console.log(day);
giveaway.textContent=`givavey ends on ${week},${day} ${month} ${year},${time}am`
 
const futureTime = futureDate.getTime()
const getRamainingTime=()=>{
const today = new Date().getTime()
const t = futureTime-today

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach((item,index)=>{
    item.innerHTML = format(values[index])
  })
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
const interval = setInterval(getRamainingTime,1000)
