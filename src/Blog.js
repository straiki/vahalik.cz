import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import useContentful from "./useContentful";

function Blog() {
  const posts = useContentful();

  return (
    <Fragment>
      {posts.length ? (
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
      )}
    </Fragment>
  );
}

export default Blog;
