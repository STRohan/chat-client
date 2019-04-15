import React, { Component } from 'react';
import './App.css';
import Multiselect from 'multiselect-dropdown-react';

const data = [{
  name: 'one',
  value: 'one'
},
{
    name: 'two',
    value: 'two'
  },
  {
    name: 'three',
    value: 'three'
  },
  {
    name: 'four',
    value: 'four'
  },
  {
    name: 'five',
    value: 'five'
  },
  {
    name: 'six',
    value: 'six'
  }];
class Selectr extends Component {
  
  
  result(params) {
    console.log(params);
  }
  render() {
    return (
      <>
      <div className="App">
        <Multiselect options={data} onSelectOptions={this.result} />
        {/* <Multiselect options={data} onSelectOptions={this.result} />      */}
      </div>
      <div>Hiiiiii</div>
    </>
    );
  }
}

export default Selectr;