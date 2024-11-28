import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest, loginSuccess, loginFailure, LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should dispatch LOGIN and LOGIN_SUCCESS on successful API call', () => {
    fetchMock.getOnce('/dist/login-success.json', {
      body: {},
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: '1234' } },
      { type: LOGIN_SUCCESS },
    ];

    const store = mockStore({});
    return store
      .dispatch(loginRequest('test@example.com', '1234'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should dispatch LOGIN and LOGIN_FAILURE on failed API call', () => {
    fetchMock.getOnce('/dist/login-success.json', 404);

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: '1234' } },
      { type: LOGIN_FAILURE },
    ];

    const store = mockStore({});
    return store
      .dispatch(loginRequest('test@example.com', '1234'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

