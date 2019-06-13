import * as React from "react";
import BlogItem from "./BlogItem";
import Loading from "./Loading";
import useContentful from "./useContentful";

/**
 * @return {string}
 */
function BlogPost(props) {
  const post = useContentful(props.match.params.slug);

  return post.length ? <BlogItem {...post[0]} /> : <Loading />;
}

export default BlogPost;
