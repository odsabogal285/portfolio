$(document).ready(function(){
    $('#btn-trebol').on('click', function(e){
       const info_experence = document.querySelector('.info-experence');
       const item_trebol = document.querySelector('.item-trebol');
       const item_kubilab = document.querySelector('.item-kubilabs');

       $('#title-experence').html('Ingeniero @trebol');
       $('#date-experence').html('Septiembre - 2021 - Mayo - 2022');
       $('#description-experence').text(
        `Desarrollar un software contable en el lenguaje Node.js,
       implementando el framework Express.js con el patrón de
       diseño de enrutamiento, al igual que el diseño y construcción
       de base de datos relacional en PostgreSQL con validación de
       pruebas unitarias, aplicando el marco ágil de trabajo ágil
       SCRUM`);

       info_experence.classList.add('animate__animated', 'animate__bounceIn');
       item_trebol.classList.remove('item-default');
       item_trebol.classList.add('item-color');
       item_kubilab.classList.add('item-default');
       setTimeout(() => {
        info_experence.classList.remove('animate__animated', 'animate__bounceIn');
       }, 300);
    });

    $('#btn-kubilabs').on('click', function(e) {
        const info_experence = document.querySelector('.info-experence');
        const item_kubilab = document.querySelector('.item-kubilabs');
        const item_trebol = document.querySelector('.item-trebol');

        $('#title-experence').html('Ingeniero @Kubilabs');
        $('#date-experence').html('Junio 2022 - Actualidad');
        $('#description-experence').text(
         `Desarrollo y mantenimiento de un sistema CRM manejando
         lenguajes como PHP y Javascript, siguiendo el patrón vista
         controlador, a través del Framework Laravel gestionando
         peticiones API REST de diferentes aplicaciones moviles que
         se manejan en el entorno, mantenimiento a base de datos
         MySQL y apoyo en la aceptación, publicación y despliegue de
         repositorios, por medio de Pull Request.`);

        info_experence.classList.add('animate__animated', 'animate__bounceIn');
        item_kubilab.classList.remove('item-default');
        item_kubilab.classList.add('item-color');
        item_trebol.classList.add('item-default');
        setTimeout(() => {
            info_experence.classList.remove('animate__animated', 'animate__bounceIn');
           }, 300);
     });
});