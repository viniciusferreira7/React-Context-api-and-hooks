import { useCounterContext } from '../../context/CounterContext';
import './App.css';

function App() {
  //eslint-disable-next-line
  const [state, actions] = useCounterContext();
  console.log(state);

  return (
    <>
      <div className="App">oi</div>
      <button onClick={() => actions.increase()}>Click</button>
    </>
  );
}

export default App;
// fazer o adventures hoje
