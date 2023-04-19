//Eliminar sus funciones jQuery
/* Estas animaciones eran geniales al principio, pero ahora empiezan a distraer un poco.

Elimine estas tres funciones de jQuery de su archivo document ready function, pero déjelo document ready function intacto.*/
//Ejercicio
/* Las tres funciones de jQuery deben eliminarse de su archivo document ready function.
Debes dejar tu script elemento intacto.
Debes dejar tu $(document).ready(function() {al comienzo de tu script elemento.
Debe dejar intacto el document.ready cierre de la función }).
Debe dejar script intacta la etiqueta de cierre de su elemento.*/
<script>
  $(document).ready(function() {
    

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
