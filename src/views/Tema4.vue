<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo2
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Diagramas

    p(data-aos="fade-down") Los diagramas son una herramienta de visualización de datos para sintetizar la información. Generalmente se grafican con formas geométricas, representando una secuencia lógica de algún dato o información.
    p(data-aos="fade-down").mb-5 A continuación, se detallan los tipos de diagrama: 

    SlyderA(tipo="b")(data-aos="fade-left").bg2.p-4.mb-5
      .row.justify-content-center.align-items-start(titulo="Titulo item 1")
        .col-lg-4.col-md-10.col-sm-11.media
          h5.mb-3 Diagrama de flujo
          p Es la representación gráfica de un proceso. Se utiliza para expresar un trabajo o actividad, paso a paso. Se incluyen varias figuras geométricas con un significado concreto para su elaboración: círculo (inicio, fin o conector); rectángulo (proceso); rombo (decisión); romboide (entrada, salida); flecha (flujo de ejecución). 
        .col-lg-7.col-md-10.col-sm-11.media
          .bgt.p-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img23.svg', alt='')  
      .row.justify-content-center.align-items-start(titulo="Titulo item 1")
        .col-lg-4.col-md-10.col-sm-11.media
          h5.mb-3 Diagrama conceptual
          p Este tipo de diagrama se utiliza para resumir conceptos y simplificar el estudio de un tema. Se elabora seleccionando las ideas principales y relacionando de forma jerárquica, los conceptos que están relacionados. 
        .col-lg-7.col-md-10.col-sm-11.media
          .bgt.p-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img24.svg', alt='') 
      .row.justify-content-center.align-items-start(titulo="Titulo item 1")
        .col-lg-4.col-md-10.col-sm-11.media
          h5.mb-3 Diagrama de árbol
          p Permite estructurar las ideas de manera jerárquica e ir descendiendo de nivel en cada escalón del diagrama, a medida que se detalla el tema. Su estructura, partiendo de un elemento ‘raíz’ y mostrando las conexiones o ‘ramas’, permite identificar las tareas necesarias para llegar a una solución. 
        .col-lg-7.col-md-10.col-sm-11.media
          .bgt.p-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img25.svg', alt='') 
      .row.justify-content-center.align-items-start(titulo="Titulo item 1")
        .col-lg-4.col-md-10.col-sm-11.media
          h5.mb-3 Diagrama sinóptico 
          p Este diagrama expresa las distintas fases y secuencias que deben realizarse de forma cronológica, para producir un determinado objeto. Se compone de líneas verticales y horizontales que expresan el flujo del proceso y la entrada de materiales o componentes. Es un diagrama muy habitual para expresar los proyectos del ámbito de la ingeniería industrial. 
        .col-lg-7.col-md-10.col-sm-11.media
          .bgt.p-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img26.svg', alt='') 

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-6
        .row.justify-content-start.align-items-center.mb-4
          .col-lg-8
            .bgp.p-1(data-aos="fade-right")
              h4(data-aos="fade-down").mb-0 Caracterización
        p(data-aos="fade-down") Los diagramas tienen unas características específicas, las cuales son:
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span.ts 1
            p.mb-0 Deben ser fáciles de interpretar.
          li 
            .lista-ol--cuadro__vineta
              span.ts 2
            p.mb-0 Deben expresar la secuencia de un proceso o procedimiento.
          li 
            .lista-ol--cuadro__vineta
              span.ts 3
            p.mb-0 Se utilizan especialmente para resumir.
          li 
            .lista-ol--cuadro__vineta
              span.ts 4
            p.mb-0 Representan visualmente los pasos que atraviesa un proceso.
          li 
            .lista-ol--cuadro__vineta
              span.ts 5
            p.mb-0 Se utiliza simbología en cada uno de los pasos.               
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img27.svg', alt='')

    .bg5
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-8    
          .cajon.color-primario.p-4.mb-3(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 Adicional a estas características, también es necesario reconocer las convenciones geométricas que se deben (o pueden) utilizar para elaborar un diagrama de flujo. 
    .row.justify-content-center.align-items-center.mb-3        
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          br
          span.fst-italic Tabla de convenciones para la elaboración de diagramas 
    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-10.bg4.p-5
        .tabla-a.tpurple(data-aos='fade-left')
          table             
            thead
              tr
                th Símbolo
                th.bgt1 Significado
                
            tbody.bgw
              tr
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img28.svg', alt='')                        
                td <b>Operación</b><br><br>Se usa para describir cualquier actividad. En el interior del rectángulo se escribe una breve descripción de la actividad. 
              tr
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img29.svg', alt='')                        
                td <b>Límites del proceso</b><br><br> Indica el inicio y el final de un proceso. En el interior aparece la palabra 'inicio' o 'fin'.
              tr
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img30.svg', alt='')                        
                td <b>Punto de decisión</b><br><br> Denota que en ese punto se toma una decisión. Las salidas del diamante, son siempre dos y del tipo SI/NO.
              tr
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img31.svg', alt='')                        
                td <b>Movimiento</b><br><br> Muestra el movimiento de una salida entre distintos puntos de la organización.
              tr
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img32.svg', alt='')                        
                td <b>Conector</b><br><br> Señala que la salida de ese proceso puede ser la entrada de otro (la letra indica el proceso de entrada).
              tr
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img33.svg', alt='')                        
                td <b>Dirección del flujo</b><br><br> Denota la dirección y el orden de los pasos del proceso.
              tr
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img34.svg', alt='')                        
                td <b>Documento</b><br><br> Documento/registro
              tr
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img35.svg', alt='')                        
                td <b>Listados</b><br><br> Listados/notas de trabajo acumulado, información referente a la actividad.
              tr
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img36.svg', alt='')                        
                td <b>Base de datos</b><br><br> Punto de archivo donde se retiene temporalmente la información, en espera de que se cumplan otras condiciones para continuar el proceso. Puede llevar asociada una tarea de administración de almacenamiento.
    
    p(data-aos="fade-down").mb-5 Los pasos a tener en cuenta para la diagramación de procesos son los siguientes:
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span.ts 1
            p.mb-0 #[b Determinar el proceso a graficar:] se trata de identificar el proceso que se desea graficar y para esto se debe conocer el proceso.
          li 
            .lista-ol--cuadro__vineta
              span.ts 2
            p.mb-0 #[b  Determinar el inicio y el fin del proceso:] es clave para identificar el punto de inicio del proceso y el producto final.
          li 
            .lista-ol--cuadro__vineta
              span.ts 3
            p.mb-0 #[b Determinar actividades:]  implica identificar las actividades que forman parte del proceso, en su respectivo orden.
          li 
            .lista-ol--cuadro__vineta
              span.ts 4
            p.mb-0 #[b Graficar los pasos:] de acuerdo con la información recolectada, se grafica teniendo en cuenta las convenciones geométricas a utilizar. 

    .row.justify-content-center.align-items-center        
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados.                 
</template>

<script>
export default {
  name: 'Tema4',
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
