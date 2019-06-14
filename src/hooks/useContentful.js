import { useEffect, useState } from "react";
import * as ContentfulApi from "contentful";

const client = ContentfulApi.createClient({
  accessToken: "D4OTmAC0fgNvE82bW5PseaRt-HewN7m0D_YHYv_qfAM",
  space: "3pkik9xfea9m"
});

function useContentful(slug) {
  const [posts, setPosts] = useState([]);

  useEffect(
    () => {
      client.getEntries().then(entries => {
        const result = entries.items
          .filter(item => !slug || item.fields.slug === slug)
          .map(item => {
            return { ...item.fields, id: item.sys.id };
          });
        if (result.length) {
          setPosts(result);
        } else {
          setPosts(null);
        }
      });
    },
    [slug]
  );

  return posts;
}

export default useContentful;
