import * as ContentfulApi from "contentful";

export const SET_POSTS = "SET_POSTS";

export const setPosts = posts => ({ type: SET_POSTS, posts });

const client = ContentfulApi.createClient({
  accessToken: "D4OTmAC0fgNvE82bW5PseaRt-HewN7m0D_YHYv_qfAM",
  space: "3pkik9xfea9m"
});

export const fetchPostsIfNeeded = () => {
  return (dispatch, getState) => {
    const { posts } = getState();

    // noinspection SuspiciousTypeOfGuard
    if (!posts.length && posts !== null) {
      client.getEntries().then(entries => {
        const result = entries.items.map(item => {
          return { ...item.fields, id: item.sys.id };
        });
        if (result.length) {
          dispatch(setPosts(result));
        } else {
          dispatch(setPosts(null));
        }
      });
    }
  };
};
