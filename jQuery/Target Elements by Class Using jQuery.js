//Elementos de destino por clase usando jQuery
/* ¿Ves cómo hicimos que todos tus buttonelementos reboten? Los seleccionamos con $("button"), luego les agregamos algunas clases de CSS con .addClass("animated bounce");.

Acaba de usar .addClass()la función de jQuery, que le permite agregar clases a los elementos.

Primero, apuntemos a sus divelementos con la clase wellusando el $(".well")selector.

Tenga en cuenta que, al igual que con las declaraciones CSS, escribe a .antes del nombre de la clase.

Luego use .addClass()la función de jQuery para agregar las clases animatedy shake.

Por ejemplo, podría hacer que todos los elementos con la clase text-primarytiemblen agregando lo siguiente a su document ready function:

$(".text-primary").addClass("animated shake");*/
//Ejercicio
/* Debe usar la addClass()función jQuery para dar las clases animatedy shake todos sus elementos con la clase well.
Solo debe usar jQuery para agregar estas clases al elemento.*/
<script>
  $(document).ready(function() {
    $(".well").addClass("animated bounce");
    $(".well").addClass("shake");
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>