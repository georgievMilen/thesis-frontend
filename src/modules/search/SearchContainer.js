import React, { useState } from "react";
import { SearchComponent } from "./components/SearchComponent";
import { SearchResultList } from "./components/SearchResultList";
import { searchForPeople } from "./services/SearchService";
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

  const [tempResultArr, setTempResultArr] = useState([]);
  // const resultArr = [
  //   {
  //     first_name: "Donka",
  //     last_name: "Marieva",
  //     age: "20",
  //     gender: "female",
  //     weight: 58,
  //     height: 175,
  //     eye_color: "brown",
  //     hair_color: "blond"
  //   },
  //   {
  //     first_name: "Deni",
  //     last_name: "Ilchava",
  //     age: "20",
  //     gender: "female",
  //     weight: 58,
  //     height: 175,
  //     eye_color: "dark",
  //     hair_color: "black"
  //   },
  //   {
  //     first_name: "Desi",
  //     last_name: "Ruseva",
  //     age: "20",
  //     gender: "female",
  //     weight: 58,
  //     height: 175,
  //     eye_color: "blue",
  //     hair_color: "blond"
  //   }
  // ];

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

  const checkForCorrectness = () => {
    if (maxAge && weight && height && eyeColor && hairColor) {
      setError(0);
      return 0;
    }
    setError(1);
    return 1;
  };

  const onClickSearch = (e) => {
    e.preventDefault();
    const check = checkForCorrectness();
    if (check) return;
    searchForPeople(
      {
        maxAge,
        maxAgeImp,
        weight,
        weightImp,
        height,
        heightImp,
        eyeColor,
        eyeColorImp,
        hairColor,
        hairColorImp
      },
      (resultArr, error) => {
        if (resultArr.length < 1)
          console.log(
            "Shown 'No match found message' where results should be",
            { tempResultArr }
          );
        // setTempResultArr(resultArr);
      }
    );
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
        <SearchResultList resultArr={[]} />
      </div>
    </>
  );
};
export { SearchContainer };
