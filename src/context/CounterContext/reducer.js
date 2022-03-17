import * as actionType from './action-type';
export const reducer = (state, action) => {
  switch (actionType.type) {
    case actionType.INCREASE: {
      return { ...state, counter: state.counter + 1 };
    }
  }
  return { ...state };
};
