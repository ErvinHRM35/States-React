import './App.css';
import {ClassComponent, ClassComponent2} from './components/classComponent';
import {FunctComponent, FunctComponent2} from './components/functionComponent' 
import ButtonComponent from './components/buttonComponent'

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <ClassComponent2 />
      <FunctComponent />
      <FunctComponent2 />
      <ButtonComponent />
    
    </div>
  );
}

export default App;
