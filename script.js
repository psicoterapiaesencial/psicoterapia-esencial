
const btn=document.querySelector('.menu-btn');const menu=document.querySelector('.menu');
if(btn&&menu){btn.addEventListener('click',()=>{const open=menu.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));}
document.getElementById('year').textContent=new Date().getFullYear();
