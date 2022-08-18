 
import './App.css';
import SimpleForm from './temasEspecificos/useEffect/SimpleForm';
import CounterWithCustomHooks from './temasEspecificos/useState/CounterWithCustomHooks';
import HookUseState from './temasEspecificos/useState/HookUseState';

function App() {
  return (
    <div className="App">
       <h1>Curso React</h1>
       <hr />
       <HookUseState />
       <hr></hr>
       <CounterWithCustomHooks />
       <hr></hr>
       <SimpleForm />

    </div>
  );
}

export default App;
