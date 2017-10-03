/* eslint react/no-danger: 0 */

import React, { Component } from 'react';
import EditorWidget from './EditorWidget';

// import safe from 'sanitize-html';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      widgets: [],
    };
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrop(event) {
    event.preventDefault();
    const data = JSON.parse(event.dataTransfer.getData('text'));
    const newWidgets = this.state.widgets;
    newWidgets.push(Object.assign({}, data, { timeStamp: Date.now() }));
    this.setState({
      widgets: newWidgets,
    });
  }

  render() {
    const containerStyle = {
      width: '75%',
      float: 'left',
    };
    const areaStyle = {
      borderStyle: 'solid',
      borderWidth: '2px',
      height: '800px',
    };

    return (
      <div style={containerStyle} className="editor-container">
        <h2>Editor</h2>
        <div
          style={areaStyle}
          onDragOver={event => event.preventDefault()}
          onDrop={this.handleDrop}
          className="editor-area"
        >
          {
            this.state.widgets.map(widget => <EditorWidget key={widget.timeStamp} {...widget} />)
          }
        </div>
      </div>
    );
  }
}

export default Editor;
