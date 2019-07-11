import * as React from "react";
import BlogItem from "./BlogItem";
import Loading from "../components/Loading";
import { Redirect } from "react-router-dom";

/**
 * @return {string}
 */
function BlogPost({ posts }) {
  return posts ? (
    posts.length ? (
      <BlogItem {...posts[0]} />
    ) : (
      <Loading />
    )
  ) : (
    <Redirect to={"/blog"} />
  );
}

export default BlogPost;
