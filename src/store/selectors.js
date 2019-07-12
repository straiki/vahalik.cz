import { createSelector } from "reselect";
import { shallowEqual, useSelector } from "react-redux";

const getPosts = state => {
  return state.posts;
};
const getSlug = (_, slug) => slug;

export const getBlogPosts = createSelector(
  [getPosts, getSlug],
  (posts, slug) => {
    return slug ? posts.filter(item => !slug || item.slug === slug) : posts;
  }
);

export const useShallowEqualSelector = selector =>
  useSelector(selector, shallowEqual);
