import { connect } from "react-redux";
import { getBlogPosts } from "../store/selectors";
import { withRouter } from "react-router-dom";
import BlogPost from "./BlogPost";

const mapStateToProps = (state, { match: params }) => {
  return {
    posts: getBlogPosts(state, params.slug)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(BlogPost)
);
