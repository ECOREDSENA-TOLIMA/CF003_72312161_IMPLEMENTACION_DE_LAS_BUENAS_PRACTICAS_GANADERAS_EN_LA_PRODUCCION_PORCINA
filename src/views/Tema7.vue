<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Formular plan de mejora   

    .row.justify-content-center 
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p El plan de mejoras integra la decisión estratégica sobre cuáles son los cambios que deben incorporarse a los diferentes procesos de la organización, para que sean traducidos en un mejor servicio percibido.  Dicho plan, además de servir de base para la detección de mejoras, debe permitir el control y seguimiento de las diferentes acciones a desarrollar, así como la incorporación de acciones correctoras ante posibles contingencias no previstas. Para su elaboración será necesario establecer los objetivos que se proponen alcanzar y diseñar la planificación de las tareas para conseguirlos.

    p(data-aos="zoom-in").mt-5 El plan de mejoras permite identificar las causas que provocan las debilidades detectadas, las acciones de mejora a aplicar, analizar su viabilidad, establecer prioridades en las líneas de actuación, disponer de un plan de las acciones a desarrollar en un futuro y de un sistema de seguimiento y control de las mismas, negociar la estrategia a seguir, incrementar la eficacia y eficiencia de la gestión, motivar a mejorar el nivel de calidad, 
    p(data-aos="zoom-in") El plan elaborado en base a este documento permite tener de una manera organizada, priorizada y planificada las acciones de mejora. Su implantación y seguimiento debe ir orientado a que los programas, proyectos, planes o procedimientos se lleven y ejecuten de manera eficiente, eficaz y con calidad, mejorando la producción y la unidad productiva en todos los aspectos, desde la infraestructura hasta el personal. 

    separador
    #t_7_1.titulo-segundo.color-acento-contenido
      h2 7.1 Conceptos

    p(data-aos="zoom-in") Los conceptos ofrecidos por los profesionales que realizan las inspecciones en la unidad productiva hacen la verificación de cada uno de los procesos productivos, a través de la aplicación de la lista de chequeo elaborada por la autoridad competente, que en este caso es el ICA, y que está basado en la Resolución 76509 del 25 de septiembre de 2020 que es la norma vigente, y en la cual se describen cada uno de los criterios que deben ser tomados en cuenta y comparados con lo observado en la práctica productiva en el predio pecuario porcícola.

    .row.justify-content-center.mt-5
      .col-6
        a.anexo.mb-4.mb-lg-0(href="https://repositorio.sena.edu.co/sitios/gestion_produccion_porcina/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo.</b> Resolución 76509 del 25 de septiembre de 2020 

    p(data-aos="zoom-in").mt-5 Es así como se deben conocer cada uno de los criterios y los porcentajes para emitir concepto de acuerdo a los conocimientos del profesional o el equipo de profesionales quienes realizarán la ejecución del plan de implementación de las BPG, razón por la cual a continuación se exponen los diferentes criterios y porcentajes a tener en cuenta para emitir concepto en la evaluación dispuesta para certificación en las buenas prácticas ganaderas.
    p(data-aos="zoom-in") En la siguiente tabla 2 se puede observar el total de criterios que son utilizados con una lista de chequeo para la certificación de BPG para el sacrificio.

    .col-12.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-right")
      p.titulo.pb-0.mb-0 <b>Tabla 1.</b> <i>Totalización de criterios para certificación de BPG </i>

    .tabla-a.color-acento-contenido.mt-5(data-aos="fade-left")
      table
        caption Nota. Tomada de lista de chequeo para predios productores de porcinos con destino al sacrificio.
        thead
          tr
            th 
            th Total criterios
            th N.° criterios NA
            th N.° criterios a cumplir
            th % de criterios a cumplir
            th Criterios cumplidos
            th % de criterios cumplidos
        tbody
          tr
            td Fundamentales (F)
            td.text-center 23
            td 
            td 
            td.text-center 100%
            td
            td
          tr
            td Mayores (My)
            td.text-center 34
            td 
            td 
            td.text-center 80%
            td
            td
          tr
            td Menores (Mn)
            td.text-center 5
            td 
            td 
            td.text-center 60%
            td
            td

    p(data-aos="zoom-in").mt-5 Después de haber realizado el diagnóstico, implementado la lista de chequeo y tomado las medidas y acciones correctivas, el productor deberá solicitar la visita de auditoría ante el ICA para que en un tiempo no mayor a 15 días posteriores a la solicitud se le realice la visita donde a través de un informe y una lista de chequeo, se verificará el cumplimiento de lo establecido en la Resolución 76509 del 25 de septiembre del 2020. El resultado de esta visita dará el concepto de Certificable o Aplazado de acuerdo con lo siguiente: 

    .row.mt-5.justify-content-center
      .col-10
        h2 Resolución 76509 de 2020
       

    .tarjeta--container.row.mb-5
      .col-md.tarjeta(style="background-color:#314600").p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema7/img2.svg', alt='')
          
        h2.text-center.text-white Certicable
        p.text-white El concepto técnico será certificable cuando el predio cumpla con: el 100% de los criterios fundamentales, mínimo el 80% de los criterios mayores y mínimo 60 % de los criterios menores, ante lo cual se expedirá el certificado de Buenas Prácticas Ganaderas BPG en la producción porcina. (Resolución 76509 de 2020, ICA).
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema7/img3.svg', alt='')
          
        h2.text-center Aplazado
        p El concepto será aplazado, cuando el predio cumpla con menos del 100% de los criterios fundamentales, y/o menos del 80% de los criterios mayores, y/o menos del 60% de los criterios menores; las no conformidades encontradas se pueden corregir en un plazo máximo de tres (3) meses, contados a partir de la fecha de la visita. Una vez cumplidos dichos requerimientos, la persona podrá remitir la documentación pertinente o informar al ICA o a quien éste autorice, con el fin de programar una nueva visita para la auditoría del predio.

    separador
    #t_7_2.titulo-segundo.color-acento-contenido
      h2 7.2 Hallazgos

    .row.justify-content-center 
      .col
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img4.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Los hallazgos son un producto generado durante la ejecución del proceso auditor que se adelanta sobre la gestión de los procesos, actividades o procedimientos que evidencian el alcance de un plan o implementación del mismo sobre la unidad productiva en pleno. Siendo el resultado de la comparación de los parámetros establecidos por la norma o meta propuesta para alcanzar y la situación actual de la producción que se revela a través de la evaluación de cada etapa productiva, actividad u operación, incluyendo toda la información que a criterio del profesional permite identificar importante y que incide directa o indirectamente en la gestión de la unidad productiva, programa o proyecto bajo inspección que merece además ser comunicados en un informe.

    p(data-aos="zoom-in").mt-5 La mayoría de las normas técnicas que regulan los procesos de auditoría establece que dichos procesos se integran por cuatro elementos: el criterio, la condición, la causa y el efecto, los cuales se explicarán en la siguiente presentación.

    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-10 
        LineaTiempoD.color-primario
          .row(numero="1" titulo="El criterio")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema7/img5.png', alt='')

            .col-md-6.mb-4.mb-md-0
              h4 El auditor mide la condición del hecho o situación y determina cumplimientos o desviaciones.
              p Comprende la concepción de "lo que debe ser", con lo cual el auditor mide la condición del hecho o situación y determina cumplimientos o desviaciones; además, es un parámetro razonable frente al cual debe evaluarse la obtención de bienes y servicios, la prevención de riesgos de desviación de recursos, las prácticas administrativas, los sistemas de control e información y los procesos y procedimientos observados.
          

          .row(numero="2" titulo="La condición")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema7/img6.png', alt='')
            .col-md-6.mb-4.mb-md-0
              h4 La situación actual, entendida como "lo que es", encontrada por el auditor.
              p Se refiere a la situación actual, entendida como "lo que es", encontrada por el auditor al examinar un área, actividad, función, operación o transacción, mediante las verificaciones necesarias para responder los siguientes interrogantes: "qué-cuándo-dónde-cómo". La condición refleja el grado en que el criterio está siendo logrado o aplicado y de la comparación que determina la existencia de una situación irregular o deficiencia en los documentos, procesos u operaciones analizadas.
          .row(numero="3" titulo="La causa")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema7/img7.png', alt='')
            .col-md-6.mb-4.mb-md-0
              h4 El auditor debe preguntarse el porqué de cada condición.
              p Es la razón básica (o las razones) por la(s) que ocurrió la condición o también el motivo del incumplimiento del criterio. Para identificar las causas, el auditor debe preguntarse el porqué de cada condición, hasta descubrir las razones que originaron la desviación. Su identificación requiere de la habilidad y buen juicio del auditor, y es indispensable para el desarrollo de una recomendación constructiva que erradique, disminuya o prevenga la recurrencia de la condición.

          .row(numero="4" titulo="El efecto")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema7/img8.png', alt='')
            .col-md-6.mb-4.mb-md-0
              h4 Es el resultado adverso, real o potencial de la condición encontrada.
              p Es el resultado adverso, real o potencial de la condición encontrada, que provee la evidencia sobre la importancia del hallazgo y ayuda a demostrar la necesidad de adelantar acciones correctivas. En lo posible, este debe definirse en términos cuantitativos, como moneda, tiempo, unidades de producción o números de transacciones. No obstante, cuando esta definición no sea factible, ello no será una razón válida para dejar de informar la observación.

    separador
    #t_7_3.titulo-segundo.color-acento-contenido
      h2 7.3 Presentación
      
    .row.justify-content-center 
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img9.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Básicamente, un informe de gestión es un documento que demuestra el desempeño de la organización en sus distintos departamentos, incluidas las particularidades de la empresa, su rendimiento para lograr un determinado objetivo y los resultados obtenidos en un determinado período, el informe puede ser detallado o puede ser resumido dependiendo de los requerimientos, también podrá tener distintos propósitos, tales como:  identificar posibles falencias, concluir y hacer recomendaciones sobre los estudios realizados, monitorear indicadores estratégicos y comparar el desempeño, con relación a la competencia.

    .row.mt-5(data-aos="fade-right")
      .col
        .tarjeta-tema1.color-acento-contenido.p-4
          p <b>Nota:</b> esta información es crucial para la toma de decisiones, ya que la hará más asertiva y ventajosa, además, el informe permite comprender el crecimiento de la empresa en el período, lo que hace factible realinear las estrategias para lograr los objetivos deseados y puede ayudar a los socios a ponerse al día con todo lo relacionado con la empresa.

    p(data-aos="zoom-in").mt-5 No existe un modelo único y global que se pueda seguir para estructurar un informe de gestión, sin embargo, los siguientes podrían ser los elementos básicos que deben estar presentes en un informe para garantizar la integridad, la objetividad y la claridad.

    .row.justify-content-center.mt-5
      .col-4
        img(src='@/assets/curso/temas/tema7/img10.svg')
      .col-6
        .tarjeta-tema1.color-acento-botones.p-4
          p • <b>Título:</b> debe contener el nombre de la empresa, responsable de la preparación, su departamento y la fecha de entrega.
          p • <b>Resumen:</b> texto corto sobre la información, también podría considerarse una tabla de contenidos.
          p • <b>Contenidos:</b> deben seguir una secuencia lógica, empezando por la exposición de una situación, presentar los problemas y enumerar las posibles soluciones.
          p • <b>Resultados:</b> las observaciones, análisis y conclusiones del informe, deben tener tablas, gráficos y estadísticas para apoyar los argumentos.
          p • <b>Fuentes y referencias:</b> origen de los datos para una conferencia posterior, de ser necesario.

    separador
    #t_7_4.titulo-segundo.color-acento-contenido
      h2 7.4 Reporte de novedades

    .row.justify-content-center 
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img11.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p En general, se trata de situaciones observadas u ocurridas que, en determinadas circunstancias, podrían ocasionar daños personales, materiales y/o pérdidas. Asimismo, las actas pueden referirse a situaciones observadas que implican incumplimientos de normas de seguridad o convivencia.
            br
            br
            p Adicionalmente a la información relevante del evento ocurrido (fecha, hora, lugar, personas involucradas, testigos, información de contexto, fotografías, etc.) nuestros informes de novedad incluyen también un detalle de las acciones tomadas como consecuencia del hecho y recomendaciones, sugerencias u otras conclusiones que pueden indicar posibles acciones futuras para el cliente.

    .row.justify-content-center.mt-5
      .col-6
        a.anexo.mb-4.mb-lg-0(href="https://repositorio.sena.edu.co/sitios/gestion_produccion_porcina/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo.</b> Requisitos Sanitarios y de Inocuidad en la Producciòn de carne de Ganado Bovino y Porcino1.pdf
</template>

<script>
export default {
  name: 'Tema7',
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
