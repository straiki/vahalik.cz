import React from "react";
import { Link, Redirect } from "react-router-dom";
import Loading from "../components/Loading";
import useContentful from "../hooks/useContentful";

function Blog() {
  const posts = useContentful();

  return posts ? (
    posts.length ? (
      <div>
        {" "}
        {posts.map((item, index) => {
          return (
            <Link key={index} to={item.slug}>
              {item.title}
            </Link>
          );
        })}
      </div>
    ) : (
      <Loading />
    )
  ) : (
    <Redirect to={"/"} />
  );
}

export default Blog;
