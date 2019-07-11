import { SET_POSTS } from "./actions";

const persistedStore = JSON.parse(localStorage.getItem("persistedStore")) || {};

const defaultState = {
  posts: [],
  ...persistedStore
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    default:
      return state;
  }
}

export default reducer;
