import React from "react";
import { PostsContainer } from "../modules/posts/PostsContainer";
import { HOCPostContainer } from "../modules/posts/HOCPostContainer";
import { GET_ALL_POSTERS, POST_INITIAL_STATE } from "../constants";

const PostsWithFilter = HOCPostContainer(PostsContainer, POST_INITIAL_STATE);

const PostsPage = () => {
  return <PostsWithFilter isMyPost={false} url={GET_ALL_POSTERS} />;
};
export { PostsPage };
