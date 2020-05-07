import { actions } from './actions';

const initialState = {
  list: [],
  selectedPost: {},
  isListLoaded: false,
}

export const postReducer = (state = initialState, action) => {

  switch (action.type) {
    case actions.fetchAll:
      return {
        ...state,
        list: action.payload,
        isListLoaded: true,
      };

    case actions.fetchOne:
      return {
        ...state,
        selectedPost: action.payload,
      };

    case actions.create:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case actions.update:
      return {
        ...state,
        list: state.list.map(
          post => post.id !== action.payload.id ? post : action.payload
        )
      };

    case actions.delete:
      return {
        ...state,
        list: state.list.filter(post => post.id !== action.payload)
      };

    default:
      return state;
  }
}