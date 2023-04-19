//Utilice un diseño receptivo con contenedores de fluidos Bootstrap
/* En la sección HTML5 y CSS de freeCodeCamp creamos una aplicación Cat Photo. Ahora volvamos a eso. Esta vez, le aplicaremos un estilo utilizando el popular marco CSS receptivo de Bootstrap.

Bootstrap averiguará qué tan ancha es su pantalla y responderá cambiando el tamaño de sus  elementos HTML, de ahí el nombre de diseño receptivo .

Con un diseño receptivo, no hay necesidad de diseñar una versión móvil de su sitio web. Se verá bien en dispositivos con pantallas de cualquier ancho.

Puede agregar Bootstrap a cualquier aplicación agregando el siguiente código en la parte superior de su HTML:

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
En este caso, ya lo hemos agregado para usted a esta página entre bastidores. Tenga en cuenta que es aceptable usar >o />para cerrar la linketiqueta.

Para comenzar, debemos anidar todo nuestro HTML (excepto la linketiqueta y el style elemento) en un div elemento con la clase container-fluid.*/
//Ejercicio
/* Tu div elemento debe tener la clase container-fluid.
Su div elemento debe tener una etiqueta de cierre.
Todos los  elementos HTML después de la styleetiqueta de cierre deben estar anidados en .container-fluid.*/

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
