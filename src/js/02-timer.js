import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

// / Кнопка Старт

const startBtnEl = document.querySelector('button[data-start]');
// console.log(startBtnEl)

// Нашли дни

const daysEl = document.querySelector('span[data-days]');

// Години
const hoursEl = document.querySelector('span[data-hours]');

// Хвилини

const minutesEl = document.querySelector('span[data-minutes]');

// Секунди
const secondsEl = document.querySelector('span[data-seconds]');


// Инициализация библиотеки

 let timerId = null;

 const currentDate = new Date();

 console.log(currentDate)

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
   
  // Різниця часу 

      let timeDiff = Date.parse(selectedDates[0]) - Date.parse(currentDate);

      // console.log(timeDiff)

      if(selectedDates[0] < currentDate) {
        window.alert("Please choose a date in the future");
        
      }
      else{
      startBtnEl.disabled = false;


      startBtnEl.addEventListener('click', (event)=> {
        
       

        timerId = setInterval(() => {

          timeDiff -= 1000;

    console.log(convertMs(timeDiff));


    const time = convertMs(timeDiff);
    daysEl.textContent = addLeadingZero(time.days);
    hoursEl.textContent = addLeadingZero( time.hours);
    // time.hours.value < 10 ? '0' + time.hours :  time.hours;
    minutesEl.textContent = addLeadingZero(time.minutes);
    // time.minutes.value < 10 ? '0' + time.minutes : time.minutes;
    secondsEl.textContent = addLeadingZero(time.seconds);
    // time.seconds.value < 10 ? '0' + time.seconds : time.seconds;


        // console.log(timeDifference);

        if(timeDiff <= 0) {
          clearInterval(timerId);

          return;
        }
       }, 1000);


      
      })
    }
    },
  };


  
// options.onClose(selectedDates) 
  
// Неактивная кнопка

  startBtnEl.disabled = true;


  const dateTimePickerEl = document.querySelector("#datetime-picker");
//   console.log(dateTimePickerEl);

  flatpickr(dateTimePickerEl, options);




// Функция подсчета времени
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// Функция добавления 0

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}