<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo2
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Procesos

    p(data-aos="fade-down").mb-5 Después de reconocer la terminología para el procedimiento, ahora vamos a aprender sobre el concepto de proceso; en una organización se pueden diferenciar varios tipos de procesos que, engranados, aportan a la consecución de objetivos organizacionales. Es así como se pueden encontrar tres tipos de procesos: estratégicos, operativos o misionales y de soporte.
    .row.justify-content-center.align-items-center        
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Normalmente, las áreas de talento humano son un proceso de soporte porque apoyan al proceso estratégico y al proceso operativo en el desarrollo del #[i Core business], descrito como una competencia particular, y que se relaciona con la actividad productiva que realiza una empresa y le permite producir valor para poder perdurar en el mercado.
    p(data-aos="fade-down").mb-5 Dentro del área de talento humano, existen subprocesos a diferenciar y que son importantes porque cada uno de ellos genera documentación diferente. En este tema se identificarán estos subprocesos y su respectiva documentación. 

    p(data-aos="fade-down").mb-5 A continuación, se relacionan ejemplos de documentación que surgen dentro de cada subproceso de la gestión del talento humano: 
    .row.justify-content-center.align-items-center.mb-3        
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          br
          span.fst-italic Gestión de talento humano    
    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-10.bg4.p-5
        LineaTiempoB.color-primario(:datos="datosLineaTiempoB")

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Secuencia de los procesos 

    p(data-aos="fade-down") Cada etapa del proceso de talento humano tiene una secuencia lógica, identificar la secuencia es importante para obtener una comprensión general de la gestión del talento humano. 

    p(data-aos="fade-down").mb-5 A continuación, se relaciona la secuencia de las etapas del proceso de talento humano en una organización: 
    .bg3
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.justify-content-center.align-items-center
              .col-lg-6
                h4(data-aos="fade-left") Solicitud de personal  
                p(data-aos="fade-left") El área solicitante de la vacante notifica a talento humano para iniciar la búsqueda de personal idóneo para ocupar el cargo vacante. 
              .col-lg-6
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img10.png', alt='')
            .row.justify-content-center.align-items-center
              .col-lg-6.order-1
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img11.png', alt='')            
              .col-lg-6.text-start.order-lg-2
                h4(data-aos="fade-right") Reclutamiento de hojas de vida  
                p(data-aos="fade-right") Publicación de la vacante de acuerdo con el perfil del cargo.
            .row.justify-content-center.align-items-center
              .col-lg-6
                h4(data-aos="fade-left") Evaluación de personal  
                p(data-aos="fade-left") Aplicación de pruebas técnicas psicotécnicas, validación de seguridad, entrevistas, examen médico, verificación de referencias, visita domiciliaria. 
              .col-lg-6
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img12.png', alt='')
            .row.justify-content-center.align-items-center
              .col-lg-6.order-1
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img13.png', alt='')            
              .col-lg-6.text-start.order-lg-2
                h4(data-aos="fade-right") Contratación  
                p(data-aos="fade-right") Notificación al aspirante de los documentos que deben reunir para la forma del contrato. Asignación de dotación y Elementos de Protección Personal (EPP). Armado de la carpeta del trabajador. 
            .row.justify-content-center.align-items-center
              .col-lg-6
                h4(data-aos="fade-left") Inducción  
                p(data-aos="fade-left") Inducción general y especial del cargo a desempeñar.
              .col-lg-6
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img14.png', alt='')
            .row.justify-content-center.align-items-center
              .col-lg-6.order-1
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img15.png', alt='')            
              .col-lg-6.text-start.order-lg-2
                h4(data-aos="fade-right") Nómina  
                p(data-aos="fade-right") Introducción del trabajador en el sistema de nómina. 
            .row.justify-content-center.align-items-center
              .col-lg-6
                h4(data-aos="fade-left") Bienestar y capacitación  
                p(data-aos="fade-left") Inclusión del trabajador en el programa de bienestar y capacitación de la organización.
              .col-lg-6
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img16.png', alt='')
            .row.justify-content-center.align-items-center
              .col-lg-6.order-1
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img17.png', alt='')            
              .col-lg-6.text-start.order-lg-2
                h4(data-aos="fade-right") Evaluación de desempeño 
                p(data-aos="fade-right") Luego de un período, evaluación de su desempeño.

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Interacción entre procesos
    p(data-aos="fade-down").mb-5 Es indispensable identificar la interacción entre los diferentes subprocesos del área, para comprender el engranaje y los resultados esperados. Cada uno de los subprocesos en talento humano, está interrelacionado porque hace parte de un mismo proceso que es la gestión integral de personas dentro de una organización. 
    .row.justify-content-center.align-items-center        
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 El área de talento humano es transversal para toda la organización; en esta medida, el personal que se encuentre en el área debe tener información clara de la estrategia organizacional de la compañía. 
    p(data-aos="fade-down").mb-5 Dentro de los criterios para la información documentada se encuentran: cumplimiento de normatividad laboral para la elaboración de contratos, cartas de vacaciones, desprendibles de nómina, liquidación de prestaciones sociales, certificados laborales, evidencia de entrega de dotación. Técnicas de elaboración de documentos como cartas, memorandos, circulares, etc.
           
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Selección',
        texto: 'Evidencia del proceso (formatos, registros).',
        icono: require('@/assets/curso/temas/1.svg'),
      },
      {
        titulo: 'Contratación',
        texto:
          'Contrato, afiliaciones a seguridad social, acuerdos, evidencia entrega de dotación.',
        icono: require('@/assets/curso/temas/2.svg'),
      },
      {
        titulo: 'Hojas de vida activos',
        texto: 'Hoja de vida del trabajador activo con todos sus soportes.',
        icono: require('@/assets/curso/temas/3.svg'),
      },
      {
        titulo: 'Nómina',
        texto:
          'Evidencias de pago mensual. Evidencia de pago de prestaciones sociales.',
        icono: require('@/assets/curso/temas/4.svg'),
      },
      {
        titulo: 'Capacitación',
        texto: 'Registro de participación en capacitación.',
        icono: require('@/assets/curso/temas/5.svg'),
      },
      {
        titulo: 'SST',
        texto: 'Evidencias de la gestión en SST.',
        icono: require('@/assets/curso/temas/6.svg'),
      },
      {
        titulo: 'Evaluación de desempeño',
        texto: 'Registros de evaluaciones de desempeño anual.',
        icono: require('@/assets/curso/temas/7.svg'),
      },
      {
        titulo: 'Hojas de vida inactivos',
        texto: 'Evidencias del cierre de contrato.',
        icono: require('@/assets/curso/temas/8.svg'),
      },
    ],
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
