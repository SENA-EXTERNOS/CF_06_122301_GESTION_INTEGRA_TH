export default {
  global: {
    componenteFormativo:
      'Establecer documentación con base a normatividad y procesos técnicos',
    descripcionCurso:
      'Definir la estructura documental, determinar la documentación, la secuencia de actividades y procesos del personal, partiendo desde la normativa y los procedimientos técnicos, es una tarea que compete a todas las empresas y por ello la importancia de estudiar cómo llevarlos a cabo y mejorar así toda la gestión del talento humano. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/7.png'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/8.png'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/9.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Documentos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Procesos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Mapa de procesos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Diagramas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Documentos',
      referencia:
        'Didáctica Empresarial. (2020). <i>Sistema de gestión documental</i> (video).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uxLwxvnG2NY',
    },
    {
      tema: 'Documentos',
      referencia:
        'ICONTEC. Guía Técnica Colombiana GTC 185. (2009). <i>Documentación organizacional.</i>',
      tipo: 'Cartilla institucional',
      descarga: '/downloads/GTC_185_DOCUMENTACION_ORGANIZACIONAL.pdf',
    },
    {
      tema: 'Documentos',
      referencia:
        'ICONTEC. Norma ISO 9001. (2015). <i>Sistemas de gestión de la calidad. Requisitos.</i>',
      tipo: 'Cartilla institucional',
      descarga: '/downloads/NORMA_ISO_9001_2015.pdf',
    },
    {
      tema: 'Documentos',
      referencia:
        'Agropecuaria Santamaría. (2017). <i>Codificación de Documentos</i> (video).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=x9IMDjuAiYQ',
    },
  ],
  glosario: [
    {
      termino: 'Contratación',
      significado:
        'proceso por el cual se pacta, entre empleador y trabajador, las condiciones laborales a tener en cuenta en el ejercicio del cargo.',
    },
    {
      termino: '<i>Core business</i>',
      significado:
        'el significado de <i>Core business</i> o <i>Core</i> del negocio, hace referencia a aquella actividad productiva que desarrolla una empresa y le permite generar valor para poder mantenerse en el mercado.',
    },
    {
      termino: 'EPP',
      significado: ' Elemento de Protección Personal.',
    },
    {
      termino: 'Gestión: documental',
      significado:
        'consiste en la captura, almacenamiento y recuperación de documentos.',
    },
    {
      termino: 'Inducción',
      significado:
        'capacitación inicial del nuevo trabajador a las políticas, normas y procedimientos de una organización o área específica de trabajo.',
    },
    {
      termino: 'Mapa de procesos',
      significado:
        'diagrama que representa los procesos de una organización de manera interrelacionada.',
    },
    {
      termino: 'Norma ISO',
      significado:
        'norma definida por la Organización Internacional de Normalización que se aplica a los productos y servicios.',
    },
    {
      termino: 'Procedimiento',
      significado:
        'conjunto de acciones que deben realizarse todas de manera igual, para obtener los mismos resultados bajo circunstancias similares.',
    },
    {
      termino: 'Proceso',
      significado:
        'conjunto de actividades que tienen relación entre sí o que interactúan para transformar elementos de entrada en elementos de salida.',
    },
    {
      termino: 'Requisición de personal',
      significado:
        'documento de solicitud interna en una empresa, en el que el responsable de alguna de las áreas de la compañía solicita, de manera formal, que se cubra alguna vacante específica.',
    },
  ],
  referencias: [
    {
      referencia:
        'Atehortúa Hurtado, F., Bustamante Vélez, R., & Valencia de los Ríos, J. (2008). <i>Sistemas de gestión integral. Una sola gestión, un solo equipo</i>. Editorial Universidad de Antioquia.',
    },
    {
      referencia:
        'Norma ISO 9001. (2015). ICONTEC.  <i>Sistemas de gestión de la calidad.</i>',
    },
    {
      referencia:
        'Universidad en Internet. (2021). UNIR. <i>Tipos de diagramas: cuáles existen y sus principales usos.</i>',
      link:
        'https://www.unir.net/marketing-comunicacion/revista/tipos-de-diagramas/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
