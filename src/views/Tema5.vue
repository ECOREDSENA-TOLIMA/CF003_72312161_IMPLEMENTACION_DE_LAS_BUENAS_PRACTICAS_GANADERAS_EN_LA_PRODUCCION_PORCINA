<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Gestión de la información

    .row.justify-content-center 
      .col
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p La Gestión de la Información (GI) es un conjunto de acciones que permiten el control sobre el ciclo de vida de la información que se genera en la empresa porcina, desde su creación o captura (obtención), hasta su archivo o eliminación (disposición final). El principal objetivo de la GI es el de garantizar la integridad, disponibilidad y confidencial de la información. El sistema de GI está conformado por herramientas (<i>software</i> y <i>hardware</i>) que, unido a protocolos y procedimientos de trabajo, pueden generar la información que se necesita para disminuir el riesgo en la toma de decisiones en la empresa porcina.  

    

    p(data-aos="zoom-in").mt-5 Las características principales del informe son:

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 • Recolección de datos
        br
        br
        p • Procesamiento de datos
        br
        br
        p • Elaboración de informes
        br
        br
        p • Distribución de información
        br
        br
        p • Análisis de la información
        br
        br
        p • Toma de decisiones
        
    p(data-aos="zoom-in").mt-5 Si se establecen y siguen estos pasos, se conseguirá un sistema de gestión de la información fuerte que permitirá mejorar eficientemente la producción y los estándares de calidad del producto ofertado al mercado. A continuación, se puede observar un sistema de gestión de la información:

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris").mt-5
      .row(titulo="Recolección de datos")
        p Los datos pueden provenir de insumos humanos o también de algunos sensores o robots, son la pieza fundamental y punto de partida de todo el sistema. Con el avance tecnológico, estos datos pueden ser desde algunos números o datos reportados en registros hasta el uso de imágenes y sonidos para la detección de enfermedades.
      
      .row(titulo="Procesamiento de datos")
        p Tiene que ver con la manipulación que se debe realizar a los datos incluyendo labores como validación, clasificación o agregación, revisar o gestionar datos atípicos o faltantes. En síntesis, el procesamiento de datos se encarga de la adecuada configuración de las bases de datos, lo que permitirá una apropiada generación de información. 

      .row(titulo="Elaboración de informes")
        p Es discreción de cada empresa porcina decidir cuál es la información que necesita por cada nivel de trabajo (gerente, personal administrativo, personal de la granja, médico veterinario, personal operario, entre otros). La información puede ser técnica, económica o una mezcla de las dos.

      .row(titulo="Distribución de la información")
        p En esta etapa del ciclo se debe tener especial cuidado de enviar la información adecuada a la persona apropiada y en el momento justo ya que de lo contrario no serán útiles los datos recolectados, su procesamiento y los informes elaborados, ocasionando pérdidas de tiempo y subutilización de los datos, por ejemplo, si el informe llega tarde (después del apareamiento), las cerdas hipo productivas deben ser sacrificadas. 

      .row(titulo="Análisis de la información y toma de decisiones")
        p Un punto importante a tener en cuenta para el análisis de la información y la toma de decisiones es que la información presentada debe ser legible y comprensible para el destinatario ya que finalmente es esta persona la encargada de analizar la información y tomar las decisiones pertinentes. 


</template>

<script>
export default {
  name: 'Tema5',
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
