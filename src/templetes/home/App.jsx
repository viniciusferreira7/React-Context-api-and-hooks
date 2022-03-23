import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../context/CounterContext';
import './App.css';

function App() {
  //eslint-disable-next-line
  const [state, actions] = useCounterContext();
  console.log(state);

  return (
    <>
      <Heading />
      <Button onButtonClick={actions.increase} text={'Increase'} />
    </>
  );
}

export default App;
