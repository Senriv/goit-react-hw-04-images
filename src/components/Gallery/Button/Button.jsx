import React from 'react';
import PropTypes from 'prop-types';
import { BtnWrapper, Btn } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <BtnWrapper>
      <Btn type="button" onClick={onClick}>
        Load more
      </Btn>
    </BtnWrapper>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
