<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p A continuación, se describe el tema principal del componente formativo, Evaluación y monitoreo en la implementación de BPG en la producción porcina, en donde se tratan temas sobre la evaluación, seguimiento y plan de contingencia en el monitoreo de la implementación de las buenas prácticas ganaderas en la producción porcina BPG, profundizando en la trazabilidad y las acciones correctivas sobre la implementación en la unidad productiva porcícola.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Síntesis. Implementación de Buenas Prácticas Ganaderas en la Producción Porcina inicia con la inspección de los procesos, el establecimiento de conceptos, la definición de los estándares y protocolos así como la elaboración de un plan de contingencias que a su vez incluya acciones preventivas e inmediatas soportados en un sistema de información que facilite gestión y tratamiento de datos para llevar a cabo los procesos con la trazabilidad correspondiente,  facilitando la elaboración de informes de acuerdo a la necesidad y formular el plan de mejora que permita evitar desviaciones o redireccionar la planeación hacia sus objetivos.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
