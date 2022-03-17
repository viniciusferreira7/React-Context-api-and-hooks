import { useCounterContext } from '../../context/CounterContext';
import './App.css';

function App() {
  //eslint-disable-next-line
  const [state, dispatch] = useCounterContext();

  return <div className="App">oi</div>;
}

export default App;
