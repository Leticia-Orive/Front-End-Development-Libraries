//Hacer que las imágenes respondan a los dispositivos móviles
/* Primero, agregue una nueva imagen debajo de la existente. Establezca su srcatributo en https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg.

Sería genial si esta imagen pudiera ser exactamente del ancho de la pantalla de nuestro teléfono.

Afortunadamente, con Bootstrap, todo lo que tenemos que hacer es agregar la img-responsiveclase a su imagen. Haga esto, y la imagen debe ajustarse perfectamente al ancho de su página.

*/
//Ejercicio
/* Debes tener un total de dos imágenes.
Su nueva imagen debe estar debajo de la anterior y tener la clase img-responsive.
Tu nueva imagen no debe tener la clase smaller-image.
Tu nueva imagen debe tener una srcextensión de https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg.
Su nuevo img elemento debe tener un soporte de ángulo de cierre.*/

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
  <h2 class="red-text">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive">
  
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
