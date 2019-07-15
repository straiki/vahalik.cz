import * as ContentfulApi from "contentful";
import { SET_IS_FETCHING, SET_POSTS, UPDATE_DELTA } from "./constants";

export const setPosts = posts => ({ type: SET_POSTS, posts });
export const setIsFetching = isFetching => ({
  type: SET_IS_FETCHING,
  isFetching
});

const client = ContentfulApi.createClient({
  accessToken: "D4OTmAC0fgNvE82bW5PseaRt-HewN7m0D_YHYv_qfAM",
  space: "3pkik9xfea9m"
});

export const fetchPostsIfNeeded = () => {
  return async (dispatch, getState) => {
    const { posts, isFetching, lastUpdate } = getState();
    const now = new Date().valueOf();

    if ((!posts.length || now - lastUpdate >= UPDATE_DELTA) && !isFetching) {
      dispatch(setIsFetching(true));

      const entries = await client.getEntries();

      const result = entries.items.map(item => {
        return { ...item.fields, id: item.sys.id };
      });
      if (result.length) {
        dispatch(setPosts(result));
      } else {
        dispatch(setPosts(null));
      }
      dispatch(setIsFetching(false));
    }
  };
};
