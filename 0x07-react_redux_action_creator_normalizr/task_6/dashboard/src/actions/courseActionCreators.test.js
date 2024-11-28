import {
  boundSelectCourse,
  boundUnSelectCourse,
} from './courseActionCreators';

describe('Bound Course Action Creators', () => {
  it('boundSelectCourse should dispatch the correct action', () => {
    const dispatch = jest.fn();
    boundSelectCourse(1)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: 'SELECT_COURSE', index: 1 });
  });

  it('boundUnSelectCourse should dispatch the correct action', () => {
    const dispatch = jest.fn();
    boundUnSelectCourse(1)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: 'UNSELECT_COURSE', index: 1 });
  });
});

