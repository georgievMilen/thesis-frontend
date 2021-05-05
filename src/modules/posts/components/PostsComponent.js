import React from "react";
import { FilterButton, List } from "../../../components/common";
import { Post } from "../../../components/post";

const PostsComponent = () => {
  const postsArr = [
    {
      id: 1,
      user: "Fists Last 5",
      title: "post1",
      image: "someURL",
      type: "acquaintance",
      text: "Text of post.",
      ageFrom: null,
      ageTo: 30
    },
    {
      id: 2,
      user: "Fists Last 5",
      title: "post2",
      image: "someURL",
      type: "acquaintance",
      text: "Text of post.",
      ageFrom: null,
      ageTo: 30
    },
    {
      id: 3,
      user: "Fists Last 5",
      title: "post3",
      image: "someURL",
      type: "acquaintance",
      text: "Text of post.",
      ageFrom: null,
      ageTo: 30
    },
    {
      id: 4,
      user: "Fists Last 5",
      title: "post1",
      image: "someURL",
      type: "acquaintance",
      text: "Text of post.",
      ageFrom: null,
      ageTo: 30
    },
    {
      id: 5,
      user: "Fists Last 5",
      title: "post1",
      image: "someURL",
      type: "acquaintance",
      text: "Text of post.",
      ageFrom: null,
      ageTo: 30
    }
  ];
  return (
    <div className="posts-component-wrapper">
      {/* <div className="posts-filter-bnt">
        <FilterButton onClick={toggleFilter} />
        <div className={postsClssName}>
          <PostsFilter props={filterProps} />
        </div>
      </div> */}
      <div className="posts-list">
        <List arr={postsArr} Element={Post} />
      </div>
    </div>
  );
};

export { PostsComponent };
