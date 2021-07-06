import React, { useEffect, useState } from "react";
import { Post } from "../../components/composite";
import { FilterButton, SubmitButton } from "../../components/common";
import { List } from "../../components/common";
import { PostFilterFields } from "./components/PostFilterFields";
import { getAPI } from "../services/";
import { authenticationService, postsFilter } from "../../utils";

const PostsContainer = ({
  postInfo,
  cities,
  url,
  handleState,
  handleArrState,
  ...other
}) => {
  const [allPosts, setAllPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filterIsVisible, setFilterIsVisible] = useState(false);

  const handlePosts = (data) => {
    const [posters, genders, regions, connections] = data;

    const populatedPosts = posters.map((poster) => {
      Object.assign(poster, { genders: [] }, { country: "" }, { cities: [] });

      genders.forEach((gender) => {
        if (gender.poster_id === poster.postId)
          return poster.genders.push(gender.name);
      });
      regions.forEach((region) => {
        if (region.poster_id === poster.postId) {
          poster.country = region.country;
          poster.cities.push(region.city);
        }
      });
      connections.forEach((connection) => {
        if (connection.poster_id === poster.postId) {
          poster.conn_res = connection.response;
        }
      });
      return poster;
    });
    setAllPosts(populatedPosts);
    setFiltered(populatedPosts);
  };

  const filterPosts = (e) => {
    e.preventDefault();
    const tempFiltered = postsFilter(allPosts, postInfo);
    setFiltered(tempFiltered);
  };

  const showFilter = () => {
    setFilterIsVisible((prevState) => !prevState);
  };

  useEffect(() => {
    const localStorageEmail = authenticationService.currentUserValue;
    getAPI({ url: url, params: localStorageEmail })
      .then((res) => {
        const data = [...res.data];

        handlePosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);
  return (
    <>
      <FilterButton onClick={showFilter} />
      {filterIsVisible && (
        <div className="form_wrapper">
          <div className="h_holder">
            <h3>Filter posts</h3>
          </div>
          <PostFilterFields
            postInfo={postInfo}
            handleState={handleState}
            handleArrState={handleArrState}
            cities={cities}
          />
          <SubmitButton onClick={filterPosts}>Apply filter</SubmitButton>
        </div>
      )}
      <div className="search_result_list_wrapper">
        <List arr={filtered} Element={Post} {...other} />
      </div>
    </>
  );
};
export { PostsContainer };
