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

    .row.justify-content-center 
      .col-4
        img(src='@/assets/curso/temas/tema5/img2.svg')
      .col-4
        .tarjeta-tema1.color-acento-botones.p-4
          p • Recolección de datos
          p • Procesamiento de datos
          p • Elaboración de informes
          p • Distribución de información
          p • Análisis de la información
          p • Toma de decisiones

    p(data-aos="zoom-in").mt-5 Si se establecen y siguen estos pasos, se conseguirá un sistema de gestión de la información fuerte que permitirá mejorar eficientemente la producción y los estándares de calidad del producto ofertado al mercado. A continuación, se puede observar un sistema de gestión de la información:

    .row.mt-5.justify-content-center 
      .col-8
         ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema5/img3.svg', alt='')

          .tarjeta.color-acento-botones--borde.p-3(x="20%" y="60%" numero="Recolección de datos")
            .h5.mb-2 Recolección de datos
            p Los datos pueden provenir de insumos humanos o también de algunos sensores o robots, son la pieza fundamental y punto de partida de todo el sistema. Con el avance tecnológico, estos datos pueden ser desde algunos números o datos reportados en registros hasta el uso de imágenes y sonidos para la detección de enfermedades.

          .tarjeta.color-acento-contenido--borde.p-3(x="26%" y="35%" numero="Procesamiento de datos")
            .h5.mb-2 Procesamiento de datos
            p Tiene que ver con la manipulación que se debe realizar a los datos incluyendo labores como validación, clasificación o agregación, revisar o gestionar datos atípicos o faltantes. En síntesis, el procesamiento de datos se encarga de la adecuada configuración de las bases de datos, lo que permitirá una apropiada generación de información. 

          .tarjeta.color-primario--borde.p-3(x="50%" y="21%" numero="Elaboración de informes")
            .h5.mb-2 Elaboración de informes
            p Es discreción de cada empresa porcina decidir cuál es la información que necesita por cada nivel de trabajo (gerente, personal administrativo, personal de la granja, médico veterinario, personal operario, entre otros). La información puede ser técnica, económica o una mezcla de las dos.

          .tarjeta.color-secundario--borde.p-3(x="76%" y="35%" numero="Distribución de la información")
            .h5.mb-2 Distribución de la información
            p En esta etapa del ciclo se debe tener especial cuidado de enviar la información adecuada a la persona apropiada y en el momento justo ya que de lo contrario no serán útiles los datos recolectados, su procesamiento y los informes elaborados, ocasionando pérdidas de tiempo y subutilización de los datos, por ejemplo, si el informe llega tarde (después del apareamiento), las cerdas hipo productivas deben ser sacrificadas. 

          .tarjeta.color-secundario--borde.p-3(x="80%" y="60%" numero="Análisis de la información y toma de decisiones")
            .h5.mb-2 Análisis de la información y toma de decisiones
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
