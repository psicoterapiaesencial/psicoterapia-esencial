
const btn=document.querySelector('.menu-btn');
const menu=document.querySelector('.main-menu');
if(btn&&menu){
  btn.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    btn.setAttribute('aria-expanded',String(open));
    btn.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
  });
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    menu.classList.remove('open');btn.setAttribute('aria-expanded','false');
  }));
}
const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();
