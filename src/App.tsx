
import './App.css';
import { FirstChildModel, ParentModel, SecondChildModel } from './models';
import { ModelProvider } from './hooks';
import { Parent, FirstChild, SecondChild } from './components';

const parent = new ParentModel();
const first = new FirstChildModel();
const second = new SecondChildModel();

function App() {
  return (
    <div className="App">
      <ModelProvider value={parent}>
        <Parent />
      </ModelProvider>

      <ModelProvider value={first}>
        <FirstChild />
      </ModelProvider>

      <ModelProvider value={second}>
        <SecondChild />
      </ModelProvider>
    </div>
  );
}

export default App;
