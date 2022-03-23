import React from 'react';
import { useCounterContext } from '../../context/CounterContext';

export const Heading = () => {
  //eslint-disable-next-line
  const [state, actions] = useCounterContext();
  return <h1 style={{ fontSize: '50px' }}>{state.counter}</h1>;
};
