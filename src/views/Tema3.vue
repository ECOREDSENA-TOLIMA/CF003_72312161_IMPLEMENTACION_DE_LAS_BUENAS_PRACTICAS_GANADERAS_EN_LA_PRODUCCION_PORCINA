<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Formulación y seguimiento de criterios

    .row.justify-content-center 
      .col
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Cuando se habla de formulación y seguimiento de criterios se está realmente hablando de los indicadores de gestión, que son los que permiten evaluar los avances del plan de implementación de manera calificable, por lo cual se pueden medir tangiblemente las metas y objetivos trazados a través de la ejecución del mismo.
            br
            br
            p Los indicadores de gestión son la expresión cuantitativa del comportamiento y desempeño de un proceso, cuya magnitud, al ser comparada con algún nivel de referencia, puede estar señalando una desviación sobre la cual se toman acciones correctivas o preventivas según el caso (Silva, 2021), es decir, un indicador de gestión es un valor que se puede medir y que muestra la eficacia y efectividad para lograr los objetivos clave propuestos.

    p(data-aos="zoom-in").mt-5 Es así como un indicador aislado revela la condición o estado de un proceso en un momento específico, mientras un conjunto de indicadores bien definidos y analizados revela la situación general de la organización y permite predecir su proyección futura.

    .row.mt-5(data-aos="fade-right")
      .col
        .tarjeta-tema1.color-acento-contenido.p-4
          p <b>Nota:</b> la principal función de los indicadores de gestión es medir el éxito de la implementación del plan o proyecto, permitiendo mostrar los avances de la misma y el porcentaje o totalidad del cumplimiento de los objetivos y metas individuales.

    p(data-aos="zoom-in").mt-5 A continuación, se puede ver la definición de un indicador según el autor.

    .row.justify-content-center.mt-5 
      .col
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            h3 Según Castulina y Martínez (2013)
            br
            br
            p “un indicador solo puede considerar una de estas dimensiones sea la económica, la social, ambiental, política, etc., además permite comparar la situación actual de una dimensión de estudio en el tiempo respecto a patrones establecidos y finalmente todo indicador debe transmitir información relevante sobre un tema en particular para la toma de decisiones”. 
            
    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Contingencias

    .row.justify-content-center 
      .col
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Las contingencias hacen referencia a aquellas situaciones o eventos que podrían suceder en la producción y que acarrearían consecuencias negativas o positivas en la empresa porcina. Si este hecho llegara a ocurrir o materializarse, mejoraría o empeoraría las condiciones productivas de la empresa. Aunque no se tiene certeza de su ocurrencia, es posible que pase y por esto es muy importante que se diseñen planes de contingencia para así poder enfrentarse a algunas situaciones que puedan suceder. 

    p(data-aos="zoom-in").mt-5 Un plan de contingencia es el conjunto de medidas que se articulan con la parte técnica, operativa y humana con el fin de explicar cómo actuar en el momento en que ocurra la situación o evento extraordinario. Es decir, que suministra minuciosamente cuales son las medidas y acciones que se tienen que implementar para que la empresa ganadera pueda seguir funcionando ante una emergencia. En las granjas porcinas existen diferentes planes de contingencia como los enfocados en:
    .titulo-sexto.color-acento-contenido.mb-3.mt-5
      h5 Figura 3.  
      span <i>Tipos de planes de contingencia en las granjas porcinas</i>
    .row.justify-content-center.mt-5 
      .col-6
        img(src='@/assets/curso/temas/tema3/img4.svg' alt='Figura 3. Los tipos de planes de contingencia en las granjas porcinas deben contener área sanitaria, área alimentaria, área de riesgos y área de desastres.').mt-5

    p(data-aos="zoom-in").mt-5 Diferentes situaciones de emergencia pueden tener alto impacto sobre la producción y el bienestar animal. Dichos eventos deben ser incluidos en los respectivos planes de emergencia teniendo en cuenta que ya existen antecedentes de su ocurrencia en granjas porcinas tanto a nivel nacional como internacional. A continuación, se resumen las distintas situaciones de emergencia mencionadas anteriormente (ver tabla 1): 

    .col-12.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-right")
        p.titulo.pb-0.mb-0 <b>Tabla 1.</b> <i>Pruebas de tamizaje Consumo de SPA </i>
    .col-12.px-0(data-aos="fade-left")
      .tabla-a.color-acento-contenido-2.mb-5
        table
          thead
            tr
              th Tipo de desastre
              th 
              th Tipo de contingencia
              th Observaciones
          tbody
            tr
              td.text-center #[strong Desastres naturales]
              td.text-center #[strong Terremotos]
              td
                img(src='@/assets/curso/temas/tema3/img5.png')
              td Ocurren con frecuencia y causan grandes pérdidas económicas a los productores porcinos.
            
            tr
              td
              td.text-center #[strong Inundaciones o avalanchas] 
              td
                img(src='@/assets/curso/temas/tema3/img6.png')
              td Esta situación debe evaluarse de acuerdo con la situación geográfica de cada producción porcina, especialmente para aquellas que se encuentran cerca de fuentes hídricas o lugares con bastante precipitación.
            tr
              td
              td.text-center #[strong Erupciones Volcánicas]
              td
                img(src='@/assets/curso/temas/tema3/img7.png')
              td Teniendo en cuenta que en el país contamos con varios volcanes activos, siempre debe considerarse ya que el riesgo de que alguno haga erupción es inminente.
            tr
              td.text-center #[strong Accidentes]
              td.text-center #[strong Incendios]
              td
                img(src='@/assets/curso/temas/tema3/img8.png')
              td Aunque la probabilidad de que esto ocurra es baja, se tiene el antecedente que ya ha sucedido en granjas porcinas.
            tr
              td
              td.text-center #[strong Corte de energía eléctrica]
              td
                img(src='@/assets/curso/temas/tema3/img9.png')
              td Existe la posibilidad que se presente alguna falla en la red de suministro eléctrico lo que afectaría las condiciones de ambiente controlado en los cerdos recién nacidos y lechones además de la elaboración de alimento balanceado, si se contara con esta línea en la granja. 
            tr
              td.text-center #[strong Sanitarios]
              td.text-center #[strong Ingreso de enfermedad de declaración obligatoria]
              td
                img(src='@/assets/curso/temas/tema3/img10.png')
              td Puede ingresar alguna enfermedad de declaración obligatoria como la PPC y su ingreso se vería reflejado en pérdidas económicas por fúsiles sanitarios, actividades de saneamiento y erradicación de la enfermedad. 
            tr
              td.text-center #[strong Otros]
              td.text-center #[strong Otros]
              td
                img(src='@/assets/curso/temas/tema3/img11.png')
              td Alguna condición que puede impactar de manera negativa a la empresa porcina ya sea por condiciones específicas de la granja o su zona geográfica.

    p(data-aos="zoom-in").mt-5 A continuación, se presenta la siguiente figura 4 para analizar el plan de contingencia en situaciones de emergencia:

    .titulo-sexto.color-acento-contenido.mb-3.mt-5
      h5 Figura 4.  
      span <i>Plan de Contingencia en situación de emergencia</i>
    .row.justify-content-center.mb-5
      .col-8
        figure
          img(src='@/assets/curso/temas/tema3/img12.svg' alt='Figura 4. Plan de contingencia en situación de emergencia debe tener un alcance, determinar los procedimientos, establece acciones y responsables, trata un tema específico y se implementa de acuerdo a la situación.')
    figcaption Nota. SENA (2022).

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Acciones 

    .row.justify-content-center 
      .col-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img13.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p El plan de contingencia debe tener un capítulo que hable detalladamente sobre las medidas de prevención y mitigación a ejecutar, con el fin de evitar que sucedan las contingencias o si ocurren, que causen el menor impacto posible en la empresa porcina. Las acciones se pueden clasificar en medidas generales o específicas dependiendo del tipo de contingencia y consisten en actividades que se plantean para organizar de manera rápida los materiales, equipos y recurso humano para dar respuesta rápida y eficaz a una contingencia. Estas medidas pueden ser generales o específicas para el tipo de contingencia, como se detalla a continuación:

    separador
    #titulo-segundo.color-acento-contenido
      h2 Medidas generales o específicas para el tipo de contingencia

    .tarjeta.p-4(style="background-color: #EBE1BF").mb-5(data-aos="fade-left").mt-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h3 Generales
            p Siempre se debe tener en cuenta la localización del predio teniendo en cuenta que su construcción debe estar alejada de terrenos inundables, con riesgos de aludes de tierra, avalanchas o incendios forestales. Si por el contrario, es una instalación antigua y no cumple con los requisitos anteriores y además se encuentra en producción, se deben generar una serie de acciones que permitan impedir que ocurra alguna contingencia que tenga que ver con un desastre y por ende, genere un impacto negativo en la producción.

          .col-md-6.p-3
            figure
              img(src='@/assets/curso/temas/tema3/img14.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h3 Terremotos
            p Las instalaciones deben estar en buenas condiciones de funcionamiento y estructura, construidas en materiales sólidos y resistentes. Si se presenta algún daño en la estructura, debe repararse con prontitud. Si se tienen silos de alimentación, se debe garantizar que los cimientos y la fijación de este son firmes y sobre todo, seguros.

          .col-md-6.p-3
            figure
              img(src='@/assets/curso/temas/tema3/img15.png', alt='')

          
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h3 Erupciones volcánicas
            p Estas pueden afectar de tres maneras a las producciones porcinas. La primera es por los efectos de la lava que baja a temperaturas muy elevadas, la segunda es por algunas piedras incandescentes que salen emitidas desde el punto de la erupción, y la tercera son los gases tóxicos y cenizas que cae sobre las instalaciones. 

          .col-md-6.p-3
            figure
              img(src='@/assets/curso/temas/tema3/img16.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h3 Inundaciones o avalanchas
            p Si el predio está ubicado cerca a fuentes de agua o en terrenos que históricamente han sido golpeados por inundaciones o avalanchas, se debe construir un muro de contención que impida el ingreso de agua o material a las instalaciones. Los techos deben estar en óptimas condiciones y contar con desagües, ya que en épocas fuertes de lluvia se pueden presentar inundaciones.

          .col-md-6.p-3
            figure
              img(src='@/assets/curso/temas/tema3/img17.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h3 Incendios
            p Deben existir extintores distribuidos estratégicamente por todas las instalaciones, deben estar visibles y de fácil acceso para el personal, su parte superior nunca debe superar los 1.70 metros con el fin de facilitar su consecución y uso en caso de presentarse un incendio. Es importante contar con detectores de humo tanto en las oficinas, sitios de coincidencia con bosques o árboles, como también en la planta de alimento. 

          .col-md-6.p-3
            figure
              img(src='@/assets/curso/temas/tema3/img18.png', alt='')

          
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h3 Cortes de energía eléctrica
            p Se debe contar con un generador de energía eléctrica que debe proveer de energía como mínimo al funcionamiento de distribución de agua, alimentos y los sistemas de calefacción de lechones y cerdos destetos. 

          .col-md-6.p-3
            figure
              img(src='@/assets/curso/temas/tema3/img19.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h3 Ingreso de enfermedades de declaración obligatoria
            p Es necesario contar con las medidas de bioseguridad vigentes y un plan sanitario a cargo del médico veterinario. 

          .col-md-6.p-3
            figure
              img(src='@/assets/curso/temas/tema3/img20.png', alt='')

  

</template>

<script>
export default {
  name: 'Tema3',
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
