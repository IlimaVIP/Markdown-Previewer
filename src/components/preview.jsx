import React, { Component } from 'react';
export default class Preview extends Component {
    render() {
      // console.log(this.props)
      return (
         <div className="preview_wrap">
           <p className="title">This is the result you will get: </p>
           <div id="preview" dangerouslySetInnerHTML={this.props.marked}></div>
         </div>
      )
    }
  }