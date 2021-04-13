import React, { useContext, useEffect, useState } from "react";
import { authenticationService } from "../../utils";
import { ProfileComponent } from "./components/ProfileComponent";
import { GET_PROFILE_INFO, SEARCH_URL } from "../../constants";
import { get, post } from "../services";
import { Redirect } from "react-router-dom";
import { Context } from "../../HOC/Store";

const ProfileContainer = () => {
  const [state, dispatch] = useContext(Context);
  // First name state
  const [firstName, setFirstName] = useState("");
  const [firstNameIsEditable, setFirstNameIsEditable] = useState(false);
  // Last name state
  const [lastName, setLastName] = useState("");
  const [lastNameIsEditable, setLastNameIsEditable] = useState(false);
  // Email state
  const [email, setEmail] = useState("");
  const [emailIsEditable, setEmailIsEditable] = useState(false);
  // Password state
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRepeated, setNewPasswordRepeated] = useState("");
  const [passwordIsEditable, setPasswordIsEditable] = useState(false);
  // Age state
  const [age, setAge] = useState(0);
  const [ageIsEditable, setAgeIsEditable] = useState(false);
  // Gender state
  const [gender, setGender] = useState("");
  const [genderIsEditable, setGenderIsEditable] = useState(false);
  // Interested in Gender state
  const [interestGender, setInterestGender] = useState([
    { name: "Male", checked: false },
    { name: "Female", checked: false },
    { name: "Other", checked: false }
  ]);
  const [interestGenderIsEditable, setIntGenIsEditable] = useState(false);
  const [stringInterestGender, setStringInterestGender] = useState("");
  // Weight state
  const [weight, setWeight] = useState(0);
  const [weightIsEditable, setWeightIsEditable] = useState(false);
  // Height state
  const [height, setHeight] = useState(0);
  const [heightIsEditable, setHeightIsEditable] = useState(false);
  // Eye color state
  const [eyeColor, setEyeColor] = useState("");
  const [eyeColorIsEditable, setEyeColorIsEditable] = useState(false);
  // Hair color state
  const [hairColor, setHairColor] = useState("");
  const [hairColorIsEditable, setHairColorIsEditable] = useState(false);

  // Relationship state
  const [arrOfRelationships, setArrOfRelationships] = useState([
    { name: "family", checked: false },
    { name: "friend", checked: false },
    { name: "romantic", checked: false },
    { name: "with benefits", checked: false }
  ]);
  const [stringOfRelationships, setStringOfRelationships] = useState("");
  const [relationshipIsEditable, setRelationshipIsEditable] = useState(false);

  const [logout, setLogout] = useState(false);
  const setRelationshipInfo = (relationInfo) => {
    const newRelationArr = relationInfo.map((relation) => {
      return {
        name: relation.relationship_name,
        checked: relation.checked ? true : false
      };
    });

    setArrOfRelationships(newRelationArr);
    const rString = arrOfObjsToString(newRelationArr);
    setStringOfRelationships(rString);
  };

  const handleProfileInfo = ({
    first_name,
    last_name,
    email: resEmail,
    age: resAge,
    gender: resGender,
    eye_colour,
    hair_colour,
    weight: resWeight,
    height: resHeight
  }) => {
    setFirstName(first_name);
    setLastName(last_name);
    setEmail(resEmail);
    setAge(resAge);
    setGender(resGender);
    setEyeColor(eye_colour);
    setHairColor(hair_colour);
    setHeight(resHeight);
    setWeight(resWeight);
  };

  useEffect(() => {
    // Get profile info from db
    const localStorageEmail = authenticationService.currentUserValue;

    get({ params: localStorageEmail, url: GET_PROFILE_INFO })
      .then((res) => {
        if (res.status === 200) {
          handleProfileInfo(res.data.profileInfo);
          setRelationshipInfo(res.data.profileRelationship);
        }
      })
      .catch((error) => {
        // Handle Error
      });

    // Set loader
    // eslint-disable-next-line
  }, []);

  // First name handlers
  const handleFirstNameEditBtn = (e) => {
    e.preventDefault();
    setFirstNameIsEditable(true);
  };
  const handleFirstNameEditSave = ({ e, newValue }) => {
    e.preventDefault();
    setFirstName(newValue);
    setFirstNameIsEditable(false);
  };
  const handleFirstNameEditCancel = (e) => {
    e.preventDefault();
    setFirstNameIsEditable(false);
  };

  // Last name handlers
  const handleLastNameEditBtn = (e) => {
    e.preventDefault();
    setLastNameIsEditable(true);
  };
  const handleLastNameEditSave = ({ e, newValue }) => {
    e.preventDefault();
    setLastName(newValue);
    setLastNameIsEditable(false);
  };
  const handleLastNameEditCancel = (e) => {
    e.preventDefault();
    setLastNameIsEditable(false);
  };

  // Email handlers
  const handleEmailEditBtn = (e) => {
    e.preventDefault();
    setEmailIsEditable(true);
  };
  const handleEmailEditSave = ({ e, newValue }) => {
    e.preventDefault();
    setEmail(newValue);
    setEmailIsEditable(false);
  };
  const handleEmailEditCancel = (e) => {
    e.preventDefault();
    setEmailIsEditable(false);
  };

  // Password handlers
  const handlePasswordEditBtn = (e) => {
    e.preventDefault();
    setPasswordIsEditable(true);
  };
  const handlePasswordEdit = ({ target }) => {
    setPassword(target.value);
  };
  const handleNewPasswordEdit = ({ target }) => {
    setNewPassword(target.value);
  };
  const handleNewPasswordRepeatedEdit = ({ target }) => {
    setNewPasswordRepeated(target.value);
  };
  const handlePasswordEditOK = (e) => {
    e.preventDefault();
    // Check if password is correct

    // Check it newPassword and newPasswordRepeated are matching

    // Update newPassword in DB

    setNewPassword("");
    setNewPasswordRepeated("");
    setPasswordIsEditable(false);
  };
  const handlePasswordEditCancel = (e) => {
    e.preventDefault();
    setPasswordIsEditable(false);
    setPassword("");
    setNewPassword("");
    setNewPasswordRepeated("");
  };

  // Age handlers
  const handleAgeEditBtn = (e) => {
    e.preventDefault();
    setAgeIsEditable(true);
  };
  const handleAgeEditSave = ({ e, newValue }) => {
    e.preventDefault();
    setAge(newValue);
    setAgeIsEditable(false);
  };
  const handleAgeEditCancel = (e) => {
    e.preventDefault();
    setAgeIsEditable(false);
  };

  // Gender handlers
  const handleGenderEditBtn = (e) => {
    e.preventDefault();
    setGenderIsEditable(true);
  };
  const handleGenderEditSave = ({ e, newValue }) => {
    e.preventDefault();
    setGender(newValue);
    setGenderIsEditable(false);
  };
  const handleGenderEditCancel = (e) => {
    e.preventDefault();
    setGenderIsEditable(false);
  };

  // Interest In Gender handlers
  const handleIntGenderEditBtn = (e) => {
    e.preventDefault();
    setIntGenIsEditable(true);
  };
  const handleIntGenderEditSave = ({ e, newValue }) => {
    e.preventDefault();
    setInterestGender(newValue);
    const rString = arrOfObjsToString(newValue);
    setStringInterestGender(rString);
    setIntGenIsEditable(false);
  };
  const handleIntGenderEditCancel = (e) => {
    e.preventDefault();
    setIntGenIsEditable(false);
  };

  // Weight handlers
  const handleWeightEditBtn = (e) => {
    e.preventDefault();
    setWeightIsEditable(true);
  };
  const handleWeightEditSave = ({ e, newValue }) => {
    e.preventDefault();
    setWeight(newValue);
    setWeightIsEditable(false);
  };
  const handleWeightEditCancel = (e) => {
    e.preventDefault();
    setWeightIsEditable(false);
  };
  // Height handlers
  const handleHeightEditBtn = (e) => {
    e.preventDefault();
    setHeightIsEditable(true);
  };
  const handleHeightEditSave = ({ e, newValue }) => {
    e.preventDefault();
    setHeight(newValue);
    setHeightIsEditable(false);
  };
  const handleHeightEditCancel = (e) => {
    e.preventDefault();
    setHeightIsEditable(false);
  };

  // Eye color handlers
  const handleEyeColorEditBtn = (e) => {
    e.preventDefault();
    setEyeColorIsEditable(true);
  };
  const handleEyeColorEditSave = ({ e, newValue }) => {
    e.preventDefault();
    setEyeColor(newValue);
    setEyeColorIsEditable(false);
  };
  const handleEyeColorEditCancel = (e) => {
    e.preventDefault();
    setEyeColorIsEditable(false);
  };

  // Hair color handlers
  const handleHairColorEditBtn = (e) => {
    e.preventDefault();
    setHairColorIsEditable(true);
  };
  const handleHairColorEditSave = ({ e, newValue }) => {
    e.preventDefault();
    setHairColor(newValue);
    setHairColorIsEditable(false);
  };
  const handleHairColorEditCancel = (e) => {
    e.preventDefault();
    setHairColorIsEditable(false);
  };

  // Add gender handlers

  // Relationship handlers
  const handleRelationshipEditBnt = (e) => {
    e.preventDefault();
    setRelationshipIsEditable(true);
  };

  const handleRelationshipEditSave = ({ e, newValue }) => {
    e.preventDefault();
    setArrOfRelationships(newValue);
    const rString = arrOfObjsToString(newValue);
    setStringOfRelationships(rString);
    setRelationshipIsEditable(false);
  };

  function arrOfObjsToString(relationArr) {
    let rString = "";
    relationArr.forEach((e) => {
      if (e.checked === true) rString += `${e.name}; `;
    });
    return rString;
  }

  const handleRelationshipEditCancel = (e) => {
    e.preventDefault();
    setRelationshipIsEditable(false);
  };

  // Save Btn
  const saveProfileInfo = (e) => {
    e.preventDefault();
    const localStorageEmail = authenticationService.currentUserValue;
    const relArrForDB = prepareArrForDB(arrOfRelationships);
    const interestGenderForDB = prepareArrForDB(interestGender);

    post({
      url: SEARCH_URL,
      data: {
        email: localStorageEmail,
        firstName,
        lastName,
        age,
        weight,
        height,
        eyeColor,
        hairColor,
        relArrForDB,
        interestGenderForDB
      }
    })
      .then((res) => {
        console.log(res);
        // Change state and display "Changes made" text under the save button.
      })
      .catch((err) => {
        console.log(err);
        // Handle error
      });
  };

  function prepareArrForDB(arr) {
    return arr.map((e) => {
      return { name: e.name, checked: e.checked ? 1 : 0 };
    });
  }

  // Logout Btn
  const logoutProfile = (e) => {
    authenticationService.logout();
    dispatch({ type: "logout", payload: false });
    setLogout(true);
  };

  return (
    <>
      <ProfileComponent
        // first name
        firstName={firstName}
        firstNameIsEditable={firstNameIsEditable}
        handleFirstNameEditBtn={handleFirstNameEditBtn}
        handleFirstNameEditSave={handleFirstNameEditSave}
        handleFirstNameEditCancel={handleFirstNameEditCancel}
        // last name
        lastName={lastName}
        lastNameIsEditable={lastNameIsEditable}
        handleLastNameEditBtn={handleLastNameEditBtn}
        handleLastNameEditSave={handleLastNameEditSave}
        handleLastNameEditCancel={handleLastNameEditCancel}
        // email
        email={email}
        emailIsEditable={emailIsEditable}
        handleEmailEditBtn={handleEmailEditBtn}
        handleEmailEditSave={handleEmailEditSave}
        handleEmailEditCancel={handleEmailEditCancel}
        // password
        password={password}
        newPassword={newPassword}
        newPasswordRepeated={newPasswordRepeated}
        passwordIsEditable={passwordIsEditable}
        handlePasswordEditBtn={handlePasswordEditBtn}
        handlePasswordEdit={handlePasswordEdit}
        handleNewPasswordEdit={handleNewPasswordEdit}
        handleNewPasswordRepeatedEdit={handleNewPasswordRepeatedEdit}
        handlePasswordEditOK={handlePasswordEditOK}
        handlePasswordEditCancel={handlePasswordEditCancel}
        // age
        age={age}
        ageIsEditable={ageIsEditable}
        handleAgeEditBtn={handleAgeEditBtn}
        handleAgeEditSave={handleAgeEditSave}
        handleAgeEditCancel={handleAgeEditCancel}
        // gender
        gender={gender}
        genderIsEditable={genderIsEditable}
        handleGenderEditBtn={handleGenderEditBtn}
        handleGenderEditSave={handleGenderEditSave}
        handleGenderEditCancel={handleGenderEditCancel}
        // interest in gender
        interestGender={interestGender}
        interestGenderIsEditable={interestGenderIsEditable}
        stringInterestGender={stringInterestGender}
        handleIntGenderEditBtn={handleIntGenderEditBtn}
        handleIntGenderEditSave={handleIntGenderEditSave}
        handleIntGenderEditCancel={handleIntGenderEditCancel}
        // weight
        weight={weight}
        weightIsEditable={weightIsEditable}
        handleWeightEditBtn={handleWeightEditBtn}
        handleWeightEditSave={handleWeightEditSave}
        handleWeightEditCancel={handleWeightEditCancel}
        // height
        height={height}
        heightIsEditable={heightIsEditable}
        handleHeightEditBtn={handleHeightEditBtn}
        handleHeightEditSave={handleHeightEditSave}
        handleHeightEditCancel={handleHeightEditCancel}
        // eye color
        eyeColor={eyeColor}
        eyeColorIsEditable={eyeColorIsEditable}
        handleEyeColorEditBtn={handleEyeColorEditBtn}
        handleEyeColorEditSave={handleEyeColorEditSave}
        handleEyeColorEditCancel={handleEyeColorEditCancel}
        // hair color
        hairColor={hairColor}
        hairColorIsEditable={hairColorIsEditable}
        handleHairColorEditBtn={handleHairColorEditBtn}
        handleHairColorEditSave={handleHairColorEditSave}
        handleHairColorEditCancel={handleHairColorEditCancel}
        //relationship
        arrOfRelationships={arrOfRelationships}
        stringOfRelationships={stringOfRelationships}
        relationshipIsEditable={relationshipIsEditable}
        handleRelationshipEditBnt={handleRelationshipEditBnt}
        handleRelationshipEditSave={handleRelationshipEditSave}
        handleRelationshipEditCancel={handleRelationshipEditCancel}
        // Save Btn
        saveProfileInfo={saveProfileInfo}
        // Logout Btn
        logoutProfile={logoutProfile}
      />
      {logout && <Redirect to="/login" />}
    </>
  );
};

export { ProfileContainer };
