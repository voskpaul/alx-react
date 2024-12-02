import { notificationReducer } from '../../src/reducers/notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../../src/actions/notificationActionTypes';
import { fromJS } from 'immutable';

describe('notificationReducer', () => {
  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'Notification 1' },
      ],
    };
    const expectedState = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, type: 'default', value: 'Notification 1' },
      },
    });

    expect(notificationReducer(undefined, action).toJS()).toEqual(expectedState.toJS());
  });
});

