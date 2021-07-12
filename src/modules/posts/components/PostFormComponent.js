import React from "react";

import {
  Textarea,
  Label,
  Input,
  Error,
  Success,
  FileInput
} from "../../../components/common";
import { PostFilterFields } from "./PostFilterFields";
const PostFormComponent = ({
  postInfo,
  handleState,
  handleArrState,
  cities,
  handleFileState
}) => {
  return (
    <div className="form_wrapper">
      <form>
        <Label>Title:</Label>
        <Input
          name="title"
          type="text"
          value={postInfo.data.title}
          onChange={handleState}
        />

        <Label>Text:</Label>
        <Textarea value={postInfo.data.text} onChange={handleState} />

        <div className="form-group">
          <div className="profile_info_holder">
            <FileInput setSelectedImage={handleFileState} />
          </div>
        </div>

        <PostFilterFields
          handleState={handleState}
          postInfo={postInfo}
          handleArrState={handleArrState}
          cities={cities}
        />
        {postInfo.error && <Error>{postInfo.error}</Error>}
        {postInfo.response && <Success>{postInfo.response}</Success>}
      </form>
    </div>
  );
};

export { PostFormComponent };
