import React, { useEffect, useState } from "react";
import { PeopleFilter } from "./components/PeopleFilter";
import { UserCard } from "../../components/composite/UserCard";
import { List, FilterButton } from "../../components/common";
import { GET_PEOPLE } from "../../constants";
import {
  quickSort,
  comparator,
  authenticationService,
  validatePeopleFilter
} from "../../utils/";
import { getAPI } from "../services";

const SearchContainer = () => {
  const [filterIsShown, setShowFiilter] = useState(false);
  // Age state
  const [ageFrom, setAgeFrom] = useState(0);
  const [ageTo, setAgeTo] = useState(0);
  const [ageImp, setAgeImp] = useState(0);
  // Weight state
  const [weightFrom, setWeightFrom] = useState(0);
  const [weightTo, setWeightTo] = useState(0);
  const [weightImp, setWeightImp] = useState(0);
  // Height state
  const [heightFrom, setHeightFrom] = useState(0);
  const [heightTo, setHeightTo] = useState(0);
  const [heightImp, setHeightImp] = useState(0);
  // Gender state
  const [gender, setGender] = useState("");
  const [genderImp, setGenderImp] = useState(0);
  // Eye color state
  const [eyeColor, setEyeColor] = useState("");
  const [eyeColorImp, setEyeColorImp] = useState(0);
  // Hair color state
  const [hairColor, setHairColor] = useState("");
  const [hairColorImp, setHairColorImp] = useState(0);
  const [error, setError] = useState("");
  const [resultArr, setResultArr] = useState([]);

  useEffect(() => {
    const currUser = authenticationService.currentUserValue;

    getAPI({
      url: GET_PEOPLE,
      params: currUser
    })
      .then((res) => {
        const merged = mergeUsersConn(res.data.users, res.data.dirConnections);

        setResultArr(merged);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const mergeUsersConn = (users, connections) => {
    const merged = users.map((user) => {
      let newUser = { ...user, response: null };
      if (connections.length !== 0)
        connections.forEach((conn) => {
          if (conn.userId === user.id) {
            newUser.response = conn.response;
            newUser.connectionId = conn.connectionId;
          }
        });
      return newUser;
    });
    return merged;
  };

  const countPoints = (arr) => {
    const resWithPoints = arr.filter((el) => {
      let points = 0;

      const ageTonCond = ageTo > 0 ? ageTo >= el.age : true;
      const ageFromCond = ageFrom > 0 ? el.age >= ageFrom : true;

      const heightToCond = heightTo > 0 ? heightTo >= el.height : true;
      const heightFromCond = heightFrom ? el.height >= heightFrom : true;

      const weightToCond = weightTo ? weightTo >= el.weight : true;
      const weightFromCond = weightFrom ? el.weight >= weightFrom : true;

      const genderCond = gender ? el.gender === gender : false;
      const eyeColourCond = eyeColor ? el.eyeColour === eyeColor : true;
      const hairColourCond = hairColor ? el.hairColour === hairColor : true;

      if (ageTonCond && ageFromCond) points += ageImp;
      if (heightToCond && heightFromCond) points += heightImp;
      if (weightToCond && weightFromCond) points += weightImp;
      if (genderCond) points += genderImp;
      if (eyeColourCond) points += eyeColorImp;
      if (hairColourCond) points += hairColorImp;

      el.points = points;
      if (
        ageImp +
          heightImp +
          weightImp +
          eyeColorImp +
          hairColorImp +
          genderImp <
        1
      )
        return el;
      return el.points > 0;
    });
    console.log(resWithPoints);
    return resWithPoints;
  };

  const clearFilter = () => {
    setAgeFrom(0);
    setAgeTo(0);
    setAgeImp(0);
    setWeightFrom(0);
    setWeightTo(0);
    setWeightImp(0);
    setHeightFrom(0);
    setHeightTo(0);
    setHeightImp(0);
    setGender("");
    setGenderImp(0);
    setEyeColor("");
    setEyeColorImp(0);
    setHairColor("");
    setHairColorImp(0);
  };

  const onClickSearch = (e) => {
    e.preventDefault();
    const currUser = authenticationService.currentUserValue;
    const err = validatePeopleFilter(
      ageFrom,
      ageTo,
      weightTo,
      weightFrom,
      heightTo,
      heightFrom
    );
    setError(err);
    if (err) return;
    getAPI({
      url: GET_PEOPLE,
      params: currUser
    })
      .then((res) => {
        const merged = mergeUsersConn(res.data.users, res.data.dirConnections);

        const peopleWithPoints = countPoints(merged);
        const sortedPeople = quickSort(peopleWithPoints, comparator);

        setResultArr(sortedPeople);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div
        style={{
          boxShadow: "5px 5px 20px silver",
          padding: "50px",
          margin: "25px"
        }}
      >
        <h3>Search for a match</h3>

        <FilterButton
          onClick={() => {
            setShowFiilter((prev) => !prev);
          }}
        />

        {filterIsShown && (
          <PeopleFilter
            setShowFiilter={setShowFiilter}
            // Age
            ageFrom={ageFrom}
            setAgeFrom={setAgeFrom}
            ageTo={ageTo}
            setAgeTo={setAgeTo}
            ageImp={ageImp}
            setAgeImp={setAgeImp}
            // Weight
            weightFrom={weightFrom}
            setWeightFrom={setWeightFrom}
            weightTo={weightTo}
            setWeightTo={setWeightTo}
            weightImp={weightImp}
            setWeightImp={setWeightImp}
            // Height
            heightFrom={heightFrom}
            setHeightFrom={setHeightFrom}
            heightTo={heightTo}
            setHeightTo={setHeightTo}
            heightImp={heightImp}
            setHeightImp={setHeightImp}
            // Gender
            gender={gender}
            setGender={setGender}
            genderImp={genderImp}
            setGenderImp={setGenderImp}
            // Hair color
            hairColor={hairColor}
            setHairColor={setHairColor}
            hairColorImp={hairColorImp}
            setHairColorImp={setHairColorImp}
            // Eye color
            eyeColor={eyeColor}
            setEyeColor={setEyeColor}
            eyeColorImp={eyeColorImp}
            setEyeColorImp={setEyeColorImp}
            // Search
            onClickSearch={onClickSearch}
            clearFilter={clearFilter}
            error={error}
          />
        )}
      </div>
      <div className="search_result_list_wrapper">
        <List arr={resultArr} Element={UserCard} />
      </div>
    </>
  );
};
export { SearchContainer };
