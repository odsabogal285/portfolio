$(document).ready(function(){
    $('#btn-trebol').on('click', function(e){
       const info_experence = document.querySelector('.info-experence');
       const item_trebol = document.querySelector('.item-trebol');
       const item_kubilab = document.querySelector('.item-kubilabs');
       const item_avicola = document.querySelector('.item-avicola');

       $('#title-experence').html('Desarrollador Backend');
       $('#date-experence').html('Septiembre 2021 - Mayo 2022');
       $('#first-experence').text(`Desarrollo un software contable en el lenguaje Node.js.`);
       $('#second-experence').text(`Implementando del framework Express.js con el patrón de diseño de enrutamiento.`);
       $('#third-experence').text(`Diseño y construcción de base de datos relacional en PostgreSQL.`);
       $('#four-experence').show();
       $('#four-experence').text(`Validación de pruebas unitarias.`);

       info_experence.classList.add('animate__animated', 'animate__bounceIn');
       item_trebol.classList.remove('item-default');
       item_trebol.classList.add('item-color');
       item_kubilab.classList.add('item-default');
       item_avicola.classList.add('item-default');
       
       setTimeout(() => {
        info_experence.classList.remove('animate__animated', 'animate__bounceIn');
       }, 300);
    });

    $('#btn-kubilabs').on('click', function(e) {
        const info_experence = document.querySelector('.info-experence');
        const item_kubilab = document.querySelector('.item-kubilabs');
        const item_trebol = document.querySelector('.item-trebol');
        const item_avicola = document.querySelector('.item-avicola');

        $('#title-experence').html('Desarrollador web');
        $('#date-experence').html('Junio 2022 - Actualidad');
        $('#first-experence').text(`Desarrollo y mantenimiento de un sistema CRM manejando lenguajes como PHP y Javascript, siguiendo el patrón vista controlador.`);
        $('#second-experence').text(`Utilización Framework Laravel gestionando peticiones API REST de diferentes aplicaciones moviles que se manejan en el entorno.`);
        $('#third-experence').text(`Mantenimiento a base de datos MySQL.`);
        $('#four-experence').show();
        $('#four-experence').text(`Apoyo en la aceptación, publicación y despliegue de repositorios, por medio de Pull Request.`);

        info_experence.classList.add('animate__animated', 'animate__bounceIn');
        item_kubilab.classList.remove('item-default');
        item_kubilab.classList.add('item-color');
        item_trebol.classList.add('item-default');
        item_avicola.classList.add('item-default');

        setTimeout(() => {
            info_experence.classList.remove('animate__animated', 'animate__bounceIn');
           }, 300);
     });

     $('#btn-avicula').on('click', function(e) {
        const info_experence = document.querySelector('.info-experence');
        const item_kubilab = document.querySelector('.item-kubilabs');
        const item_trebol = document.querySelector('.item-trebol');
        const item_avicola = document.querySelector('.item-avicola');

        $('#title-experence').html('Desarrollador auxiliar');
        $('#date-experence').html('Febrero 2021 - Julio 2021');
        $('#first-experence').text(` Desarrollo de un software de gestión avícola denominado Chicken Little Seller, siguiendo el patron MVC en el lenguaje de JAVA SE con el framework Spring Boot.`);
        $('#second-experence').text(`Gestión de base de datos en MySQL.`);
        $('#third-experence').text(`Realización pruebas unitarias.`);
        $('#four-experence').hide();

        info_experence.classList.add('animate__animated', 'animate__bounceIn');
        item_avicola.classList.remove('item-default');
        item_avicola.classList.add('item-color');
        item_trebol.classList.add('item-default');
        item_kubilab.classList.add('item-default');

        setTimeout(() => {
            info_experence.classList.remove('animate__animated', 'animate__bounceIn');
           }, 300);
     });
});