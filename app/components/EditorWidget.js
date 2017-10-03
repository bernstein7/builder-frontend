/* eslint react/no-danger: 0 */
/* eslint react/forbid-prop-types: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import safe from 'sanitize-html';

class LibraryWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      body: props.body,
      meta: props.meta,
    };
    this.dragStart = this.dragStart.bind(this);
  }

  dragStart(event) {
    event.dataTransfer.setData('text', JSON.stringify(this.state));
  }

  render() {
    const { body } = this.props;

    const style = {
      borderStyle: 'solid',
      borderWidth: '2px',
    };
    return (
      <div
        style={style}
        className="common-widget"
        draggable="true"
        onDragStart={this.dragStart}
        dangerouslySetInnerHTML={{ __html: safe(body) }}
      />
    );
  }
}

LibraryWidget.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  meta: PropTypes.object,
};

LibraryWidget.defaultProps = {
  meta: {},
};
export default LibraryWidget;
