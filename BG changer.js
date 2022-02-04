const body = document.querySelector('body');
const btn = document.querySelector('#btn');
const h2 = document.querySelector('.container h2');

btn.addEventListener('click', () =>{
    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);
    let colorValue = 'rgb('+random1+","+random2+","+random3+')';
    body.style.background = colorValue;
    h2.innerHTML = colorValue;
});