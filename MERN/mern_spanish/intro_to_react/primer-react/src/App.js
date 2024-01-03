import Lista from './components/MiPrimerReact/Lista';
import FelizCumpleanos from './components/PoniendoTodoJunto/FelizCumpleanos';

function App() {
  return (
    <div className="App">
      {/* <Lista/> */}
      <FelizCumpleanos nombre={'Gustavo'} apellido={'Cubilla'} edad={35} color={'green'} />
    </div>
  );
}

export default App;
