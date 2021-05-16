import React from "react";
import { List } from "../../../components/common";

import { PostsMainFields } from "./PostsMainFields";
import { FilterButton, SubmitButton } from "../../../components/common";

const PostsComponent = ({
  showFilter,
  filterIsVisible,
  filterPosts,
  postInfo,
  handleState,
  handleArrState,
  cities,
  Element,
  filtered,
  ...other
}) => {
  return (
    <>
      <FilterButton onClick={showFilter} />
      {filterIsVisible && (
        <div className="form_wrapper">
          <form>
            <div className="h_holder">
              <h3>Filter posts</h3>
            </div>
            <PostsMainFields
              postInfo={postInfo}
              handleState={handleState}
              handleArrState={handleArrState}
              cities={cities}
            />
            <SubmitButton onClick={filterPosts}>Apply filter</SubmitButton>
          </form>
        </div>
      )}
      <List arr={filtered} Element={Element} {...other} />
    </>
  );
};

export { PostsComponent };
