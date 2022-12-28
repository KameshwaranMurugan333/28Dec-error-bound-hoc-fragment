import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import { Counter } from './components/Counter';
import { FragmentCompo } from './components/Fragment';
import Heading from './components/Heading';
import SubHeading from './components/SubHeading';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      <FragmentCompo />
      <Heading />
      <SubHeading />
    </div>
  );
}

export default App;
