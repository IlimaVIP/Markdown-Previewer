import React, { Component } from 'react';
export default class Editor extends Component {
    render() {
      // console.log('Counter', this.props);
      return (
         <div className="editor_wrap">
          <div className="form-group">
            <label for="editor" className="title">Write something here: </label>
            <textarea className="form-control" id="editor" onChange={this.props.newText} value={this.props.textSet}></textarea>
          </div>
        </div>
      )
    }
  }