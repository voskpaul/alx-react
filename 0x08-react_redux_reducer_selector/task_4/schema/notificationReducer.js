import { fromJS } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = fromJS({
  notifications: {},
  filter: 'DEFAULT',
});

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.merge({
        notifications: fromJS(notificationsNormalizer(action.data).entities.notifications),
      });
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case MARK_AS_READ:
      return state.setIn(['notifications', String(action.index), 'isRead'], true);
    default:
      return state;
  }
};

