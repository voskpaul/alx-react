import { notificationReducer } from '../../src/reducers/notificationReducer';

describe('notificationReducer', () => {
  it('should return the default state', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual({
      filter: "DEFAULT",
      notifications: []
    });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: 'FETCH_NOTIFICATIONS_SUCCESS',
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
      ]
    };
    const state = notificationReducer(undefined, action);
    expect(state.notifications).toEqual([
      { id: 1, type: 'default', value: 'New course available', isRead: false },
      { id: 2, type: 'urgent', value: 'New resume available', isRead: false }
    ]);
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
      ]
    };
    const action = { type: 'MARK_AS_READ', index: 1 };
    const state = notificationReducer(initialState, action);
    expect(state.notifications[0].isRead).toBe(true);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = { type: 'SET_TYPE_FILTER', filter: 'URGENT' };
    const state = notificationReducer(undefined, action);
    expect(state.filter).toBe('URGENT');
  });
});

