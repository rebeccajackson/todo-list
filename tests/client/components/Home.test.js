import React from 'react'
import { shallow, mount } from 'enzyme'

import {Home} from '../../../client/containers/Home'

describe('<Home />', () => {
  const todos = 
    [{
      0: {
        id:1,
        task: 'Test Home',
        category: 'Study' 
      },
      1: {
        id:2,
        task: 'Test App',
        category: 'Study' 
      }
    }]
  

  it('renders h1 title', () => {
    const wrapper = shallow(
    <Home todos={todos} getAllTodos={()=>{}}/>
    )

    let expected = 'Todo List'
    let actual = wrapper.find('h1').text();

    expect(actual).toEqual(expected)
  });

})