import * as React from "react";
import BlogItem from "./BlogItem";
import Loading from "../components/Loading";
import { Redirect } from "react-router-dom";
import { getBlogPosts, useShallowEqualSelector } from "../store/selectors";

function BlogPost({ match: { params } }) {
  const posts = useShallowEqualSelector(state =>
    getBlogPosts(state, params.slug)
  );

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
