//Diríjase al padre de un elemento usando jQuery
/* Cada elemento HTML tiene un parentelemento a partir del cual inherits propiedades.

Por ejemplo, su jQuery Playground h3elemento tiene el elemento principal de <div class="container-fluid">, que a su vez tiene el elemento principal body.

jQuery tiene una función llamada parent()que le permite acceder al padre de cualquier elemento que haya seleccionado.

Aquí hay un ejemplo de cómo usaría la parent()función si quisiera darle al elemento principal del left-wellelemento un color de fondo azul:

$("#left-well").parent().css("background-color", "blue")
Dale al padre del #target1elemento un color de fondo rojo.*/
//Ejercicio
/*Su left-wellelemento debe tener un fondo rojo.
Debe utilizar la .parent() función para modificar este elemento.
El .parent() método debe llamarse en el #target1 elemento.
Solo debe usar jQuery para agregar estas clases al elemento. */

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");

  });
</script>

<!-- Only change code above this line -->

<body>
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
</body>