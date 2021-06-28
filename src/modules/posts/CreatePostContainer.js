import React from "react";
import { PostFormComponent } from "./components/PostFormComponent";
import { SubmitButton } from "../../components/common";
import { authenticationService, validatePost } from "../../utils";
import { CREATE_POSTER } from "../../constants";

import { postAPI } from "../services";

const CreatePostContainer = ({
  postInfo,
  cities,
  handleState,
  handleArrState,
  dispatch,
  handleFileState
}) => {
  const createPost = (e) => {
    e.preventDefault();

    const errs = validatePost(postInfo.data);
    const localStorageEmail = authenticationService.currentUserValue;

    dispatch({
      type: "form/failure",
      payload: errs
    });
    if (errs) return;

    const data = new FormData();
    data.append("email", localStorageEmail);
    data.append("file", postInfo.data.selectedImage);
    data.append("title", postInfo.data.title);
    data.append("text", postInfo.data.text);
    data.append("type", postInfo.data.type);
    if ([postInfo.data.ageFrom === ""]) data.append("age_from", null);
    else data.append("age_from", postInfo.data.ageFrom);
    if (postInfo.data.ageTo === "") data.append("age_to", null);
    else data.append("age_to", postInfo.data.ageTo);
    data.append("genders", postInfo.data.genders);

    data.append("imageName", postInfo.data.imageName);
    data.append("country", postInfo.data.country);
    data.append("cities", [...postInfo.data.cities]);
    postAPI({
      url: CREATE_POSTER,
      data: data
    })
      .then((res) => {
        dispatch({
          type: "form/success",
          payload: res.data
        });
        dispatch({
          type: "form/reset"
        });
      })
      .catch((err) => {
        dispatch({
          type: "form/failure",
          payload: "Something when wrong!"
        });
        // Handle error
      });
  };

  return (
    <div>
      <div className="h_holder">
        <h3>Create a post</h3>
      </div>
      <PostFormComponent
        postInfo={postInfo}
        cities={cities}
        handleState={handleState}
        handleArrState={handleArrState}
        handleFileState={handleFileState}
      />
      <div
        className="people_s_btn"
        style={{ paddingTop: "30px", display: "flex" }}
      >
        <SubmitButton onClick={createPost}>Create Post</SubmitButton>
      </div>
    </div>
  );
};
export { CreatePostContainer };
