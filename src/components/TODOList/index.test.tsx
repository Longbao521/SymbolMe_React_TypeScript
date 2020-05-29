import TODOList from './index';
import React from 'react';
import { shallow, render, mount } from 'enzyme'
import renderer from 'react-test-renderer'
const props = {
    list: ['first', 'second'],
    deleteTodo: jest.fn(),
};

const setup = () => {
    const wrapper = shallow(<TODOList {...props} />);
    return {
        props,
        wrapper,
    };
};

const setupByRender = () => {
    const wrapper = render(<TODOList {...props} />);
    return {
        props,
        wrapper,
    };
};

const setupByMount = () => {
    const wrapper = mount(<TODOList {...props} />);
    return {
        props,
        wrapper,
    };
};

it('should has Button', () => {
    const { wrapper } = setup();
    expect(wrapper.find('Button').length).toBe(2);
  });
  
  it('should render 2 item', () => {
    const { wrapper } = setupByRender();
    expect(wrapper.find('button').length).toBe(2);
  });
  
  it('should render item equal', () => {
    const { wrapper } = setupByMount();
    wrapper.find('.item-text').forEach((node, index) => {
      expect(node.text()).toBe(wrapper.props().list[index])
    });
  });
  
//   it('click item to be done', () => {
//     const { wrapper } = setupByMount();
//     wrapper.find('Button').at(0).simulate('click');
//     expect(props.deleteTodo).toBeCalled();
//   });

  it('calls componentDidMount', () => {
    const componentDidMountSpy = jest.spyOn(TODOList.prototype, 'componentDidMount');
    const { wrapper } = setup();
    expect(componentDidMountSpy).toHaveBeenCalled();
    componentDidMountSpy.mockRestore();
  });
  it('calls component handleTest', () => { // class中使用箭头函数来定义方法
    const { wrapper } = setup();
    const spyFunction = jest.spyOn(wrapper.instance(), 'handleTest');
    wrapper.instance().handleTest();
    expect(spyFunction).toHaveBeenCalled();
    spyFunction.mockRestore();
  });
  
  it('calls component handleTest2', () => { //在constructor使用bind来定义方法
    const spyFunction = jest.spyOn(TODOList.prototype, 'handleTest2');
    const { wrapper } = setup();
    wrapper.instance().handleTest2();
    expect(spyFunction).toHaveBeenCalled();
    spyFunction.mockRestore();
  });
  it('renders correctly', () => {
    const tree = renderer
    .create(<TODOList {...props} />)
            .toJSON();
  
    expect(tree).toMatchSnapshot();
  });
