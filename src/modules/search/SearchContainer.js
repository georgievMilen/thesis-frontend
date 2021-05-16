import React, { useState } from "react";
import { SearchComponent } from "./components/SearchComponent";
import { List } from "../../components/common/List";
import { SEARCH_URL } from "../../constants";
import { getAPI } from "../services";

const SearchContainer = () => {
  // Max age state
  const [maxAge, setMaxAge] = useState(0);
  const [maxAgeImp, setMaxAgeImp] = useState(50);
  // Weight state
  const [weight, setWeight] = useState(0);
  const [weightImp, setWeightImp] = useState(50);
  // Height state
  const [height, setHeight] = useState(0);
  const [heightImp, setHeightImp] = useState(50);
  // Eye color state
  const [eyeColor, setEyeColor] = useState("");
  const [eyeColorImp, setEyeColorImp] = useState(50);
  // Hair color state
  const [hairColor, setHairColor] = useState("");
  const [hairColorImp, setHairColorImp] = useState(50);

  const [resultArr, setResultArr] = useState([]);

  const [error, setError] = useState(0);

  // Max Age handlers
  const handleMaxAge = ({ target }) => {
    setMaxAge(target.value);
  };
  const handleMaxAgeImp = ({ target }) => {
    setMaxAgeImp(target.value);
  };

  // Weight handlers
  const handleWeight = ({ target }) => {
    setWeight(target.value);
  };
  const handleWeightImp = ({ target }) => {
    setWeightImp(target.value);
  };
  // Height handlers
  const handleHeight = ({ target }) => {
    setHeight(target.value);
  };
  const handleHeightImp = ({ target }) => {
    setHeightImp(target.value);
  };

  // Eye Color handlers
  const handleEyeColor = ({ target }) => {
    setEyeColor(target.value);
  };
  const handleEyeColorImp = ({ target }) => {
    setEyeColorImp(target.value);
  };
  // Hair Color handlers
  const handleHairColor = ({ target }) => {
    setHairColor(target.value);
  };
  const handleHairColorImp = ({ target }) => {
    setHairColorImp(target.value);
  };

  // const countPoints = (arr) => {
  //   let resWithPoints = [];
  //   resWithPoints = arr.map((el) => {
  //     let points = 0;
  //     if (el.age <= maxAge) points += maxAgeImp;
  //     if (el.eye_colour === eyeColor) points += eyeColorImp;
  //     if (el.hair_colour === hairColor) points += hairColorImp;
  //     if (el.height <= height) points += heightImp;
  //     if (el.weight <= weight) points += weightImp;
  //     return { ...el, points };
  //   });
  //   return resWithPoints;
  // };

  // const swap = (arr, leftIndex, rightIndex) => {
  //   const temp = arr[leftIndex];
  //   arr[leftIndex] = arr[rightIndex];
  //   arr[rightIndex] = temp;
  // };

  // const partition = (arr, left, right) => {
  //   let pivot = arr[right];
  //   let i = left - 1;

  //   for (let j = left; j <= right; j++) {
  //     if (arr[j].points >= pivot.points) {
  //       i++;
  //       swap(arr, i, j);
  //     }
  //   }

  //   swap(arr, i + 1, right);
  //   return i + 1;
  // };

  // const quickSortPoints = (arr, p, r) => {
  //   if (p < r) {
  //     let q;
  //     q = partition(arr, p, r);

  //     // quickSortPoints(arr, p, q - 1);
  //     // quickSortPoints(arr, q + 1, r);
  //   }
  // };

  const onClickSearch = (e) => {
    e.preventDefault();

    getAPI({
      url: SEARCH_URL
    })
      .then((res) => {
        //   const resWithPoints = countPoints(res.data);

        //   quickSortPoints(resWithPoints, 0, resWithPoints.length - 1);
        setResultArr(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <SearchComponent
        // max age
        maxAge={maxAge}
        handleMaxAge={handleMaxAge}
        maxAgeImp={maxAgeImp}
        handleMaxAgeImp={handleMaxAgeImp}
        // weight
        weight={weight}
        weightImp={weightImp}
        handleWeight={handleWeight}
        handleWeightImp={handleWeightImp}
        // height
        height={height}
        heightImp={heightImp}
        handleHeight={handleHeight}
        handleHeightImp={handleHeightImp}
        // eye color
        eyeColor={eyeColor}
        eyeColorImp={eyeColorImp}
        handleEyeColor={handleEyeColor}
        handleEyeColorImp={handleEyeColorImp}
        // hair color
        hairColor={hairColor}
        hairColorImp={hairColorImp}
        handleHairColor={handleHairColor}
        handleHairColorImp={handleHairColorImp}
        // button on click
        onClickSearch={onClickSearch}
        // error
        error={error}
      />
      <div className="search_result_list_wrapper">
        <List resultArr={resultArr} />
      </div>
    </>
  );
};
export { SearchContainer };
