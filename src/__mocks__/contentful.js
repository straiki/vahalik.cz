export function createClient() {
  return {
    getEntries: jest.fn(() => Promise.resolve(data))
  };
}

const data = {
  sys: {
    type: "Array"
  },
  total: 1,
  skip: 0,
  limit: 100,
  items: [
    {
      sys: {
        space: {
          sys: {
            type: "Link",
            linkType: "Space",
            id: "3pkik9xfea9m"
          }
        },
        id: "WdQIGKenBRHVKHvumrp9Z",
        type: "Entry",
        createdAt: "2019-06-07T12:31:43.652Z",
        updatedAt: "2019-06-07T12:31:43.652Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment"
          }
        },
        revision: 1,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "vahalik.cz"
          }
        },
        locale: "en-US"
      },
      fields: {
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
        }
      }
    }
  ]
};
