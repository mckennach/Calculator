import { SAVE_VALUE } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  loading: true
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_VALUE:
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
}
