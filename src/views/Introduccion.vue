<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-down") Apreciado aprendiz, bienvenido a este componente formativo, donde se estudiará lo correspondiente a los procesos que permiten llevar a cabo el ordenamiento y la instauración de la documentación, basados en las normas y el procedimiento tecnológico que estos demandan, enfatizando en el diagnóstico y los resultados de las necesidades documentales del área de talento humano.

    p(data-aos="fade-down").mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará en el presente recurso educativo.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)           
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
