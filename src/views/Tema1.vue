<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Inspección de procesos  
      
    .row.justify-content-center 
      .col
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p La inspección es una verificación que enlista actividades y procesos con el propósito de establecer si se llevan o hacen de forma correcta y si cumplen las condiciones necesarias para desarrollar una determinada tarea. Es, por lo tanto, un método que se relaciona directamente con la estandarización e implementación de los procesos.

    p(data-aos="zoom-in").mt-5 Esta acción incluye un conjunto de actividades como medir, probar, examinar o verificar las características de una unidad productiva y comparar los resultados para saber si se cumple con los parámetros y características planteadas como estándar. Además, existen diversas herramientas que pueden ser aplicadas en cada uno de los puntos del proceso productivo para evaluar la forma en que se están aplicando, y de ser necesario, aplicar las medidas correctivas para garantizar que se llegue alcanzar el objetivo correctamente, es decir, lograr un producto inocuo y de buena calidad.

    .row.mt-5(data-aos="fade-right")
      .col
        .tarjeta-tema1.color-acento-contenido.p-4
          p <b>Nota:</b> para aplicar la inspección en los procesos de implementación del plan de BPG se requiere que el personal esté capacitado en cada uno de los procesos que se llevan en la unidad productiva, y que se recoja una información fidedigna que pueda proporcionar con audacia los datos necesarios para comparar los estándares con los resultados, y de esta forma obtener un diagnóstico de efectividad y eficacia de la ejecución al momento.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Importancia

    .row.justify-content-center 
      .col
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p En las diferentes producciones, tener procesos uniformes teniendo en cuenta las especificidades predeterminadas es un requerimiento, siendo totalmente necesario determinar  las condiciones para las herramientas que permiten aplicar la medición y asegurar un ambiente que facilite medir correctamente los procedimientos, procesos y actividades que se llevan a cabo en la producción porcina; haciendo que se evalúen diferentes parámetros productivos, zootécnicos, industriales, de gestión, entre otros.

    p(data-aos="zoom-in").mt-5 Es por eso que es importante realizar la inspección con el fin de asegurar que todos los componentes de un proceso cumplan con los patrones y estándares de calidad establecidos para la producción porcina, siendo la causa de que deban aplicarse diferentes tipos de herramientas en cada uno de los procedimientos llevados a cabo en los momentos de producción para garantizar que se hagan adecuadamente y que el producto final cumpla con los requerimientos de calidad, inocuidad y trazabilidad impuestos tanto por los diferentes mercados como por el consumidor final.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Componentes

    p(data-aos="zoom-in") Los componentes que hacen parte de la inspección son la observación, la evaluación y el análisis comparativo de los parámetros esperados con los obtenidos en el proceso productivo, pero estos pueden variar de acuerdo al tipo de inspección que se puede desarrollar en el procedimiento de la unidad productiva, es por esto que se hace necesario conocer dicha clasificación, la cual se describe a continuación:

    .tarjeta.p-4(style="background-color: #EBE1BF").mb-5(data-aos="fade-left").mt-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h3 Generales
            p Estas son realizadas por un comité organizado para tal fin, la verificación se realiza en toda la producción, proceso por proceso y se analizan diversos aspectos productivos durante la implementación del plan.

          .col-md-6.p-3
            figure
              img(src='@/assets/curso/temas/tema1/img3.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h3 Parciales
            p Este tipo de inspecciones se concentran en un punto específico del proceso productivo, para poder evaluarlo de forma eficiente aislado de los demás.


          .col-md-6.p-3
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='')

          
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h3 Rutina
            p Estas verificaciones consisten en las que se hacen con regularidad para asegurar que se lleven adecuadamente los procedimientos y los procesos durante la implementación del plan, garantizando el paso a paso y previniendo posibles errores durante la marcha. Comúnmente se utilizan en el tema de recursos humanos.

          .col-md-6.p-3
            figure
              img(src='@/assets/curso/temas/tema1/img5.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h3 Periódicas
            p Este tipo de inspecciones están dirigidas a la evaluación y verificación de equipamientos, herramientas y equipos, así como del proceso de mantenimiento de los mismos. Se realizan en tiempos determinados con previa programación pre establecida y siguiendo los protocolos para lo mismo.

          .col-md-6.p-3
            figure
              img(src='@/assets/curso/temas/tema1/img6.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h3 Eventuales
            p Este tipo de verificación se hace de forma esporádica con el fin de observar generalmente, sin tener una planeación previa y determinada.  

          .col-md-6.p-3
            figure
              img(src='@/assets/curso/temas/tema1/img7.png', alt='')

          
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h3 Especiales
            p Son realizadas por un equipo de expertos junto con el comité creado para inspección, buscando que se generen reportes de fallas y poder corregirlas oportunamente durante la implementación de los componentes para la ejecución  del plan.

          .col-md-6.p-3
            figure
              img(src='@/assets/curso/temas/tema1/img8.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h3 Oficiales
            p Este tipo de inspecciones es externo, la evaluación y verificación se hace por parte de entidades oficiales o estatales.

          .col-md-6.p-3
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='')

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Metodología e interpretación

    p(data-aos="zoom-in") Con el fin de realizar el proceso de inspección correctamente se hace necesario que se definan ciertos criterios tales como los muestra la siguiente imagen.

    .titulo-sexto.color-acento-contenido.mb-3.mt-5
      h5 Figura 1. 
      span <i>Metodología e interpretación</i>
    .row
      figure
        img(src='@/assets/curso/temas/tema1/img10.svg' alt='')
        figcaption Nota. SENA (2022).

    p(data-aos="zoom-in").mt-5 Luego de identificar estos aspectos, se debe identificar los elementos a comprobar uno por uno, de tal modo que, si existe algún obstáculo, error, o traba, se pueda establecer con facilidad, para lo cual se recomienda que todos los procesos en la unidad productiva estén organizados y estructurados, de tal forma que contribuyan en la elaboración de una lista de inspección. Analizando de esta forma el estado de cada nivel, escrutando con detenimiento como debe llevarse todo con el propósito de mantener la seguridad, calidad e inocuidad.
    p(data-aos="zoom-in") Después de identificar todos estos elementos, es importante crear un documento que será la base de su inspección.

    .row.mt-5(data-aos="fade-right")
      .col
        .tarjeta-tema1.color-acento-contenido.p-4
          p <b>Nota:</b> es de gran importancia crear un documento como base de la inspección, recomendándose el principal lugar la lista de chequeo, la cual funciona de manera acertada que permita verificar cada uno de los procesos junto con sus componentes, así como cada elemento en el material.

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

<style lang="sass"></style>
