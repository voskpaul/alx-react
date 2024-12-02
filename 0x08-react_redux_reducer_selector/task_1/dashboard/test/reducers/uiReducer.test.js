import { uiReducer } from '../../src/reducers/uiReducer';
import { Map } from 'immutable';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from '../../src/actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  });

  it('should return the initial state when no action is passed', () => {
    const newState = uiReducer(undefined, {});
    expect(newState.toJS()).toEqual(initialState.toJS());
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER action', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const newState = uiReducer(initialState, action);
    expect(newState.get('isNotificationDrawerVisible')).toBe(true);
  });

  it('should handle HIDE_NOTIFICATION_DRAWER action', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const newState = uiReducer(initialState, action);
    expect(newState.get('isNotificationDrawerVisible')).toBe(false);
  });
});

