import {shallow} from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import {Button} from '../../src/components/button';

describe('<Button />', () => {
  it('render a Button', () => {
    // const handleClick = sinon.fake();
    // const wrapper = shallow(<Button compType="text">Hello</Button>);
    // expect(wrapper.find('button')).toHaveLength(1);
    // wrapper.find('button').simulate('click');
    // expect(handleClick).toHaveProperty('callCount', 1);
  });

  it('simulates click events', () => {
    // const handleClick = sinon.fake();
    // const wrapper = shallow(<Button onClick={handleClick} />);
    // expect(wrapper.find('span')).toHaveLength(0);
    // wrapper.find(Button).simulate('click');
    // expect(handleClick).toHaveProperty('callCount', 1);
  });
});
