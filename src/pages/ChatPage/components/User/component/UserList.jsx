import React, { Component } from 'react';
import { Typography } from '@material-ui/core';


class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
handler = data => {
    const {GetUsers} = data;
    const id = GetUsers.map(e => e.id)
    return id;
}

  render() {
      
      console.log(this.props);
      const {data} = this.props;
      const {GetUsers} = data;
      return (
      <>
        <div>
            {GetUsers.map(e => e.name)}
            {/* {this.handler(data)} */}
            </div>
      </>
    );
  }
}
export default UserList;
