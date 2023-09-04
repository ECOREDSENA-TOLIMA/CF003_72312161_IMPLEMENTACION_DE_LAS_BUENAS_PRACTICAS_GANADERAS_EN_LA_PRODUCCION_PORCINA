export default {
  global: {
    componenteFormativo:
      'Evaluación y monitoreo en la implementación de BPG en la producción porcina',
    descripcionCurso:
      'Este componente tratará los temas sobre la evaluación, seguimiento y plan de contingencia en el monitoreo de la implementación de las Buenas Prácticas Ganaderas (BPG) en la producción porcina, profundizando en la trazabilidad y las acciones correctivas sobre la implementación en la unidad productiva porcícola.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Inspección de procesos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Importancia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Componentes',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Metodología e interpretación',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión calidad ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Protocolos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Lista de chequeo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Reporte de fallas y dificultades',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Formulación y seguimiento de criterios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Contingencias',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Acciones ',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Acciones correctivas al plan de implementación  ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Gestión de la información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Informes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Formular plan de mejora   ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Conceptos',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Hallazgos',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Presentación',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Reporte de novedades',
            hash: 't_7_4',
          },
        ],
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
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_003_72312161.zip',
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
      tema: '2. Gestión de calidad',
      referencia:
        'Procem Consultores. (2018). Principios del Sistema de Gestión de Calidad.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mGX1jYNElHg',
    },
    {
      tema: '2.3 Lista de chequeo',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2021). Lista de chequeo.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BIruK_ImOK8',
    },
    {
      tema: '6. Informes (tipos, características, frecuencia)',
      referencia: 'Virtual Training Lteam. (2016). Informes de Gestión.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-3fWhB6MPU8',
    },
  ],
  glosario: [
    {
      termino: 'Acción correctiva',
      significado:
        'una acción tomada para eliminar las causas de una no conformidad detectada u otra situación indeseable. Manual de buenas prácticas pecuarias en bovinos, porcinos y aves, (2016).',
    },
    {
      termino: 'Autoridad competente',
      significado:
        'la autoridad de cada país responsable de la sanidad e inocuidad agropecuaria, así como sus direcciones, departamentos y sus funcionarios, encargados de cumplir y hacer cumplir las disposiciones de la ley, los reglamentos y normas específicas que se dictaren y demás legislación pertinente con la materia regulada en dichos textos legales. Manual de buenas prácticas pecuarias en bovinos, porcinos y aves, (2016).',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'normas, mecanismos y medidas para garantizar la seguridad de la salud y el ambiente, la investigación, producción, aplicación, liberación de mecanismos modificados por medio de ingeniería genética, material genético manipulado por dichos técnicos y comprende la base, uso, contenido, liberación intencional al medio ambiente y comercialización de los productos. Manual de buenas prácticas pecuarias en bovinos, porcinos y aves, (2016).',
    },
    {
      termino: 'Enfermedad de notificación obligatoria',
      significado:
        'enfermedad que por sus características de difusión y contagio representa un riesgo importante para la población animal y su posible repercusión en la salud humana y que debe ser reportada de inmediato ante el ICA Manual de buenas prácticas pecuarias en bovinos, porcinos y aves, (2016). ',
    },
    {
      termino: 'Erradicación',
      significado:
        'eliminación total de una enfermedad o plaga de animales y vegetales en un área geográfica determinada. Manual de buenas prácticas pecuarias en bovinos, porcinos y aves, (2016).',
    },
    {
      termino: 'Lista de chequeo',
      significado:
        'formato de control que se utiliza para registrar actividades repetitivas y controlar el cumplimiento de una serie de requisitos o recolectar datos ordenadamente y de forma sistemática. Biblioteca UDG Virtual, (2022).',
    },
    {
      termino: 'Monitoreo',
      significado:
        'proceso sistemático de recolectar, analizar y utilizar información para hacer seguimiento al progreso de un programa en pos de la consecución de sus objetivos, y para guiar las decisiones de gestión. Generalmente se dirige a los procesos en lo que respecta a cómo, cuándo y dónde tienen lugar las actividades, quién las ejecuta y a cuántas personas o entidades beneficia. (Centro Virtual de Conocimiento ONU, 2010).',
    },
    {
      termino: 'Plan de mejoras',
      significado:
        'conjunto de medidas de cambio que se toman en una organización para mejorar su rendimiento. ¿Qué es un Plan de Mejora? Educación de Navarra, (2020).',
    },
    {
      termino: 'Predio',
      significado:
        'porción de terreno delimitada cuya propiedad pertenece a una sola persona o a varias en pro indiviso. Real Academia de la Lengua Española, (2022).',
    },
    {
      termino: 'Registro pecuario',
      significado:
        'formato ordenado de almacenamiento de información relacionada con el origen, manejo, comportamiento y destino de los animales, y cuyo objetivo principal es brindar información ordenada que permita al productor tomar decisiones en cuanto a la gestión productiva y financiera de su empresa. El Nuevo Diario, (2013).',
    },
  ],
  referencias: [
    {
      referencia:
        'Piñeiro, C. (2006). Gestión De La Información En Producción Porcina. Vº Congreso de Producción Porcina del Mercosur. ',
      link:
        'https://www.produccion-animal.com.ar/produccion_porcina/00-v-congreso_prod_porcina/21-pineiro_179.pdf',
    },
    {
      referencia:
        'Agencia Nacional de Evaluación de la Calidad y Acreditación. (s/f). Plan De Mejoras Herramienta de trabajo. ',
      link:
        'https://docplayer.es/14804893-Plan-de-mejoras-herramienta-de-trabajo-agencia-nacional-de-evaluacion-de-la-calidad-y-acreditacion.html',
    },
    {
      referencia:
        'PigCHAMP. (s/f). Los 5 pasos de un sistema de gestión de la información. ',
      link:
        'https://www.pigchamp-pro.com/los-5-pasos-de-un-sistema-de-gestion-de-la-informacion/',
    },
    {
      referencia:
        'Ojeda Enríquez, M., Andrade, S. (2017). Gestión de Información de Producción Porcina en Pie. Toma de Decisiones Soportada en Metodologías Blandas. Scientia Et Technica, vol. 23, Universidad Tecnológica de Pereira. ',
      link: 'https://www.redalyc.org/journal/849/84959041008/html/',
    },
    {
      referencia: 'Etecé. (2021). ¿Cómo hacer un informe? Concepto. De.  ',
      link: 'https://concepto.de/como-hacer-un-informe/#ixzz7Sy0zRHid',
    },
    {
      referencia: 'Etecé. (2021). Gestión de calidad. Concepto. De.  ',
      link: 'https://concepto.de/gestion-de-calidad/#ixzz7Sy1JxDBf',
    },
    {
      referencia:
        'Pérez Campdesuñer, R.. (2003). Sistemas de inspección para el control de la calidad. ',
      link:
        'https://www.gestiopolis.com/sistemas-de-inspeccion-para-el-control-de-la-calidad/',
    },
    {
      referencia:
        'IE- ingenio & Empresa. (s.f.).  La lista de chequeo en calidad: Qué es y cómo se hace. ',
      link:
        'https://www.ingenioempresa.com/lista-de-chequeo/#:~:text=La%20lista%20de%20chequeo%2C%20tambi%C3%A9n,una%20situaci%C3%B3n%20o%20proceso%20espec%C3%ADfico.',
    },
    {
      referencia:
        'Evaluando Software.com. (2021). Gestión de la Información vs Gestión del Conocimiento. ',
      link:
        'https://www.evaluandosoftware.com/gestion-de-la-informacion-vs-gestion-del-conocimiento/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lady Johanna Cruz',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro Agropecuario la Granja',
        },
        {
          nombre: 'Gloria Lida Álzate Suarez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
