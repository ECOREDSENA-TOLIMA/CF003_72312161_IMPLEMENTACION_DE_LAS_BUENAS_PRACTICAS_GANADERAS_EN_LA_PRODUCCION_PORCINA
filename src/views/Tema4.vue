<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Acciones correctivas al plan de implementación  

    p(data-aos="zoom-in") Las acciones correctivas son todas aquellas decisiones, medidas, actividades y soluciones orientadas a eliminar o corregir la causa de no conformidades en la empresa derivadas de: 
    p(data-aos="zoom-in") <b>• No conformidades de servicios:</b> quejas y sugerencias de los usuarios, fallas en los procesos que afecten la calidad del servicio prestado. 
    p(data-aos="zoom-in") <b>• No conformidades, mayores o menores:</b> detectadas en auditorías internas o externas del SGI, no conformidades detectadas en la revisión por la dirección, incumplimiento de requisitos legales, análisis de datos.
    p(data-aos="zoom-in") <b>• No conformidades en mediciones de satisfacción:</b> accidentes o accidentes graves, análisis de indicadores del proceso y retroalimentación u observaciones del personal. 

    .row.mt-5(data-aos="fade-right")
      .col
        .tarjeta-tema1.color-acento-contenido.p-4
          p <b>Nota:</b> es muy importante lograr identificar cuáles son las causas que están generando la no conformidad y de esta manera lograr definir si con la implementación de una sola acción correctiva se eliminan.

    p(data-aos="zoom-in").mt-5 Algunos criterios que se pueden evaluar para saber si se está ante un problema sistémico que justifica una acción correctiva son los siguientes:

    separador
    #titulo-segundo.color-acento-contenido
      h2 Criterios para evaluar un problema

    .row.mt-5.justify-content-center 
      .col-8
         ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/img1.svg', alt='')

          .tarjeta.color-acento-botones--borde.p-3(x="18%" y="0.1%" numero="KPI de rendimiento")
            .h5.mb-2 KPI de rendimiento
            p Cuando los indicadores muestran problemas rutinarios. Si los indicadores muestran que los procesos funcionan de forma correcta, no es preciso emprender acciones correctivas.

          .tarjeta.color-acento-contenido--borde.p-3(x="46%" y="40%" numero="Registros")
            .h5.mb-2 Registros
            p Los registros pueden evidenciar problemas que se presentan de forma recurrente y que deben ser investigados.

          .tarjeta.color-primario--borde.p-3(x="65%" y="0.1%" numero="Informes de empleados")
            .h5.mb-2 Informes de empleados
            p Informes, quejas, comentarios de los empleados sobre problemas repetitivos son un signo claro de que es preciso implementar acciones correctivas.

          .tarjeta.color-secundario--borde.p-3(x="90%" y="30%" numero="Resultados de auditorías")
            .h5.mb-2 Resultados de auditorías
            p Son los resultados o inspecciones al sistema cuando los auditores internos o externos incluyen en sus informes las recomendaciones para la implementación de acciones correctivas en ISO 9001.

    p(data-aos="zoom-in").mt-5 Las acciones correctivas pueden ser de dos tipos inmediatas y preventivas, las primeras son reactivas, mientras las segundas son proactivas. A continuación, se muestra el siguiente recurso para analizar cada una de ellas.

    TabsC.color-acento-contenido.mt-5
      .py-3.py-md-4(titulo="Acciones correctivas inmediatas")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img2.svg', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 Acciones correctivas inmediatas
            p Rectifica un problema existente o una distorsión de algún límite crítico. Haciendo la detección de algún proceso o procedimiento mal ejecutado, proyectado o realizado. Algunos ejemplos de este tipo de acciones serían: el rechazo de carne contaminada con agentes químicos (con residuos de medicamentos), físicos (elementos extraños) o biológicos (con salmonella o colibacilosis), impedir el desarrollo de las labores del personal sin los elementos de protección.
      .py-3.py-md-4(titulo="Acciones correctivas preventivas")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema4/img3.svg', alt='')
          .col-md-6
            h4 Acciones correctivas preventivas
            p Impide que ocurra un potencial problema. Previene que suceda un error en la implementación del plan en el futuro. Algunos ejemplos de este tipo de acciones serían: realizar reparaciones locativas en las naves, hacer mantenimiento al equipo y elementos utilizados en las tareas propias de la producción, aplicar la correcta limpieza y desinfección en las instalaciones y los equipos de la unidad productiva.

    p(data-aos="zoom-in").mt-5 Para implementar las acciones correctivas es necesario diseñar un plan en el que se describa el paso a paso para corregir la no conformidad, identificando la raíz, responsables y tiempos de ejecución del plan como se muestra a continuación:

    AcordionA(tipo="b" clase-tarjeta="tarjeta-tema1 color-acento-contenido").mt-5
      .row(titulo="Reconocer la inconformidad en potencia o real")
        p Indagar y encontrar el motivo original que al erradicarse garantice que no ocurra. 

      .row(titulo="Analizar las causas")
        p Al examinar las causas, se debe determinar los límites y alcances del problema, una forma de hacerlo es usando la metodología de los 5 por qué.
      
      .row(titulo="Formular acciones correctivas")
        p La acción diseñada se debe encaminar a la erradicación del motivo identificado anteriormente. Se necesita diseñar más de una acción encaminada a erradicar múltiples hallazgos por lo cual el plan de mejoras se debe abordar de forma holística con el fin de que no se produzcan duplicidades y reprocesos en la administración.

      .row(titulo="Determinar el plan de acción")
        p Se formula un plan en donde se definan las actividades requeridas para erradicar la causa principal. Lo anterior podría requerir la modificación o eliminación de un proceso, evitando producir un nuevo riesgo o problema.

      .row(titulo="Comprobar el cumplimiento del plan ")
        p Se debe comprobar la operatividad de la acción que se propuso para el cumplimiento y  eficacia del mismo.

    p(data-aos="zoom-in").mt-5 Para la aplicación de las acciones correctivas se deben evaluar los criterios mencionados a continuación, los cuales permitirán saber si se está ante un problema sistémico que justifique una acción correctiva: 

    .row(data-aos="zoom-in").mt-5
      .col-6
        p • <b>KPI de rendimiento:</b> cuando los indicadores muestran problemas rutinarios. Si los indicadores muestran que los procesos funcionan de forma correcta, no es preciso emprender acciones correctivas.
        p • <b>Registros:</b> los registros pueden evidenciar problemas que se presentan de forma recurrente y que deben ser investigados.
        p • <b>Informes de los empleados:</b> informes, quejas, comentarios de los empleados sobre problemas repetitivos son un signo claro de que es preciso implementar acciones correctivas.
        p • <b>Resultados de auditorías o inspecciones al sistema:</b> cuando los auditores internos o externos incluyen en sus informes las recomendaciones para la implementación de las acciones correctivas.
      .col-6 
        img(src='@/assets/curso/temas/tema4/img4.png')
</template>

<script>
export default {
  name: 'Tema4',
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
