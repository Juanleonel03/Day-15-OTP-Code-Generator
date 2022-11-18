const input = document.querySelector('#input')
const input2 = document.querySelector('#input2')
const input3 = document.querySelector('#input3')
const input4 = document.querySelector('#input4')
const input5 = document.querySelector('#input5')
const input6 = document.querySelector('#input6')

const button = document.getElementById('button');
const buttonCopy = document.getElementById('copyCode');
const icon = document.querySelector('#copyCode i')
let inputs = document.querySelectorAll('input');

button.addEventListener('click', ()=>{
  icon.classList.replace('bi-clipboard-check', 'bi-clipboard');
  inputs.forEach((item) => item.style.border = '2px solid #55525a');
  inputs.forEach((item) => item.value = Math.floor(Math.random() * 10))
})

buttonCopy.addEventListener('click', ()=>{
  let code = input.value + input2.value + input3.value + input4.value + input5.value + input6.value;
  navigator.clipboard.writeText(code);
  icon.classList.replace('bi-clipboard', 'bi-clipboard-check');
  inputs.forEach((item) => item.style.border = '2px solid rgb(42, 185, 75)');
})

