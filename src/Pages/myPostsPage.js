import React from "react";
import { PostsContainer } from "../modules/posts/PostsContainer";
import { HOCPostContainer } from "../modules/posts/MainPostContainer";
import { GET_MY_POSTERS } from "../constants";
const PostsWithFilter = HOCPostContainer(PostsContainer);

const MyPostsPage = () => {
  return <PostsWithFilter isMyPost={true} url={GET_MY_POSTERS} />;
};
export { MyPostsPage };
