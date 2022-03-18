import * as actionType from './action-type';
import { initialState } from '.';

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionType.INCREASE: {
      return { ...state, counter: state.counter + 1 };
    }
    case actionType.DECREASE: {
      return { ...state, counter: state.counter - 1 };
    }
    case actionType.RESET: {
      return { ...initialState };
    }
    case actionType.SET_COUNTER: {
      return { ...state, ...action.payload };
    }
    case actionType.ASYNC_INCREASE_START: {
      return { ...state, loading: true };
    }
    case actionType.ASYNC_INCREASE_END: {
      return { ...state, loading: false, counter: state.counter + 1 };
    }
    case actionType.ASYNC_INCREASE_ERROR: {
      return { ...state, loading: false };
    }
  }
  return state;
};
