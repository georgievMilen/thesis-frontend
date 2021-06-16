import React from "react";
import { PostsContainer } from "../modules/posts/PostsContainer";
import { HOCPostContainer } from "../modules/posts/HOCPostContainer";
import { POST_INITIAL_STATE, GET_MY_POSTERS } from "../constants";
const PostsWithFilter = HOCPostContainer(PostsContainer, POST_INITIAL_STATE);

const MyPostsPage = () => {
  return <PostsWithFilter isMyPost={true} url={GET_MY_POSTERS} />;
};
export { MyPostsPage };
