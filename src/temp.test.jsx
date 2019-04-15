import React from 'react'
import { shallow, mount } from 'enzyme'
import Temp from './temp';

/**
 * @description: Axis Label unit testing
 */
// const wrapper = shallow(<Temp />)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

describe('testing temp Component', () => {

  it('matches the snapshot', () => {
    expect(shallow(<Temp />)).toMatchSnapshot()
  })
})

it('should render component correctly', () => {
  const wrapper = shallow(<Temp />)
  const tempComponent = findByTestAttr(wrapper, 'component-text')
  expect(tempComponent.length).toBe(1)
})

// it('keep only onchange func', () => {
//   const onChangeMock = jest.fn();
//   const event = {
//     preventDefault() {},
//     target: { value: 'jhon whick' },
//   };
//   DateInputComponent = mount(<Temp {...props} />).find('value');

//   const  wrapper = shallow(<Temp onChange={onChangeMock} />)
//   wrapper.find('TextField').at('0').simulate('change', event);
//   expect(onChangeMock).toBeTruthy();
// })


it('keep only onchange func', () => {
  const onChangeMock = jest.fn();
  const event = {
    preventDefault() {},
    target: { value: 'heisenberg' },
  };
  const  wrapper = shallow(<Temp onChange={onChangeMock} />)
  wrapper.find('TextField').at('0').simulate('change', event);
  expect(wrapper.find('TextField').props().value).toEqual('heisenberg');
})

//-------------------------------------------------------------------------------------------
// it('check the onChange callback', () => {  
//   const onChange = jest.fn(),
//       props = {
//           value: 'rohan',
//           onChange
//       },
//       DateInputComponent = mount(<Temp {...props} />).find('value');
//   DateInputComponent.simulate('change', { target: {value: 'jhon wick'} });
//   expect(onChange).toHaveBeenCalledWith('jhonwick');
// });