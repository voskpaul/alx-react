import {
  boundMarkAsRead,
  boundSetNotificationFilter,
} from './notificationActionCreators';

describe('Bound Notification Action Creators', () => {
  it('boundMarkAsRead should dispatch the correct action', () => {
    const dispatch = jest.fn();
    boundMarkAsRead(1)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: 'MARK_AS_READ', index: 1 });
  });

  it('boundSetNotificationFilter should dispatch the correct action', () => {
    const dispatch = jest.fn();
    boundSetNotificationFilter('DEFAULT')(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_TYPE_FILTER', filter: 'DEFAULT' });
  });
});

