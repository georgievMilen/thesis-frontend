import React from "react";
import { CreatePostContainer } from "../modules/posts/CreatePostContainer";
import { HOCPostContainer } from "../modules/posts/HOCPostContainer";
import { POST_INITIAL_STATE } from "../constants";
const CreatePost = HOCPostContainer(CreatePostContainer, POST_INITIAL_STATE);
const CreatePostPage = () => {
  return <CreatePost />;
};
export { CreatePostPage };
