import React, { useEffect, useState } from "react";
import { PeopleFilter } from "./components/PeopleFilter";
import { UserCard } from "../../components/composite/UserCard";
import { List, FilterButton } from "../../components/common";
import { GET_PEOPLE } from "../../constants";
import { quickSort, comparator, authenticationService } from "../../utils/";
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
  // Eye color state
  const [eyeColor, setEyeColor] = useState("");
  const [eyeColorImp, setEyeColorImp] = useState(0);
  // Hair color state
  const [hairColor, setHairColor] = useState("");
  const [hairColorImp, setHairColorImp] = useState(0);

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

      if (ageTo >= el.age && el.age >= ageFrom) points += ageImp;
      if (heightTo >= el.height && el.height >= heightFrom) points += heightImp;
      if (weightTo >= el.weight && el.weight >= el.weightFrom)
        points += weightImp;
      if (el.eyeColour === eyeColor) points += eyeColorImp;
      if (el.hairColour === hairColor) points += hairColorImp;
      el.points = points;
      if (ageImp + heightImp + weightImp + eyeColorImp + hairColorImp < 1)
        return el;
      return el.points > 0;
    });
    return resWithPoints;
  };

  const onClickSearch = (e) => {
    e.preventDefault();
    const currUser = authenticationService.currentUserValue;

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
