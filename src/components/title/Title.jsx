import React from 'react';
import { PropTypes } from 'prop-types';

// Styles
import { Title as StyledTitle } from './styles';

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

export default Title;
