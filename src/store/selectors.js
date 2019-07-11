import { createSelector } from "reselect";

const getPosts = state => {
  return state.posts;
};
const getSlug = (state, slug) => {
  return slug;
};

export const getBlogPosts = createSelector(
  [getPosts, getSlug],
  (posts, slug) => {
    return slug ? posts.filter(item => !slug || item.slug === slug) : posts;
  }
);
