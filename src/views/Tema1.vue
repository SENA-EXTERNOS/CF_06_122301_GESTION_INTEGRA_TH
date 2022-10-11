<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Documentos
    p(data-aos="fade-down").mb-5 Para dar inicio a este componente, primero nos debemos referir a los autores Atehortúa, Bustamante, y Valencia de los Ríos, (2008) porque de acuerdo con ellos: “La existencia de una base documental obliga a la organización a gestionarla. Ello supone identificar documentos, controlar la distribución o el acceso a los mismos, disponer de los medios tecnológicos o físicos necesarios para que los usuarios de la documentación tengan acceso oportuno y confiable a ella, retirar los documentos obsoletos y notificar a los usuarios de las modificaciones efectuadas” (p.184). De esta forma, para el desarrollo de este estudio, se debe tener claridad en los aspectos que implican la gestión documental en el área de talento humano de una organización.

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img1.png', alt='')           
      .col-lg-8
        p(data-aos="fade-down") De acuerdo con la Norma ISO 15489-1 2001: “La gestión documental consiste en controlar de un modo eficiente y sistemático la creación, la recepción, el mantenimiento, la utilización y la disposición de los documentos”.  
        .cajon.color-primario.p-4.mb-3(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 El archivo ofrece apoyo interno en la toma de decisiones para el trabajo diario y asegura una preservación adecuada del patrimonio histórico y documental de la organización. Asimismo, tiene un importante papel en la calidad y la imagen de la organización, especialmente en las dependencias de talento humano.
        p(data-aos="fade-down").mb-0 En el área de talento humano de una compañía, se produce una gran cantidad de documentos que, si no son gestionados de manera sistemática, pondrán en riesgo los intereses de la organización y de los trabajadores.
        
    p(data-aos="fade-down").mb-5 A continuación, se relaciona la secuencia de las etapas del proceso de talento humano en una organización

    .row.justify-content-center.align-items-start.mb-5 
      .col-lg-8
        AcordionA.mb-3(tipo="a" clase-tarjeta="tarjeta bg1")(data-aos="fade-right")
          .row.justify-content-center.align-items-center(titulo="Tipos de documentos")
            .col-lg-10
              p Diferenciar la documentación que circula en el área de talento humano es clave para definir si es de tipo legal, atendiendo a los requerimientos de la normatividad laboral colombiana, o de tipo procedimental, atendiendo como su nombre lo indica, a los procedimientos propios de la organización.
          .row.justify-content-center.align-items-center(titulo="Documentos de tipo legal")
            .col-lg-10
              p Dentro de los #[b documentos de tipo legal] se encuentran los siguientes: el contrato, otrosí al contrato si lo hubiere, evidencia de afiliaciones al sistema general de seguridad social, autorización para servir como titular de la información, constancia de entrega de dotación, examen de ingreso, evidencia de vacaciones, procesos disciplinarios, documentación de retiro como paz y salvo, carta de autorización para la realización de examen de retiro, certificación laboral, autorización de retiro de cesantías. 
          .row.justify-content-center.align-items-center(titulo="Documentos de tipo procedimental")
            .col-lg-10
              p Dentro de los #[b documentos de tipo procedimental] se encuentran aquellos registros o formatos que atienden al cumplimiento de un procedimiento establecido en el área, como: selección, contratación, nómina, capacitación, etc. Entre los prototipos de documentos de ejemplo procedimental se encuentran: manual de perfiles y funciones, evidencias del proceso de selección, evidencias del proceso de inducción y entrenamiento del nuevo trabajador y registros de capacitación. 
          .row.justify-content-center.align-items-center(titulo="Tipos de registros")
            .col-lg-10
              p Para el caso del área de talento humano, se pueden encontrar varias clases de registros de la información, los cuáles pueden ser físicos, digitales o fílmicos; identificarlos será un punto importante para determinar el sistema de clasificación a utilizar.

              p Dentro de los #[b registros físicos] se encuentran los documentos físicos que aporta el trabajador para el inicio del contrato, la documentación legal de contratación y todos los soportes que se vayan generando a lo largo de la historia laboral del trabajador en la organización.

              p Si la empresa ya ha generado digitalización de las hojas de vida de los trabajadores, entonces este tipo de #[b registro digital] deberá conservarse dentro de un sistema de clasificación de fácil acceso y protegido contra la fuga de información o la pérdida de la misma.

              p Para el caso de los #[b registros fílmicos] se pueden encontrar, en el área de talento humano, las grabaciones previamente autorizadas de procesos como las actividades de bienestar, capacitación, entrevistas, procesos disciplinarios, 
              p entre otros.
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img2.png', alt='')           

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-4
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Tipos de procedimientos

    p(data-aos="fade-down").mb-5 Para continuar con el desarrollo del componente es preciso tener claridad sobre los conceptos y significado de 'proceso' y 'procedimiento' la cual se hace a partir del siguiente cuadro comparativo:
    SlyderA(tipo="b")(data-aos="fade-left").bg2.p-4.mb-5
      .row.justify-content-center.align-items-start(titulo="Titulo item 1")
        .col-lg-4.col-md-10.col-sm-11.media
          p Cada organización genera sus propios procedimientos para lograr, de manera sistemática, desarrollar un proceso. Por lo general, están enmarcados dentro de alguna norma de certificación, aunque no necesariamente. Para el caso del área de talento humano, existen subprocesos y cada uno de ellos tiene su propia forma de realizar las tareas para alcanzar el cumplimiento del objetivo del proceso. 
        .col-lg-8.col-md-10.col-sm-11.media
          .bgt.p-4
            .tabla-a.tpurple(data-aos='fade-left')
              table             
                thead
                  tr
                    th PROCESO
                    th PROCEDIMIENTO
                    
                tbody
                  tr
                    td Un proceso es un conjunto de actividades mutuamente relacionadas o que interactúan, las cuales transforman elementos de entrada en resultados. 
                    td Un procedimiento es una forma concreta para realizar una actividad o un proceso.

                  tr
                    td Describe la o las actividades macro que se realizan para que una información de entrada se transforme y genere una información de salida.                       
                    td Describe el paso a paso de un proceso. 

      .row.justify-content-center.align-items-start(titulo="Titulo item 1")
        .col-lg-4.col-md-10.col-sm-11.media
          p Ejemplo: el subproceso de selección de personal tiene normalmente, como objetivo, la consecución de personal idóneo de acuerdo con un perfil de cargo previamente establecido, que cumpla con los requisitos de educación, formación, experiencia y habilidades para ocupar las diferentes posiciones en una compañía. En este caso, existe un documento que explica la forma o el método para llevarlo a cabo, en donde se describe el objetivo, alcance, y las tareas sistemáticas que se llevan a cabo para cumplir con la meta de colocación de personal idóneo, de tal forma que se garantice que el proceso se ejecute de la misma manera, a pesar de que existan varios profesionales realizándolo. 
        .col-lg-8.col-md-10.col-sm-11.media
          .bgt.p-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img3.png', alt='')

      .row.justify-content-center.align-items-start(titulo="Titulo item 1")
        .col-lg-4.col-md-10.col-sm-11.media
          p A continuación, se enuncian algunos ejemplos de procesos y de los procedimientos de talento humano, en una organización.
        .col-lg-8.col-md-10.col-sm-11.media
          .bgt.p-4
            .tabla-a.tpurple(data-aos='fade-left')
              table             
                thead
                  tr
                    th Procesos en una organización
                    th Procedimientos  en Talento Humano
                    
                tbody
                  tr
                    td Proceso de talento humano. 
                    td Procedimiento de selección de personal.  
                  tr
                    td Proceso de compras.
                    td Procedimiento de capacitación y entrenamiento. 
                  tr
                    td Proceso de calidad. 
                    td Procedimiento de nómina.
                  tr
                    td Proceso de operaciones. 
                    td Procedimiento de bienestar. 
                  tr
                    td Proceso comercial.  
                    td Procedimiento de evaluación de desempeño.

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-6
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Técnicas de elaboración documental y control de documentos 
    .bg3
      .row.justify-content-center.align-items-start.mb-5           
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img4.png', alt='')           
        .col-lg-8
          .cajon.color-primario.p-4.mb-3(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 En el área de talento humano, se pueden elaborar varios tipos de documentos como: cartas, memorandos, comunicados, circulares, actas, informes, certificaciones, sobres, mensajes electrónicos, tarjetas, entre otros. Para la elaboración de documentos, especialmente de tipo legal, es importante tener en cuenta los aspectos que deben contener estos documentos. 

      p(data-aos="fade-down").mb-5 Para la correcta elaboración documental se recomienda seguir los pasos ilustrados a continuación

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          ImagenInfografica.color-acento-botones.mb-5(data-aos="zoom-in")
            template(v-slot:imagen)
              figure
                img.img-a.img-t(src='@/assets/curso/temas/img6.svg', alt='Para la correcta elaboración documental se recomienda seguir los pasos ilustrados a continuación')

            .tarjeta.color-acento-botones.p-3(x="20.5%" y="71%" numero="")
              p.mb-0 Redactar de forma clara, precisa, concreta y breve.  
            .tarjeta.color-acento-botones.p-3(x="37%" y="40%" numero="")
              p.mb-0 Distribuir el texto de acuerdo con su extensión. 
            .tarjeta.color-acento-botones.p-3(x="45%" y="11%" numero="")
              p.mb-0 Usar un tratamiento respetuoso y cortés.  
            .tarjeta.color-acento-botones.p-3(x="56.4%" y="49%" numero="")
              p.mb-0 Iniciar y finalizar el texto con una frase de cortesía.  
            .tarjeta.color-acento-botones.p-3(x="67%" y="54%" numero="")
              p.mb-0 Utilizar los formatos normalizados en el manual de procedimientos de cada organización.  
            .tarjeta.color-acento-botones.p-3(x="82%" y="21%" numero="")
              p.mb-0 Textos sin errores ortográficos, gramaticales y sin enmendaduras.
              
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          .tarjeta.color-secundario.p-3.mb-5(data-aos="fade-left")
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/img7.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4 Técnicas de elaboración documental y control de documentos
                    p.mb-0 Para poder codificar la información, es fundamental diferenciar entre alfabética, numérica, o alfanumérica; de esta manera se obtendrá un archivo documental organizado, sistemático y de fácil consulta para el cumplimiento de la gestión del talento humano en una organización. 
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/NORMA_ISO_9001_2015.pdf')" target="_blank")
                      span.ts Descargar
                      i.ts.fas.fa-file-download  

          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-right")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/img8.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Junto al proceso de elaboración documental se encuentra el control de dichos documentos, el cual permite que, de manera frecuente, se revisen y actualicen las versiones de los formatos, registros, procedimientos, instructivos etc., que existan. De esta manera, se garantiza que los documentos no se vuelvan inexactos u obsoletos y se trabaje sobre versiones actualizadas acordes con la realidad de las necesidades del área que aplica dicho control. Lo invitamos a revisar el material complementario 'Técnicas de elaboración documental y control de documentos' conocer a profundidad la norma ISO 9001: 2015, donde se establece el procedimiento para el control de documentos.

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Métodos de codificación

    p(data-aos="fade-down").mb-5 Para poder codificar la información, es fundamental diferenciar entre alfabética, numérica, o alfanumérica; de esta manera se obtendrá un archivo documental organizado, sistemático y de fácil consulta para el cumplimiento de la gestión del talento humano en una organización. 
    .row.justify-content-center.align-items-center        
      .col-lg-10
        .cajon.color-primario.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 De igual manera, para elaborar cartas, memorandos, certificados, etc., es necesario asignar un código para facilitar la búsqueda y evitar el plagio de la documentación generada en el área, especialmente de los certificados laborales.
    p(data-aos="fade-down").mb-5 Dentro de un sistema de gestión, la estructura documental contiene los documentos, organizados desde lo macro a lo micro por ejemplo:  manuales, políticas, procedimientos, instrucciones técnicas, registros.  El área de talento humano puede tenerlos todos.

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-4
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Métodos de divulgación documental 

    p(data-aos="fade-down") En el área de talento humano es muy importante mantener actualizada la documentación, pues esto favorece la utilización de documentos que cumplan con la legislación laboral y proteja a la compañía de eventuales pleitos jurídicos.
    p(data-aos="fade-down").mb-5 A continuación, se presenta un video en el cual se profundiza sobre los métodos de divulgación documental:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)           
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass">
.bloque-texto-g
  justify-content: flex-start
  background-color: rgba(255, 255, 255, 0.65)
.bloque-texto-g__img
  left: auto
  right: 0
</style>
