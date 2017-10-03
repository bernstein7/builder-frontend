/* eslint react/prefer-stateless-function: 0 */
/* eslint react/forbid-prop-types: 0 */

import React from 'react';
import PropTypes from 'prop-types';

import LibraryWidget from './LibraryWidget';

const Library = ({ widgets }) => {
  const style = {
    width: '20%',
    float: 'left',
    marginLeft: '15px',
  };
  return (
    <div style={style} className="widgets-library">
      <h2>Library</h2>
      {
        widgets.map(widget => <LibraryWidget key={widget.id} {...widget} />)
      }
    </div>
  );
};

Library.propTypes = {
  widgets: PropTypes.array.isRequired,
};
export default Library;
