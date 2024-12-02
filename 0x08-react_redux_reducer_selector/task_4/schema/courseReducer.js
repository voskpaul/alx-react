import { fromJS } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = fromJS({
  courses: {},
});

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return state.merge({
        courses: fromJS(coursesNormalizer(action.data).entities.courses),
      });
    case SELECT_COURSE:
      return state.setIn(['courses', String(action.index), 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn(['courses', String(action.index), 'isSelected'], false);
    default:
      return state;
  }
};

