const imagenes = document.getElementsByClassName('weapons_category');
const row1 = document.getElementById('row1');
const row2 = document.getElementById('row2');
const sidebar = document.getElementById('sidebar');
const sidebarImages = document.getElementsByClassName('weapons_image_sidebar');
let articlesWeapons = document.querySelectorAll('article');
let previousInfo ='';
let newInfo='';
function esconderSecciones(id_imagen, id_info)
{
    //escondiendo la informacion anterior
    for(let i = 0; i < articlesWeapons.length; i++)
    {
        console.log(articlesWeapons[i]);
        articlesWeapons[i].classList.remove('weapons_info');
        articlesWeapons[i].classList.add('esconder');
    }
    console.log(id_info);
    document.getElementById(id_info).classList.remove('esconder');
    //Escondiendo imagenes
    for (let j = 0; j < imagenes.length; j++)
    {
        imagenes[j].style.display = 'none';
    }
    //Mostrando la imagen seleccionada
    document.getElementById(id_imagen).style.display = 'block';
    //Ajustando los estilos de la imagen
    document.getElementById(id_imagen).style.width = '50%';  
    document.getElementById(id_imagen).style.height = '250px';
    //Mostrando la informacion correspondiente
    document.getElementById(id_info).classList.remove('esconder');
    document.getElementById(id_info).classList.add('weapons_info');
    //Quitando estilos que molestan
    row1.classList.remove('weapons_row');
    row2.classList.remove('weapons_row');
    document.getElementById('weapons').classList.add('weapons_container')

    mostrarSidebar(`${id_imagen}_sidebar`);

}

function mostrarSidebar(id_imagen)
{
    sidebar.classList.remove('esconder');
    sidebar.style.display = 'flex';
    for (let i = 0; i < sidebarImages.length; i++)
    {
        sidebarImages[i].classList.remove('esconder');
    }
    document.getElementById(id_imagen).classList.add('esconder');
}
