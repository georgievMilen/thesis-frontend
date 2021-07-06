import React, { useContext, useEffect, useState } from "react";

import { authenticationService } from "../../utils";
import { ProfileComponent } from "./components/ProfileComponent";
import { GET_PROFILE_INFO, UPDATE_PROFILE_URL } from "../../constants";
import { getAPI, postAPI } from "../services";
import { Redirect } from "react-router-dom";
import { Context } from "../../HOC/AppHOC";

const ProfileContainer = () => {
  const [state, dispatch] = useContext(Context);
  // First name state
  const [firstName, setFirstName] = useState("");
  const [firstNameIsEditable, setFirstNameIsEditable] = useState(false);
  // Last name state
  const [lastName, setLastName] = useState("");
  const [lastNameIsEditable, setLastNameIsEditable] = useState(false);
  // Image
  const [imageName, setImageName] = useState("");
  // File
  const [selectedImage, setSelectedImage] = useState(null);

  // Email state
  const [email, setEmail] = useState("");
  const [emailIsEditable, setEmailIsEditable] = useState(false);
  // Username state
  const [username, setUsername] = useState("");
  const [usernameIsEditable, setUsernameIsEditable] = useState(false);
  // About state
  const [about, setAbout] = useState("");
  const [aboutIsEditable, setAboutIsEditable] = useState(false);
  // Age state
  const [age, setAge] = useState(0);
  const [ageIsEditable, setAgeIsEditable] = useState(false);
  // Gender state
  const [gender, setGender] = useState("");
  const [genderIsEditable, setGenderIsEditable] = useState(false);

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
  const [response, setResponse] = useState({});

  const handleProfileInfo = (props) => {
    setFirstName(props.firstName);
    setLastName(props.lastName);
    setEmail(props.email);
    setUsername(props.username);
    props.about ? setAbout(props.about) : setAbout("");
    props.age ? setAge(props.age) : setAge("");
    props.userImage ? setImageName(props.userImage) : setImageName("");
    setGender(props.gender);
    setEyeColor(props.eyeColour);
    setHairColor(props.hairColour);
    props.height ? setHeight(props.height) : setHeight("");
    props.weight ? setWeight(props.weight) : setWeight("");
  };

  useEffect(() => {
    // Get profile info from db
    const localStorageEmail = authenticationService.currentUserValue;

    getAPI({ params: localStorageEmail, url: GET_PROFILE_INFO })
      .then((res) => {
        handleProfileInfo(res.data);
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
  // Username handlers
  const handleUsernameEditBtn = (e) => {
    e.preventDefault();
    setUsernameIsEditable(true);
  };
  const handleUsernameEditSave = ({ e, newValue }) => {
    e.preventDefault();
    setUsername(newValue);
    setUsernameIsEditable(false);
  };
  const handleUsernameEditCancel = (e) => {
    e.preventDefault();
    setUsernameIsEditable(false);
  };

  // About handlers
  const handleAboutEditBtn = (e) => {
    e.preventDefault();
    setAboutIsEditable(true);
  };
  const handleAboutEditSave = ({ e, newValue }) => {
    e.preventDefault();
    setAbout(newValue);
    setAboutIsEditable(false);
  };
  const handleAboutEditCancel = (e) => {
    e.preventDefault();
    setAboutIsEditable(false);
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

  // Save Btn
  const saveProfileInfo = (e) => {
    e.preventDefault();
    const localStorageEmail = authenticationService.currentUserValue;
    const data = new FormData();
    data.append("file", selectedImage);
    data.append("email", localStorageEmail);
    data.append("firstName", firstName);
    data.append("lastName", lastName);
    data.append("username", username);
    data.append("age", age);
    data.append("gender", gender);
    data.append("weight", weight);
    data.append("height", height);
    data.append("eyeColor", eyeColor);
    data.append("hairColor", hairColor);
    data.append("imageName", imageName);
    data.append("about", about);

    postAPI({
      url: UPDATE_PROFILE_URL,
      data: data
    })
      .then((res) => {
        // setResponse(res);
        window.location.reload();
      })
      .catch((err) => {
        setResponse(err);
      });
  };

  // Logout Btn
  const logoutProfile = (e) => {
    if (window.confirm("Are you sure you want to logout?")) {
      authenticationService.logout();
      dispatch({ type: "logout", payload: false });
    }
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
        // file
        setSelectedImage={setSelectedImage}
        imageName={imageName}
        // email
        email={email}
        emailIsEditable={emailIsEditable}
        handleEmailEditBtn={handleEmailEditBtn}
        handleEmailEditSave={handleEmailEditSave}
        handleEmailEditCancel={handleEmailEditCancel}
        // username
        username={username}
        usernameIsEditable={usernameIsEditable}
        handleUsernameEditBtn={handleUsernameEditBtn}
        handleUsernameEditSave={handleUsernameEditSave}
        handleUsernameEditCancel={handleUsernameEditCancel}
        // about
        about={about}
        aboutIsEditable={aboutIsEditable}
        handleAboutEditBtn={handleAboutEditBtn}
        handleAboutEditSave={handleAboutEditSave}
        handleAboutEditCancel={handleAboutEditCancel}
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
        // Save Btn
        saveProfileInfo={saveProfileInfo}
        // Logout Btn
        logoutProfile={logoutProfile}
        response={response}
      />
      {!state.logged && <Redirect to="/login" />}
    </>
  );
};

export { ProfileContainer };
