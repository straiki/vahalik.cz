import * as React from "react";
import BlogItem from "./BlogItem";
import Loading from "../components/Loading";
import useContentful from "../hooks/useContentful";
import { Redirect } from "react-router-dom";

/**
 * @return {string}
 */
function BlogPost(props) {
  const post = useContentful(props.match.params.slug);

  return post ? (
    post.length ? (
      <BlogItem {...post[0]} />
    ) : (
      <Loading />
    )
  ) : (
    <Redirect to={"/blog"} />
  );
}

export default BlogPost;
