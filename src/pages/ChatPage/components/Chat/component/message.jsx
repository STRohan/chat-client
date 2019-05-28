import React, { Component } from 'react';
import { Typography } from '@material-ui/core';


class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
handler = data => {
    const {AllChat} = data;
    const id = AllChat.map(e => e.id)
    return id;
}

  render() {
      
      console.log(this.props);
      const {data} = this.props;
      const {GetChat} = data;
      return (
      <>
        <div>
            {GetChat.map(e => e.message)}
            {/* {this.handler(data)} */}
            </div>
      </>
    );
  }
}
export default Message;
