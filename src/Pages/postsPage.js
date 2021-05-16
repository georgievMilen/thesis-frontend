import React from "react";
import { PostsContainer } from "../modules/posts/PostsContainer";
import { HOCPostContainer } from "../modules/posts/MainPostContainer";
import { GET_ALL_POSTERS } from "../constants";

const PostsWithFilter = HOCPostContainer(PostsContainer);

const PostsPage = () => {
  return <PostsWithFilter isMyPost={false} url={GET_ALL_POSTERS} />;
};
export { PostsPage };
