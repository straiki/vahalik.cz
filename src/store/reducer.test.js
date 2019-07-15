import reducer from "./reducer";

describe("Reducers", () => {
  it("SET_IS_FETCHING", () => {
    let state;
    state = reducer(
      {
        posts: [
          {
            title: "First post",
            slug: "first-post",
            content: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: "First content will be here! :)  ❤️",
                      nodeType: "text"
                    }
                  ],
                  nodeType: "paragraph"
                }
              ],
              nodeType: "document"
            },
            id: "WdQIGKenBRHVKHvumrp9Z"
          }
        ],
        lastUpdate: 1562936723621,
        isFetching: true
      },
      { type: "SET_IS_FETCHING", isFetching: false }
    );
    expect(state).toEqual({
      posts: [
        {
          title: "First post",
          slug: "first-post",
          content: {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: "First content will be here! :)  ❤️",
                    nodeType: "text"
                  }
                ],
                nodeType: "paragraph"
              }
            ],
            nodeType: "document"
          },
          id: "WdQIGKenBRHVKHvumrp9Z"
        }
      ],
      lastUpdate: 1562936723621,
      isFetching: false
    });
  });
  it("SET_POSTS", () => {
    let state = reducer(
      { posts: [], lastUpdate: 1562936721676, isFetching: true },
      {
        type: "SET_POSTS",
        posts: [
          {
            title: "First post",
            slug: "first-post",
            content: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: "First content will be here! :)  ❤️",
                      nodeType: "text"
                    }
                  ],
                  nodeType: "paragraph"
                }
              ],
              nodeType: "document"
            },
            id: "WdQIGKenBRHVKHvumrp9Z"
          }
        ]
      }
    );
    expect(state.lastUpdate).not.toEqual(1562936721676);
    state.lastUpdate = null; //

    expect(state).toEqual({
      posts: [
        {
          title: "First post",
          slug: "first-post",
          content: {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: "First content will be here! :)  ❤️",
                    nodeType: "text"
                  }
                ],
                nodeType: "paragraph"
              }
            ],
            nodeType: "document"
          },
          id: "WdQIGKenBRHVKHvumrp9Z"
        }
      ],
      lastUpdate: null,
      isFetching: true
    });
  });
});
