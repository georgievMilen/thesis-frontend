import React, { useEffect, useState } from "react";
import { PostsComponent } from "./components/PostsComponent";
import { Post } from "../../components/composite";
import { getAPI } from "../services/";
import { authenticationService } from "../../utils";

const PostsContainer = ({ postInfo, cities, url, ...other }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filterIsVisible, setFilterIsVisible] = useState(false);

  const handlePosts = (data) => {
    const [posters, genders, regions] = data;
    const populatedPosts = posters.map((poster) => {
      Object.assign(poster, { genders: [] }, { country: "" }, { cities: [] });

      genders.filter((gender) => {
        if (gender.poster_id === poster.id)
          return poster.genders.push(gender.name);
      });
      regions.filter((region) => {
        if (region.poster_id === poster.id) {
          poster.country = region.country;
          poster.cities.push(region.city);
        }
      });
      return poster;
    });

    setAllPosts(populatedPosts);
    setFiltered(populatedPosts);
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
  }, []);

  const filterPosts = (e) => {
    e.preventDefault();
    const tempFiltered = [...allPosts];
    const spliceIDs = [];

    if (postInfo.data.type !== "") {
      allPosts.forEach((post) => {
        if (post.type !== postInfo.data.type) spliceIDs.push(post.id);
      });
    }

    if (postInfo.data.ageFrom !== null) {
      const ageFrom = parseInt(postInfo.data.ageFrom);
      allPosts.forEach((post) => {
        if (post.age_from < ageFrom) spliceIDs.push(post.id);
      });
    }

    if (postInfo.data.ageTo !== null) {
      const ageTo = parseInt(postInfo.data.ageTo);

      allPosts.forEach((post) => {
        if (post.age_to > ageTo) spliceIDs.push(post.id);
      });
    }

    if (postInfo.data.genders.length > 0) {
      allPosts.forEach((post) => {
        let genderIncluded = false;
        postInfo.data.genders.forEach((gender) => {
          if (post.genders.includes(gender)) genderIncluded = true;
        });

        if (genderIncluded === false) spliceIDs.push(post.id);
      });
    }

    if (postInfo.data.country !== "") {
      allPosts.forEach((post) => {
        if (post.country !== postInfo.data.country) spliceIDs.push(post.id);
      });
    }

    if (postInfo.data.cities.length > 0) {
      allPosts.forEach((post) => {
        let cityIncluded = false;
        postInfo.data.cities.forEach((city) => {
          if (post.cities.includes(city)) cityIncluded = true;
        });

        if (cityIncluded === false) spliceIDs.push(post.id);
      });
    }

    spliceIDs.forEach((id) => {
      const index = tempFiltered.findIndex((post) => post.id === id);
      if (index > -1) tempFiltered.splice(index, 1);
    });

    setFiltered(tempFiltered);
  };

  const showFilter = () => {
    setFilterIsVisible((prevState) => !prevState);
  };

  return (
    <>
      <PostsComponent
        showFilter={showFilter}
        filterIsVisible={filterIsVisible}
        filterPosts={filterPosts}
        postInfo={postInfo}
        cities={cities}
        filtered={filtered}
        Element={Post}
        {...other}
      />
    </>
  );
};
export { PostsContainer };
