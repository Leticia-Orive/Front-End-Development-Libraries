//Obtenga el estado de la tienda Redux
/* El objeto de la tienda Redux proporciona varios métodos que le permiten interactuar con él. Por ejemplo, puede recuperar el stateobjeto actual que se encuentra en el almacén de Redux con el getState()método.

El código del desafío anterior se vuelve a escribir de forma más concisa en el editor de código. Úselo store.getState()para recuperar el statede storey asignarlo a una nueva variable currentState.*/
//Ejercicio
/* La tienda Redux debe tener un valor de 5 para el estado inicial.
Debe existir una variable currentStatey se le debe asignar el estado actual de la tienda Redux.*/
const store = Redux.createStore((state = 5) => state);

// Change code below this line
let currentState = store.getState();
