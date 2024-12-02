// src/selectors/notificationSelector.test.js
import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notificationSelector', () => {
  const state = fromJS({
    filter: 'DEFAULT',
    notifications: [
      { id: 1, isRead: true, message: 'Notification 1' },
      { id: 2, isRead: false, message: 'Notification 2' },
      { id: 3, isRead: false, message: 'Notification 3' },
    ],
  });

  it('filterTypeSelected should return the filter type', () => {
    const result = filterTypeSelected(state);
    expect(result).toEqual('DEFAULT');
  });

  it('getNotifications should return the list of notifications', () => {
    const result = getNotifications(state);
    expect(result.toJS()).toEqual([
      { id: 1, isRead: true, message: 'Notification 1' },
      { id: 2, isRead: false, message: 'Notification 2' },
      { id: 3, isRead: false, message: 'Notification 3' },
    ]);
  });

  it('getUnreadNotifications should return unread notifications', () => {
    const result = getUnreadNotifications(state);
    expect(result.toJS()).toEqual([
      { id: 2, isRead: false, message: 'Notification 2' },
      { id: 3, isRead: false, message: 'Notification 3' },
    ]);
  });
});

