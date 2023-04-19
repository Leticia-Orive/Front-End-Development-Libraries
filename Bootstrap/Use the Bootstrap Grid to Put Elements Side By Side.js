//Use la cuadrícula de Bootstrap para poner  elementos uno al lado del otro
/* Bootstrap utiliza un sistema de cuadrícula de 12 columnas receptivo, lo que facilita colocar  elementos en filas y especificar el ancho relativo de cada  elemento. La mayoría de las clases de Bootstrap se pueden aplicar a un div elemento.

Bootstrap tiene diferentes atributos de ancho de columna que usa según el ancho de la pantalla del usuario. Por ejemplo, los teléfonos tienen pantallas angostas y las computadoras portátiles tienen pantallas más anchas.

Tomemos, por ejemplo, la clase de Bootstrap col-md-*. Aquí, mdsignifica medio, y *es un número que especifica cuántas columnas de ancho debe tener el  elemento. En este caso, se está especificando el ancho de columna de un  elemento en una pantalla de tamaño medio, como una computadora portátil.

En la aplicación Cat Photo que estamos creando, usaremos col-xs-*, donde xssignifica extrapequeño (como la pantalla de un teléfono móvil extrapequeño) y *es el número de columnas que especifica cuántas columnas de ancho debe tener el  elemento.

Coloque los botones Like, Infoy Deleteuno al lado del otro anidando los tres dentro de un <div class="row"> elemento, luego cada uno de ellos dentro de un <div class="col-xs-4"> elemento.

La rowclase se aplica a un div, y los propios botones se pueden anidar dentro de ella.*/
//Ejercicio
/* Todos sus botones deben estar anidados dentro del mismo div elemento con la clase row.
Cada uno de sus botones de Bootstrap debe estar anidado dentro de su propio div elemento con la clase col-xs-4.
Cada uno de sus button elementos debe tener una etiqueta de cierre.
Cada uno de sus div elementos debe tener una etiqueta de cierre.*/
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
