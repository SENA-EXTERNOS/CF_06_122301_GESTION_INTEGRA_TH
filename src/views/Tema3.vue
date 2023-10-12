<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo3
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Mapa de procesos
    .bg5
      p(data-aos="fade-down").mb-5 En este tema aprenderemos sobre los mapas de proceso. Un mapa de procesos es un diagrama que representa los procesos de una organización de manera interrelacionada. A continuación, se grafica un mapa de procesos de una empresa:
      .row.justify-content-center.align-items-center.mb-3        
        .col-lg-10
          .titulo-sexto.color-acento-contenido
            h5 Figura 2
            br
            span.fst-italic Mapa de procesos
          img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/img19.svg', alt='')
          figcaption.fw.mb-5 Nota: Mapa de procesos, de Luis Amaya (sin dato del año de publicación).
              
      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-4
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Estructura del mapa de procesos
      .row.justify-content-center.align-items-center     
        .col-lg-10
          .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-4.mb-4.mb-lg-0
                h2.mb-0 El mapa de procesos no es igual en todas las empresas, pero sí se deben tener en cuenta los siguientes criterios:

              .col-lg-8
                .bloque-texto-a__texto.p-4
                  ul.lista-ul

                    li 
                      i.lista-ul__vineta.cyellow
                      p.mb-0 #[b Entrada:] normalmente es un requerimiento o necesidad del cliente.
                    li 
                      i.lista-ul__vineta.cyellow
                      p.mb-0 #[b Diferenciar los tres tipos de procesos de la empresa:] estratégico, operativo o misional y de soporte.
                    li 
                      i.lista-ul__vineta.cyellow
                      p.mb-0 #[b Salida:] es la satisfacción del cliente a través del engranaje de los procesos de la empresa.
 
      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-5
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Criterios de elaboración, tipo y relación entre procesos
      p(data-aos="fade-down") Estas estructuras mencionadas anteriormente, dependen de unos criterios de elaboración, tipos y relaciones entre los procesos. Para construir un mapa de procesos, primero se deben identificar los macro-procesos de la organización, clasificándolos en los tres tipos ya descritos: estratégicos, operativo o misional y de soporte. Cada área de una empresa está inmersa en una de estas tres categorías de proceso. 
      p(data-aos="fade-down").mb-5 Ejemplo de un mapa de procesos: 

    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img22.svg', alt='')                       
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
