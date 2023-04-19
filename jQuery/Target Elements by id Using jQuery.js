//Elementos de destino por id usando jQuery
/* También puede orientar elementos por sus atributos de identificación.

Primero apunte a su buttonelemento con la identificación target3usando el $("#target3")selector.

Tenga en cuenta que, al igual que con las declaraciones CSS, escribe a #antes del nombre de la identificación.

Luego use .addClass()la función de jQuery para agregar las clases animatedy fadeOut.

Así es como haría que el buttonelemento con la identificación target6se desvaneciera:

$("#target6").addClass("animated fadeOut");*/
//Ejercicio
/* Debe seleccionar el buttonelemento con el idde target3y usar la addClass()función jQuery para darle la clase de animated.
Debe apuntar al elemento con la identificación target3 y usar la función jQuery addClass() para darle la clase fadeOut.
Solo debe usar jQuery para agregar estas clases al elemento.*/

<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("fadeOut");

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
