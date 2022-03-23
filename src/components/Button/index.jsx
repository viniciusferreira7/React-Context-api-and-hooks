import P from 'prop-types';

import React from 'react';

export const Button = ({ text, onButtonClick }) => {
  return (
    <button style={{ fontSize: '35px' }} onClick={onButtonClick}>
      {' '}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: P.string.isRequired,
  onButtonClick: P.func.isRequired,
};
