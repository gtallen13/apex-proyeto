
const helmets_menu = document.getElementsByClassName('helmets_menu');
const evos_menu = document.getElementsByClassName('evos_menu');
const knockdown_menu = document.getElementsByClassName('knockdowns_menu');
const backpacks_menu = document.getElementsByClassName('backpacks_menu');
//Helmets
for (let i = 0; i < helmets_menu.length; i++)
{
    helmets_menu[i].addEventListener('click', function(e)
    {
        const idHelmets = e.currentTarget.getAttribute('data-helmets');
        const table_helmets = document.getElementsByClassName('table_helmets');
        for (let j = 0; j < table_helmets.length; j++)
        {
            table_helmets[j].classList.add('esconder');
        }
        for(let k = 0; k < helmets_menu.length; k++)
        {
            helmets_menu[k].classList.remove('selected_option');
        }
        document.getElementById(idHelmets).classList.remove('esconder');
        document.getElementById(`${idHelmets}_menu`).classList.add('selected_option');
    })
}
//Evos
for (let i = 0; i < evos_menu.length; i++)
{
    evos_menu[i].addEventListener('click', function(e)
    {
        e.preventDefault();    
        const idEvos = e.currentTarget.getAttribute('data-evos');
        const table_evos = document.getElementsByClassName('table_evos');
        for (let j = 0; j < table_evos.length; j++)
        {
            table_evos[j].classList.add('esconder');
        }
        for(let k = 0; k < helmets_menu.length; k++)
        {
            evos_menu[k].classList.remove('selected_option');
        }
        document.getElementById(idEvos).classList.remove('esconder');
        document.getElementById(`${idEvos}_menu`).classList.add('selected_option');
    })
}

//Knockdown Shield

for (let i = 0; i < knockdown_menu.length; i++ )
{
    knockdown_menu[i].addEventListener('click',function(e)
    {
        e.preventDefault();
        const idKnockdown = e.currentTarget.getAttribute('data-knockdowns');
        const table_knockdown = document.getElementsByClassName('table_knockdowns');
        for (let j = 0; j < table_knockdown.length; j++)
        {
            table_knockdown[j].classList.add('esconder');
        }
        for(let k = 0; k < helmets_menu.length; k++)
        {
            knockdown_menu[k].classList.remove('selected_option');
        }
        document.getElementById(idKnockdown).classList.remove('esconder');
        document.getElementById(`${idKnockdown}_menu`).classList.add('selected_option');
    })
}

//Backpack
for (let i = 0; i < backpacks_menu.length; i++)
{    
    
    backpacks_menu[i].addEventListener('click', function(e)
    {        
        e.preventDefault();
        const idBackpack = e.currentTarget.getAttribute('data-backpacks');
        const table_backpacks = document.getElementsByClassName('table_backpacks');
        for(let j = 0; j < table_backpacks.length; j++)
        {
            table_backpacks[j].classList.add('esconder');
        }
        for(let k = 0; k < helmets_menu.length; k++)
        {
            backpacks_menu[k].classList.remove('selected_option');
        }
        document.getElementById(idBackpack).classList.remove('esconder');
        document.getElementById(`${idBackpack}_menu`).classList.add('selected_option');
    });
}

