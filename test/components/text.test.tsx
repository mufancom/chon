import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import {Text} from '../../src/components/text';

Enzyme.configure({adapter: new Adapter()});

describe('<Text />', () => {
  it('render a Text', () => {
    const wrapper = shallow(<Text>hello</Text>);
    expect(wrapper.text()).toEqual('hello');
  });
});
