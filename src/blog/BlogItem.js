import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const BlogItem = props => (
  <>
    <h1>{props.title}</h1>
    {documentToReactComponents(props.content)}
  </>
);

export default BlogItem;
