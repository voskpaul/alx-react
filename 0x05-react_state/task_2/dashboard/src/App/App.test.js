
import React from 'react';
import { shallow, mount } from 'enzyme';
import { jest } from '@jest/globals';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, user, logOut } from './AppContext';

describe('Test App.js', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App />);
  });

  it('Renders App without crashing', () => {
    expect(wrapper.exists());
  });

  it('App component contains Notifications component', () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it('App component contains Header component', () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it('App component contains Login component', () => {
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it('App component contains Footer component', () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it('test to check that CourseList is not displayed inside App', () => {
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
});

describe("Testing <App isLoggedIn={true} />", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App/>);
  });

  it("the Login component is  included", () => {
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it("the CourseList component is included", () => {
    expect(wrapper.find('CourseList').exists());
  });
});

describe("Testing <App logOut={function} />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
    const wrapper = mount(<App logOut={()=>{console.log("ctrl and h are pressed")}}/>);
    window.alert = jest.fn();
    const inst = wrapper.instance();
    const logout = jest.spyOn(inst, 'logOut');
    const alert = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent('keydown', {bubbles:true, ctrlKey: true, key: 'h'});
    document.dispatchEvent(event);
    expect(alert).toBeCalledWith("Logging you out");
    expect(logout).toBeCalled();
    alert.mockRestore();
  });
});

describe("Testing App Component's State />", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App/>);
  });

  afterEach(() => {
		jest.clearAllMocks();
	});

  it('check if default value of displayDrawer in state is false', () => {
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('Verify that after calling handleDisplayDrawer, the state displayDrawer should now be true', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('verify that after calling handleHideDrawer, the state displayDrawer is updated to be false', () => {
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it(`Tests that the logIn function updates user's state correctly`, () => {
		wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		const myUser = {
			email: 'testy@gmail.com',
			password: 'testy',
			isLoggedIn: true,
		}

		expect(wrapper.state().user).toEqual(user);
		const instance = wrapper.instance();
		instance.logIn(myUser.email, myUser.password);
		expect(wrapper.state().user).toEqual(myUser);
		wrapper.unmount();
	})

	it(`Tests that the logOut function updates user's state correctly`, () => {
		wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		const myUser = {
			email: 'testy@gmail.com',
			password: 'testy',
			isLoggedIn: true,
		}

		expect(wrapper.state().user).toEqual(user);
		const instance = wrapper.instance();
		instance.logOut();
		expect(wrapper.state().user).toEqual(user);
		wrapper.unmount();
	})
});

