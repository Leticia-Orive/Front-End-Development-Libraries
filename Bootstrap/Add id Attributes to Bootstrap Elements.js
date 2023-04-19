//Agregar atributos de identificación a los elementos de Bootstrap
/* Recuerda que además de los atributos de clase, puedes darle un idatributo a cada uno de tus elementos.

Cada identificación debe ser única para un elemento específico y usarse solo una vez por página.

Démosle una identificación única a cada uno de nuestros divelementos de clase well.

Recuerda que puedes darle a un elemento una identificación como esta:

<div class="well" id="center-well">
Dale al pozo de la izquierda el id de left-well. Dale al pozo a la derecha la identificación de right-well.*/
//Ejercicio
/* Su izquierda well debe tener la identificación de left-well.
Su derecho well debe tener la identificación de right-well.*/

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>;
