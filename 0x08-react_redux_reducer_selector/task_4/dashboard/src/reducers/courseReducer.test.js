import { courseReducer } from '../../src/reducers/courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../../src/actions/courseActionTypes';
import { fromJS } from 'immutable';

describe('courseReducer', () => {
  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'Course 1' },
        { id: 2, name: 'Course 2' },
      ],
    };
    const expectedState = fromJS({
      1: { id: 1, name: 'Course 1' },
      2: { id: 2, name: 'Course 2' },
    });

    expect(courseReducer(undefined, action).toJS()).toEqual(expectedState.toJS());
  });
});

