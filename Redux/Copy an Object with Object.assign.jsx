//Copie un objeto con Object.assign
/* Los últimos desafíos funcionaron con matrices, pero también hay formas de ayudar a hacer cumplir la inmutabilidad del estado cuando el estado es un object. Una herramienta útil para el manejo de objetos es la Object.assign()utilidad. Object.assign()toma un objeto de destino y objetos de origen y asigna propiedades de los objetos de origen al objeto de destino. Las propiedades coincidentes se sobrescriben con las propiedades de los objetos de origen. Este comportamiento se usa comúnmente para hacer copias superficiales de objetos al pasar un objeto vacío como primer argumento seguido de los objetos que desea copiar. Aquí hay un ejemplo:

const newObject = Object.assign({}, obj1, obj2);
Esto crea newObjectcomo nuevo object, que contiene las propiedades que existen actualmente en obj1y obj2.

El estado y las acciones de Redux se modificaron para manejar un objectpara el state. Edite el código para devolver un nuevo stateobjeto para acciones con tipo ONLINE, que establece la statuspropiedad en la cadena online. Trate de usar Object.assign()para completar el desafío.*/
//Ejercicio
/* La tienda Redux debe existir e inicializarse con un estado equivalente al defaultStateobjeto declarado en la línea 1.
wakeUpy immutableReducerambos deben ser funciones.
El envío de una acción de tipo ONLINEdebe actualizar la propiedad statusen el estado onliney NO debe cambiar el estado.
Object.assigndebe usarse para devolver un nuevo estado.*/

const defaultState = {
  user: "CamperBot",
  status: "offline",
  friends: "732,982",
  community: "freeCodeCamp",
};

const immutableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ONLINE":
      // Don't mutate state here or the tests will fail
      return Object.assign({}, state, { status: "online" });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: "ONLINE",
  };
};

const store = Redux.createStore(immutableReducer);
