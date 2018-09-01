import {shallow} from 'enzyme';
import React from 'react';
import sinon from 'sinon';

test('Test simulate', () => {
  const handleClick = sinon.fake();
  const wrapper = shallow(
    <div>
      <button onClick={handleClick}>Hello</button>
    </div>,
  );
  expect(wrapper.find('button')).toHaveLength(1);
  wrapper.find('button').simulate('click');
  expect(handleClick).toHaveProperty('callCount', 1);
});
