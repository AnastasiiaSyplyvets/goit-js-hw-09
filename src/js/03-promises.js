// all modules
import Notiflix from 'notiflix';

// one by one
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';

// Elements found

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('[name="delay"]');
const delayStepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');
const submitBtnEl = document.querySelector('button');

// console.log(amountEl)


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;


  //   // Fulfill
 const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
 if(shouldResolve) {

  resolve({position, delay})
 }
 else {
  //   // Reject
 reject({position, delay})
  }
}, delay)
 })
return promise;
}


formEl.addEventListener('submit', (event)=> {
event.preventDefault();




let delayValue = Number(delayStepEl.value);

const amountValue = Number(amountEl.value);

for (let i = 1; i <= amountValue; i++) {
  createPromise(i, delayValue)
    .then(({ position, delay }) => {
      // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delayValue += Number(delayEl.value);
}



console.log('submitted');
  
})

