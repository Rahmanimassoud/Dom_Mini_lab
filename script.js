const helloTag = document.querySelector('h1');
helloTag.textContent = 'What up';


const btn = document.querySelector('button');
btn.addEventListener('click', (e)=>{
    helloTag.style.display = 'none'
});
const btn2 = document.getElementById('btn1');
btn2.addEventListener('click', (e)=>{
    helloTag.style.display = 'block'
});