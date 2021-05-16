import React from "react";

import {
  Textarea,
  Label,
  Input,
  SubmitButton,
  Error,
  Success
} from "../../../components/common";
import { PostsMainFields } from "./PostsMainFields";
const CreatePostComponent = ({
  postInfo,
  handleState,
  handleArrState,
  createPost,
  cities
}) => {
  return (
    <div className="form_wrapper">
      <form>
        <div className="h_holder">
          <h3>Create a post</h3>
        </div>
        <Label>Title:</Label>
        <Input name="title" onChange={handleState} />

        <Label>Text:</Label>
        <Textarea onChange={handleState} />

        <PostsMainFields
          handleState={handleState}
          postInfo={postInfo}
          handleArrState={handleArrState}
          cities={cities}
        />
        {postInfo.error && <Error>{postInfo.error}</Error>}
        {postInfo.response && <Success>{postInfo.response}</Success>}
        <SubmitButton onClick={createPost}>Create Post</SubmitButton>
      </form>
    </div>
  );
};

export { CreatePostComponent };
