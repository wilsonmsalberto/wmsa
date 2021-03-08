import React from 'react';
import PropTypes from 'prop-types';

const LinkedinIcon = ({ title, color }) => (
  <svg width="100%" height="100%" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
    <title>{title}</title>
    <path
      fill={color}
      fillRule="nonzero"
      d="M45.377 0H3.62C1.62 0 0 1.604 0 3.582v42.837C0 48.396 1.62 50 3.62 50h41.757C47.38 50 49 48.395 49 46.42V3.581C49 1.603 47.378 0 45.377 0zM14.852 41.856h-7.4V19.28h7.4v22.577zm-3.7-25.661h-.05c-2.482 0-4.088-1.734-4.088-3.9 0-2.215 1.656-3.901 4.187-3.901 2.532 0 4.09 1.686 4.139 3.9 0 2.167-1.608 3.9-4.188 3.9zM41.54 41.856h-7.401V29.775c0-3.034-1.07-5.105-3.749-5.105-2.044 0-3.261 1.397-3.798 2.746-.195.481-.243 1.155-.243 1.83v12.61h-7.4s.097-20.462 0-22.578h7.4v3.196c.984-1.538 2.743-3.729 6.672-3.729 4.868 0 8.52 3.228 8.52 10.163v12.948h-.001z"
    />
  </svg>
);

LinkedinIcon.defaultProps = {
  color: 'currentColor',
  title: 'Linkedin Icon',
};

LinkedinIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
};

export default LinkedinIcon;
