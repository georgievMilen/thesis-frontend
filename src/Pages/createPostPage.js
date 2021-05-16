import React from "react";
import { CreatePostContainer } from "../modules/posts/CreatePostContainer";
import { HOCPostContainer } from "../modules/posts/MainPostContainer";
const CreatePost = HOCPostContainer(CreatePostContainer);
const CreatePostPage = () => {
  return <CreatePost />;
};
export { CreatePostPage };
