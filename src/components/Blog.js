import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import useContentful from "../hooks/useContentful";

function Blog() {
  const posts = useContentful();

  return posts.length ? (
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
  );
}

export default Blog;
