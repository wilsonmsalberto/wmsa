import React from 'react';
import { PropTypes } from 'prop-types';

// Styles
import { Row as StyledRow, Column as StyledColumn } from './styles';

const Row = ({ children, className }) => (
  <div css={StyledRow} className={className}>
    {children}
  </div>
);

const Column = ({ children, className }) => (
  <div css={StyledColumn} className={className}>
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Row.defaultProps = {
  className: undefined,
};

Column.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Column.defaultProps = {
  className: undefined,
};

export { Row, Column };
