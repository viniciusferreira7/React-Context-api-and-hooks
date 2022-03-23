import P from 'prop-types';
import { createContext, useContext, useReducer, useRef } from 'react';
import { buildAction } from './build-actions';
import { reducer } from './reducer';

const Context = createContext();

export const initialState = {
  counter: 0,
  loading: false,
};

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const action = useRef(buildAction(dispatch));
  return <Context.Provider value={[state, action.current]}>{children}</Context.Provider>;
};

CounterContextProvider.propTypes = {
  children: P.node,
};

export const useCounterContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined')
    throw new Error('You have to use useCounterContext inside <Context.Provider></Context.Provider>');

  return [...context];
};
