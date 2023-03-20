
const startBtnEl = document.querySelector("button[data-start]");
// console.log(startBtnEl)

const stopBtnEl = document.querySelector("button[data-stop]");
// console.log(stopBtnEl)

const bodyEl = document.querySelector('body');
// console.log(bodyEl)

let timerId = null;

stopBtnEl.disabled = true;


startBtnEl.addEventListener('click', (event)=> {
     timerId = setInterval(()=>{
        bodyEl.style.backgroundColor = getRandomHexColor();
            }, 1000);
            startBtnEl.disabled = true;  
            stopBtnEl.disabled = false;  
})

stopBtnEl.addEventListener('click', (event)=>{
    clearInterval(timerId);
    startBtnEl.disabled = false;
    stopBtnEl.disabled = true;
})

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }