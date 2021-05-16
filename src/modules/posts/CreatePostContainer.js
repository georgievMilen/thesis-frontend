import React from "react";
import { CreatePostComponent } from "./components/CreatePostComponent";
import { authenticationService, validatePost } from "../../utils";
import { CREATE_POSTER } from "../../constants";

import { postAPI } from "../services";

const CreatePostContainer = ({
  postInfo,
  cities,
  handleState,
  handleArrState,
  dispatch
}) => {
  const createPost = (e) => {
    e.preventDefault();
    const errs = validatePost(postInfo.data);
    dispatch({
      type: "form/failure",
      payload: errs
    });
    if (errs) return;
    const localStorageEmail = authenticationService.currentUserValue;
    const data = {
      email: localStorageEmail,
      title: postInfo.data.title,
      text: postInfo.data.text,
      type: postInfo.data.type,
      age_from: postInfo.data.ageFrom,
      age_to: postInfo.data.ageTo,
      image: postInfo.data.image,
      genders: postInfo.data.genders,
      country: postInfo.data.country,
      cities: postInfo.data.cities
    };
    postAPI({
      url: CREATE_POSTER,
      data: data
    })
      .then((res) => {
        dispatch({
          type: "form/success",
          payload: res.data
        });
        // dispatch({
        //   type: "form/reset"
        // });
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
      <CreatePostComponent
        postInfo={postInfo}
        cities={cities}
        handleState={handleState}
        handleArrState={handleArrState}
        createPost={createPost}
      />
    </div>
  );
};
export { CreatePostContainer };
