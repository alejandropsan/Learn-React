import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting'
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo3 from './hooks/Ejemplo3';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente propio Greeting.jsx */}
        {/*<Greeting name="Alejandro"></Greeting>*/}

        {/*Componente de ejemplo funcional */}
        {/*<GreetingF name="Alejandro"></GreetingF>*/} 
        
        

        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}

        {/* <Ejemplo4 nombre="Alejandro"> */}
        {/* Todo lo que hay aquí dentro es tratado como props.children */}
          {/* <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}

        {/* <GreetingStyled name="Alejandro"></GreetingStyled> */}
        
        {/* GESTION DE EVENTOS */}
        {/* <Father></Father> */}
      {/* </header> */}

      {/* Ejemplos de renderizado condicional */}
      <OptionalRender></OptionalRender>

        {/* PROYECTO FINAL */}
      {/*Componente de Listado de Tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}

export default App;
