import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// import promiseMiddleware from "redux-promise-middleware";
import { fetchPostsIfNeeded } from "./actions";

const mockStore = configureMockStore([thunk]);

const DAY_MS = 60 * 60 * 24 * 1000;

describe("Actions", () => {
  it("fetchPostsIfNeeded from clear state", async () => {
    let store = mockStore({
      posts: [],
      lastUpdate: new Date().valueOf(),
      isFetching: false
    });

    await store.dispatch(fetchPostsIfNeeded());
    const actions = store.getActions();

    expect(actions[0].type).toBe("SET_IS_FETCHING");
    expect(actions[0].isFetching).toBe(true);
    expect(actions[1].type).toBe("SET_POSTS");
    expect(actions[1].posts.length).toBe(1);
    expect(actions[2].type).toBe("SET_IS_FETCHING");
    expect(actions[2].isFetching).toBe(false);
  });

  it("fetchPostsIfNeeded when data are prefetched", async () => {
    let store = mockStore({
      posts: [{ test: "Not Empty array" }],
      lastUpdate: new Date().valueOf(),
      isFetching: false
    });

    await store.dispatch(fetchPostsIfNeeded());

    const actions = store.getActions();

    expect(actions.length).toBe(0);
  });

  it("fetchPostsIfNeeded isFetching -> true", async () => {
    let store = mockStore({
      posts: [], // Empty data
      lastUpdate: new Date().valueOf(),
      isFetching: true
    });

    await store.dispatch(fetchPostsIfNeeded());

    const actions = store.getActions();

    expect(actions.length).toBe(0);
  });

  it("fetchPostsIfNeeded data are not valid", async () => {
    const now = new Date().valueOf();
    let store = mockStore({
      posts: [{ test: "Not Empty array" }], // Empty data
      lastUpdate: now - DAY_MS * 10,
      isFetching: false
    });

    await store.dispatch(fetchPostsIfNeeded());

    const actions = store.getActions();

    expect(actions.length).toBe(3);
  });
});
