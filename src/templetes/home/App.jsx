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
      <Button onButtonClick={actions.decrease} text={'Decrease'} />
      <Button onButtonClick={actions.reset} text={'Reset'} />
      <Button onButtonClick={() => actions.setCounter({ counter: 10 })} text={'Set 10'} />
      <Button onButtonClick={() => actions.setCounter({ counter: 100 })} text={'Set 100'} />
      <Button disable={state.loading} onButtonClick={actions.asyncIncrease} text={'asyncIncrease'} />
      <Button disable={state.loading} onButtonClick={actions.asyncError} text={'asyncError'} />
    </>
  );
}

export default App;
