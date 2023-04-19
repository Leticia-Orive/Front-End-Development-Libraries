//Apuntar a los hijos de un elemento usando jQuery
/* Cuando los elementos HTML se colocan un nivel debajo de otro, se denominan elementos secundarios de ese elemento. Por ejemplo, los elementos de botón en este desafío con el texto #target1, #target2y #target3son todos elementos secundarios del <div class="well" id="left-well">elemento.

jQuery tiene una función llamada children()que le permite acceder a los elementos secundarios de cualquier elemento que haya seleccionado.

Aquí hay un ejemplo de cómo usaría la children()función para dar a los niños de su left-wellelemento el color blue:

$("#left-well").children().css("color", "blue")
Dale a todos los hijos de tu right-wellelemento el color naranja.*/
//Ejercicio
/* Todos los hijos de #right-welldeben tener texto naranja.
Debe utilizar la children()función para modificar estos elementos.
Solo debe usar jQuery para agregar estas clases al elemento.*/
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");

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