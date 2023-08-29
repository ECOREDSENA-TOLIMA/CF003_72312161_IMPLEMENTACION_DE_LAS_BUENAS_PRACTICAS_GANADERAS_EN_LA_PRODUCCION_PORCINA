<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión calidad 

    .row.justify-content-center 
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Cuando se habla de gestión de calidad se hace alusión a una secuencia de procesos sistemáticos que permiten a cualquier unidad productiva hacer planeación, ejecución y control de las diferentes actividades que se desarrollan. Asegurando la estabilidad y consistencia en el desempeño para alcanzar las metas y cumplir con las exigencias tanto del mercado como del consumidor final. 

    p(data-aos="zoom-in").mt-5 Se invita a ver la siguiente presentación para entender la gestión de la calidad en la unidad productiva porcina y así fortalecer los conocimientos sobre el tema:

    SlyderB.mb-5.mt-5(:datos="datosSlyder")

    p(data-aos="zoom-in").mt-5 En ese orden de ideas, la gestión de calidad se ajusta y varía de acuerdo a cada etapa productiva con el fin de que se puedan establecer sus propios parámetros o estándares, los cuales no son más que modelos referenciales para poder medir y valorar el nivel de desempeño del procedimiento o proceso. Es por esto que para hacer dichas mediciones se establecen en las unidades productivas porcinas los sistemas de gestión de calidad.
    p(data-aos="zoom-in") El sistema de gestión de calidad entonces está compuesto por todos los elementos que lo conforman con el propósito de asegurar un desempeño continuo y estable, evitando de esta forma cambios imprevistos. También, el sistema de calidad da la posibilidad de realizar mejoras agregando nuevos procesos que contribuyan al mejoramiento. A continuación, se describen algunos elementos que conforman el sistema de calidad (ver figura 2):

    .titulo-sexto.color-acento-contenido.mb-3.mt-5
      h5 Figura 2.  
      span <i>Elementos que conforman el sistema de calidad</i>
    .row
      figure
        img(src='@/assets/curso/temas/tema2/img7.svg' alt='Figura 2. Elementos que conforman el sistema de calidad son la estructura de la unidad productiva, planificación estratégica, recursos y procedimientos,')
        figcaption Nota. SENA (2022).

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Protocolos

    .row.justify-content-center 
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img8.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Un protocolo es un documento que describe el conjunto de actividades o medidas que deberá ejecutar el personal de la empresa pecuaria para atender una situación específica de la producción. Estas hojas de ruta o protocolos son de suma importancia en la producción pecuaria ya que son aplicados a actividades que se desarrollan en el día a día, y permiten tomar decisiones importantes durante un procedimiento o un evento importante.

    p(data-aos="zoom-in").mt-5 En el caso de la gestión de calidad en la unidad pecuaria porcina debe tenerse en cuenta como principal referente a los protocolos o procedimientos, para llevar a cabo con el fin de verificar las actividades, la eficiencia y efectividad de los mismos debe tenerse en cuenta la normativa ISO 9001, la cual es una pauta internacional que toma en cuenta las actividades de una unidad productiva sin hacer distinción de su rubro porque se centra en la satisfacción del cliente y en la capacidad de proveer productos y servicios que cumplan con las exigencias establecidas.
    p(data-aos="zoom-in") En este orden de ideas los protocolos pueden variar dependiendo de los tipos de procesos que se están llevando a cabo, así como los recursos, instalaciones, propósito de la producción, etapa productiva, personal, entre otros, por lo cual se deben tener en cuenta los siguientes principios como base para diseñar los protocolos de gestión de calidad. En el siguiente esquema se puede observar cada uno de estos principios:

    TabsA.color-acento-botones.mt-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Cliente")
        h4 Cliente
        p Comprender sus necesidades y cumplir con sus expectativas es la clave para satisfacer las exigencias de los consumidores y mantener su fidelidad.

      .tarjeta.color-acento-botones--borde.p-4(titulo="Liderazgo")
        h4 Liderazgo
        p El clima interno de la organización depende de la estrategia de dirección o de mando establecida. El líder principal puede delegar tareas en otros responsables designados, según el tipo de estructura.

      .tarjeta.color-acento-botones--borde.p-4(titulo="Participación del personal")
        h4 Participación del personal
        p La motivación de los integrantes de la organización genera un mayor compromiso, un mejor desempeño de sus tareas y reduce la incertidumbre en momentos de crisis.

     
      .tarjeta.color-acento-botones--borde.p-4(titulo="El enfoque basado en procesos")
        h4 El enfoque basado en procesos
        p Guiar cada área de la organización es parte del desarrollo global de la institución para alcanzar los objetivos de manera eficiente.

      .tarjeta.color-acento-botones--borde.p-4(titulo="El enfoque de sistema para la gestión")
        h4 El enfoque de sistema para la gestión
        p Llevar a la acción o a la práctica los procedimientos establecidos por la organización genera interacción entre cada elemento del sistema de gestión de calidad.

      .tarjeta.color-acento-botones--borde.p-4(titulo="La mejora continua")
        h4 La mejora continua
        p La evaluación del sistema de gestión de calidad (según estándares adecuados para cada rubro) es útil para obtener mejoras en los procedimientos.

      .tarjeta.color-acento-botones--borde.p-4(titulo="El enfoque basado en hechos para la toma de decisiones")
        h4 El enfoque basado en hechos para la toma de decisiones
        p El análisis de datos cualitativos y cuantitativos, sirve para medir el desempeño de la organización.
     
      .tarjeta.color-acento-botones--borde.p-4(titulo="La relación con los proveedores")
        h4 La relación con los proveedores
        p Es importante mantener una relación beneficiosa y recíproca entre la organización y los proveedores como alianzas, descuentos, planes de pago, etc.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Lista de chequeo

    .row.justify-content-center 
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img9.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p También llamada <i>check list</i>, hoja de control, planilla de inspección, hoja de verificación, es un formato que se usa para recopilar información o datos por medio de la observación de una actividad, proceso o situación y es una de las herramientas para evaluar la calidad más utilizada. Los datos obtenidos representan un aporte para la utilización de otras herramientas de control de calidad tales como el diagrama de Pareto o dispersión. Pero además esta herramienta es multipropósitos, ya que es utilizada en diversos ámbitos más allá que de la calidad.

    p(data-aos="zoom-in").mt-5 Aunque normalmente la lista de chequeo se aplica de manera física o impresa, también se puede encontrar de manera digital encontrándose en <i>software</i> a través de dispositivos como las tabletas o móviles, haciéndola de mayor acceso y aportando beneficios como el ágil llenado y guardado de datos simultáneo a lo que se chequea, realizando un tabulado automático a medida que se va diligenciando la lista, por lo que los resultados obtenidos son casi inmediatos a la inspección.
    p(data-aos="zoom-in") En la verificación de la eficiencia, efectividad y calidad del proceso se utiliza la lista de chequeo diseñada por el Instituto Colombiano Agropecuario ICA, ya que es especial para la producción porcina. A continuación, se presenta la lista de chequeo:  

    .row.justify-content-center.mt-5
      .col-6
        a.anexo.mb-4.mb-lg-0(href="https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias/listado-de-predios-certificados-en-bpg/forma-3-519-lista-de-chequeo-predios-productores-d.aspx" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo.</b> Lista de chequeo para predios productores de porcinos con destino al sacrificio – Forma 3-519

    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Reporte de fallas y dificultades

    .row.justify-content-center 
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img10.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Un reporte de fallas y dificultades tiene como objeto el informar los defectos, errores, fallas o cualquier anormalidad que pueda afectar de alguna manera los procesos productivos en la implementación del plan o en cualquiera de las actividades, procedimientos o procesos involucrados en el mismo, por lo general se presenta en un formato predeterminado o a través de un informe, el cual explique directamente cada uno de los puntos que se verificaron y que no cumplen con los criterios pre establecidos, formulando posibles soluciones y recomendaciones para poder subsanarlas.

    p(data-aos="zoom-in").mt-5 Por lo general, el informe de fallas debe ser lo más preciso posible, organizado, descriptivo y verás, con el fin de que se conozca las situaciones y de forma estratégica se ofrezcan una o más propuestas para subsanar y corregir los puntos o aspectos con ausencia de conformidad.

    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Gestión de calidad',
        texto:
          'En la gestión de calidad cada proceso debe hacerse de forma adecuada, y por lo tanto, se debe tener en cuenta que existe una normatividad que es importante que se aplique en cada uno de estos procesos por la unidad productiva porcina.',
        imagen: require('@/assets/curso/temas/tema2/img2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Normatividad',
        texto:
          'Esta normatividad se aplica a nivel tanto internacional como nacional y regional, corresponde a la norma ISO 9001, que fue emitida en 2015 para regular cada uno de estos procesos.',
        imagen: require('@/assets/curso/temas/tema2/img3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Implementar',
        texto:
          'Esta norma la debemos implementar dentro de nuestras producciones, es así como se debe hacer seguimiento a cada proceso cuidando que cumpla con una línea, no solamente sanitaria y de inocuidad sino también de calidad, de esta forma nuestros productos puedan salir al mercado cumpliendo con cada uno de los indicadores y necesidades que exigen los mercados así como el consumidor final.',
        imagen: require('@/assets/curso/temas/tema2/img4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Proceso productivo',
        texto:
          'Igualmente, esta norma es de gran importancia en porcinos porque es un producto cárnico y en ese sentido, se requiere que haya una trazabilidad, inocuidad y que además haya una calidad en el proceso productivo primario.',
        imagen: require('@/assets/curso/temas/tema2/img5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Indicadores',
        texto:
          'Y de este modo es que se aplican diferentes indicadores que deben ser cumplidos durante el plan de implementación de las buenas prácticas ganaderas, ya que ellas van dirigidas a que se aporte calidad, inocuidad y trazabilidad en los alimentos de origen animal.',
        imagen: require('@/assets/curso/temas/tema2/img6.png'),
        // leyendaImagen: 'Leyenda de la imagen',
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
