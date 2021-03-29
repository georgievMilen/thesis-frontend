import React, { useEffect, useState } from "react";
import { authenticationService } from "../../utils";
import { ProfileComponent } from "./components/ProfileComponent";
import { updateProfile, getProfileInfo } from "./services/profileService";

const ProfileContainer = () => {
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

  // Add gender state

  // Relationship state
  const [arrOfRelationships, setArrOfRelationships] = useState([
    { name: "family", checked: false },
    { name: "friend", checked: false },
    { name: "romantic", checked: false },
    { name: "with benefits", checked: false }
  ]);
  const [stringOfRelationships, setStringOfRelationships] = useState([]);
  const [relationshipIsEditable, setRelationshipIsEditable] = useState(false);

  const setRelationshipInfo = (relationInfo) => {
    const newRelationArr = relationInfo.map((relation) => {
      return {
        name: relation.relationship_name,
        checked: relation.checked ? true : false
      };
    });
    console.log(newRelationArr);
    if (
      newRelationArr[0].checked !== arrOfRelationships[0].checked ||
      newRelationArr[1].checked !== arrOfRelationships[1].checked ||
      newRelationArr[2].checked !== arrOfRelationships[2].checked ||
      newRelationArr[3].checked !== arrOfRelationships[3].checked
    )
      setArrOfRelationships(newRelationArr);
    handleStringOfRelationships(newRelationArr);
  };

  const setProfileDetails = ({
    age: resAge,
    eye_colour,
    hair_colour,
    weight: resWeight,
    height: resHeight
  }) => {
    if (age === 0) setAge(resAge);
    if (eyeColor === "") setEyeColor(eye_colour);
    if (hairColor === "") setHairColor(hair_colour);
    if (height === 0) setHeight(resHeight);
    if (weight === 0) setWeight(resWeight);
  };

  const handleProfileInfo = ({ first_name, last_name, email: resEmail }) => {
    if (firstName === "") setFirstName(first_name);
    if (lastName === "") setLastName(last_name);
    if (email === "") setEmail(resEmail);
  };

  useEffect(() => {
    // Get profile info from db
    const localStorageEmail = authenticationService.currentUserValue;

    getProfileInfo(localStorageEmail)
      .then((res) => {
        console.log("get info");
        if (res.status === 200) {
          handleProfileInfo(res.data[0][0]);
          setProfileDetails(res.data[1][0]);
          setRelationshipInfo(res.data[2]);
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
    handleStringOfRelationships(newValue);
    setRelationshipIsEditable(false);
  };

  function handleStringOfRelationships(relationArr) {
    let rString = "";
    relationArr.forEach((e) => {
      if (e.checked === true) rString += `${e.name}; `;
    });
    setStringOfRelationships(rString);
  }

  const handleRelationshipEditCancel = (e) => {
    e.preventDefault();
    setRelationshipIsEditable(false);
  };

  // Save Btn
  const saveProfileInfo = (e) => {
    e.preventDefault();
    const localStorageEmail = authenticationService.currentUserValue;
    const relArrForDB = arrOfRelationships.map((relation) => {
      return { name: relation.name, checked: relation.checked ? 1 : 0 };
    });
    updateProfile(
      {
        email: localStorageEmail,
        firstName,
        lastName,
        age,
        weight,
        height,
        eyeColor,
        hairColor,
        relArrForDB
      },
      (res) => {
        console.log(res);
        // Change state and display "Changes made" text under the save button.
      }
    );
  };

  // Logout Btn
  const logoutProfile = (e) => {
    authenticationService.logout();
    window.location.reload(false);
  };

  return (
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
  );
};

export { ProfileContainer };
