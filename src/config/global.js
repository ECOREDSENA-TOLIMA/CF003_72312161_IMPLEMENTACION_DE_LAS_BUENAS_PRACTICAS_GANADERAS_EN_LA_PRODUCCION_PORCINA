export default {
  global: {
    componenteFormativo:
      'Evaluación y monitoreo en la implementación de BPG en la producción porcina',
    descripcionCurso:
      'Este componente tratará los temas sobre la evaluación seguimiento y plan de contingencia en el monitoreo de la implementación de las Buenas Prácticas Ganaderas (BPG) en la producción porcina, profundizando en la trazabilidad y las acciones correctivas sobre la implementación en la unidad productiva porcícola.',
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
            titulo: '1.1 Importancia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: '1.2 Componentes',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: '1.3 Metodología e interpretación',
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
            titulo: '2.1 Protocolos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: '2.2 Lista de chequeo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: '2.3 Reporte de fallas y dificultades',
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
            titulo: '3.1 Contingencias',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: '3.2 Acciones ',
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
            titulo: '7.1 Conceptos',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: '7.2 Hallazgos',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: '7.3 Presentación',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: '7.4 Reporte de novedades',
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
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: '',
      significado: '',
    },
    {
      termino: '<em></em>',
      significado: '',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
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
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
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
