//Deshazte de CSS personalizado para Bootstrap
/* Podemos limpiar nuestro código y hacer que nuestra aplicación Cat Photo se vea más convencional usando los estilos integrados de Bootstrap en lugar de los estilos personalizados que creamos anteriormente.

No se preocupe, habrá mucho tiempo para personalizar nuestro CSS más adelante.

Elimine las declaraciones .red-text, py .smaller-imageCSS de su style elemento para que las únicas declaraciones que queden en su style elemento sean h2y thick-green-border.

Luego elimine el p elemento que contiene un enlace muerto. Luego elimine la red-textclase de su h2 elemento y reemplácela con la text-primaryclase Bootstrap.

Finalmente, elimine la smaller-imageclase de su primer img elemento y reemplácelo con la img-responsiveclase.*/
//Ejercicio
/* Tu h2 elemento ya no debería tener la clase red-text.
Tu h2 elemento ahora debería tener la clase text-primary.
Sus  elementos de párrafo ya no deberían usar la fuente Monospace.
La smaller-imageclase debe eliminarse de la imagen superior.
Debe agregar la img-responsiveclase a su imagen superior.*/
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
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="img-responsive" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
