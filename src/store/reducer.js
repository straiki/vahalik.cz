import { SET_IS_FETCHING, SET_POSTS } from "./constants";

const persistedStore = JSON.parse(localStorage.getItem("persistedStore")) || {};

const defaultState = {
  posts: [],
  lastUpdate: new Date().valueOf(),
  isFetching: false,
  ...persistedStore
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
        lastUpdate: new Date().valueOf()
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    default:
      return state;
  }
}

export default reducer;
