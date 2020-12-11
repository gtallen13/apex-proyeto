const menu_btn = document.getElementById('menu_btn');
const menuUL = document.querySelector('ul');
const menu = document.querySelector('nav');

menu_btn.addEventListener('click', function(e)
{
    menuUL.classList.toggle('show');
    menu.classList.toggle('opaque');
});