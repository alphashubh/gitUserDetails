import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import App from '../app';
import Input from '../input';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('A suite', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />).contains(   <div >
                <center><h1 className="jumbotron p-3  bg-dark text-white">React-Redux-Rest</h1></center>
                <Input />
            </div>  )).toBe(true);
  });


});