<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Informes

    .row.justify-content-center 
      .col
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p El informe se utiliza principalmente para presentar resultados obtenidos, o análisis relevantes, verificados por el creador de dicho informe. Además, en ocasiones, puede contener soluciones propuestas a los problemas, los métodos, etapas y procesos mediante los cuales se obtienen los datos para encontrar una solución o recomendaciones para lograrlo.
            br
            br
            p Se realiza con el objeto principal de informar, razón por la cual debe ser escrito con una estructura enunciativa, empero transmite resultados a través de datos, los autores deben interpretar los mismos para ofrecer de manera detallada una conclusión que explique de manera tácita lo que se quiere exponer mediante la elaboración del informe, es de relevancia además, que haya una fundamentación argumentativa y firme que puede sustentar estas afirmaciones conclusivas y también recomendaciones demostradas con el análisis de datos estadísticos presentados.

    p(data-aos="zoom-in").mt-5 Independiente del tamaño y las características de la empresa, el sistema de Gestión de la Información se conforma de cinco pasos:

    .row.justify-content-center.mt-5
      .col-7
        .cajon.color-acento-contenido.p-5
          p • Se realiza con el fin de ofrecer información veraz, explicando las situaciones o temas, aportando datos relevantes.
          p • Está dirigido a una persona o grupo de personas que tienen la obligación de leerlo y evaluarlo.
          p • Se realiza con el fin de ser la base específica que aporta información relevante a la hora de tomar decisiones.
          p • Generalmente contienen tablas, cuadros, gráficos estadísticos y otras formas para la clasificación, organización y presentación de los datos.

    p(data-aos="zoom-in").mt-5 Por otra parte, existen principalmente tres tipos diferentes de informe que se pueden elaborar y presentar de acuerdo al propósito del mismo, por lo que es importante conocerlos, así como su aplicabilidad en cada uno de los procesos de la unidad productiva.

    .row.mb-5(data-aos="fade-left").mt-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/img2.svg' alt='')
          .tarjeta(style="background-color:#DAFFCA")
            .p-4
              h2.text-center Expositivo
              p Se centra en que se narren los hechos o los acontecimientos de forma secuencial, pero sin ningún tipo de análisis ni interpretación personal. Se caracteriza por contener antecedentes sobre el acontecimiento o actividad que hacen entender el por qué de la situación, por lo que se considera una presentación objetiva de los hechos.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/img3.svg' alt='')
          .tarjeta(style="background-color:#FFF5D3")
            .p-4
              h2.text-center Interpretativo
              p Se enfoca en el análisis e interpretación de los acontecimientos, es utilizado comúnmente para verificar la implementación y resultados a cerca de planes, procesos, técnicas y procedimientos, además de la viabilidad e implementación de nuevos proyectos, planes, procesos, procedimientos o actividades. 

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/img4.svg' alt='')
          .tarjeta(style="background-color:#DAFFCA")
            .p-4
              h2.text-center Demostrativo
              p El cual se especializa en el entorno científico, centrándose en la presentación de tesis hechas por el autor del informe, describiendo y enlistando cada uno de los ítems realizados y haciendo conclusiones sobre los resultados obtenidos, este tipo de informe se elabora en base a una investigación exhaustiva de los acontecimientos.

    p(data-aos="zoom-in").mt-5 Para concluir, se debe recalcar que los informes tienen una estructura general que consiste en tres partes fundamentales, las cuales son:

    .tarjeta--container.row
      .col-md.tarjeta.p-5
        .row.justify-content-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/temas/tema6/img5.svg', alt='')
          
        h4.text-center Introducción
        p Sirve de presentación, aquí aparecen detallados cuales son los objetivos generales y específicos motivo por el cual se realiza el informe.

      .col-md.tarjeta.p-5
        .row.justify-content-center.mb-4
          .col-12
            figure
              img(src='@/assets/curso/temas/tema6/img6.svg', alt='')
          
        h4.text-center Desarrollo
        p En este punto presentan los procedimientos y la metodología para lograr los objetivos planteados.

      .col-md.tarjeta.p-5
        .row.justify-content-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/temas/tema6/img7.svg', alt='')
          
        h4.text-center Conclusión
        p En este espacio se presentan los resultados obtenidos, los datos tabulados e interpretados y su interrelación con los objetivos.



</template>

<script>
export default {
  name: 'Tema6',
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
