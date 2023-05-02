//Use Array.filter() para filtrar dinámicamente una matriz
/* El mapmétodo de matriz es una herramienta poderosa que usará con frecuencia cuando trabaje con React. Otro método relacionado con mapes filter, que filtra el contenido de una matriz en función de una condición y luego devuelve una nueva matriz. Por ejemplo, si tiene una serie de usuarios que tienen una propiedad online que se puede establecer en trueo false, puede filtrar solo aquellos usuarios que están en línea escribiendo:

let onlineUsers = users.filter(user => user.online);
En el editor de código, MyComponent's statese inicializa con una matriz de usuarios. Algunos usuarios están en línea y otros no. Filtre la matriz para ver solo a los usuarios que están en línea. Para hacer esto, primero use filterpara devolver una nueva matriz que contenga solo los usuarios cuya onlinepropiedad es true. Luego, en la renderOnlinevariable, asigne la matriz filtrada y devuelva un lielemento para cada usuario que contenga el texto de su archivo username. Asegúrate de incluir uno único keytambién, como en los últimos desafíos.*/
//Ejercicio
/* MyComponent debe existir y mostrarse en la página.
MyComponent El estado de debe inicializarse en una matriz de seis usuarios.
MyComponent debe devolver un div, un h1 y luego una lista desordenada que contiene lielementos para cada usuario cuyo estado en línea se establece en true.
MyComponent debe representar li elementos que contengan la usernamede cada usuario en línea.
Cada elemento de la lista debe tener un keyatributo único.*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: "Jeff",
          online: true,
        },
        {
          username: "Alan",
          online: false,
        },
        {
          username: "Mary",
          online: true,
        },
        {
          username: "Jim",
          online: false,
        },
        {
          username: "Sara",
          online: true,
        },
        {
          username: "Laura",
          online: true,
        },
      ],
    };
  }
  render() {
    const usersOnline = this.state.users.filter((user) => user.online === true); // change code here
    const renderOnline = usersOnline.map((user) => (
      <li key={user.username}>{user.username}</li>
    )); // change code here
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
