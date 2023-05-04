//Avanzando desde aquí
/* ¡Felicidades! Terminaste las lecciones sobre React y Redux. Hay un último elemento que vale la pena señalar antes de continuar. Por lo general, no escribirá aplicaciones React en un editor de código como este. Este desafío le da una idea de cómo se ve la sintaxis si está trabajando con npm y un sistema de archivos en su propia máquina. El código debe tener un aspecto similar, excepto por el uso de importdeclaraciones (estas incorporan todas las dependencias que se le han proporcionado en los desafíos). La sección "Gestión de paquetes con npm" cubre npm con más detalle.

Finalmente, escribir código React y Redux generalmente requiere alguna configuración. Esto puede complicarse rápidamente. Si está interesado en experimentar en su propia máquina, la aplicación Create React viene configurada y lista para usar.

Alternativamente, puede habilitar Babel como un preprocesador de JavaScript en CodePen, agregar React y ReactDOM como recursos externos de JavaScript y trabajar allí también.

Registre el mensaje 'Now I know React and Redux!'en la consola.*/
//Ejercicios
/*El mensaje Now I know React and Redux!debe registrarse en la consola.*/
/*
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
*/

// Only change code below this line
console.log("Now I know React and Redux!");
