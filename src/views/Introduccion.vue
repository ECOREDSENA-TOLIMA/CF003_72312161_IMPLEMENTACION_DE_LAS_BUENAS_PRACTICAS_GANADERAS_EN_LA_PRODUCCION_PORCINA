<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-right").mb-5.mt-5 Implementar un plan no es solo el ejecutar los procesos y procedimientos, sino corregir paso a paso los errores procedimentales o fallas en las actividades, o las malas prácticas o manejos por parte del personal ejecutor, entre otras cosas, es por eso que debe existir un monitoreo, lo que implícitamente implica una evaluación y un plan de mejoras con el fin de que la implementación de las BPG sean exitosas en la unidad pecuaria, asegurando a través de este,  la inocuidad, calidad y trazabilidad de los alimentos de origen animal. Partiendo de lo anterior, se da la bienvenida al estudio de este componente formativo y para comenzar, se invita a explorar el video que se presenta a continuación: 
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/25hHFRh4Mjg" title="Evaluación y monitoreo en la implementación de BPG en la Producción Porcina" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video: Evaluación y monitoreo en la implementación de BPG en la Producción Porcina
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
