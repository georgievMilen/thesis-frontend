import React from "react";
import {
  HAIR_COLORS,
  EYE_COLORS,
  GENDERS,
  FIRST_NAME,
  LAST_NAME,
  USERNAME,
  EMAIL_ADDRESS,
  PASSWORD,
  AGE,
  GENDER,
  WEIGHT,
  HEIGHT,
  EYE_COLOR,
  HAIR_COLOR
} from "../../../constants";
import { EditableInputContainer } from "../EditableInputContainer";
import { EditableSelectContainer } from "../EditableSelectContainer";
import { EditablePasswordContainer } from "../EditablePasswordContainer";

import {
  EditButton,
  SubmitButton,
  DoubleLabel,
  LogoutButton,
  Success,
  Error
} from "../../../components/common";
import { isEmptyObj } from "../../../utils";

const ProfileComponent = ({
  // first name
  firstName,
  firstNameIsEditable,
  handleFirstNameEditBtn,
  handleFirstNameEditSave,
  handleFirstNameEditCancel,
  // last name
  lastName,
  lastNameIsEditable,
  handleLastNameEditBtn,
  handleLastNameEditSave,
  handleLastNameEditCancel,
  // email
  email,
  emailIsEditable,
  handleEmailEditBtn,
  handleEmailEditSave,
  handleEmailEditCancel,
  // username
  username,
  usernameIsEditable,
  handleUsernameEditBtn,
  handleUsernameEditSave,
  handleUsernameEditCancel,
  // password
  passwordIsEditable,
  handlePasswordEditBtn,
  handlePasswordEditSave,
  handlePasswordEditCancel,
  // age
  age,
  ageIsEditable,
  handleAgeEditBtn,
  handleAgeEditSave,
  handleAgeEditCancel,
  // gender
  gender,
  genderIsEditable,
  handleGenderEditBtn,
  handleGenderEditSave,
  handleGenderEditCancel,

  // weight
  weight,
  weightIsEditable,
  handleWeightEditBtn,
  handleWeightEditSave,
  handleWeightEditCancel,
  // height
  height,
  heightIsEditable,
  handleHeightEditBtn,
  handleHeightEditSave,
  handleHeightEditCancel,
  // eye color
  eyeColor,
  eyeColorIsEditable,
  handleEyeColorEditBtn,
  handleEyeColorEditSave,
  handleEyeColorEditCancel,
  // hair color
  hairColor,
  hairColorIsEditable,
  handleHairColorEditBtn,
  handleHairColorEditSave,
  handleHairColorEditCancel,

  // Save Btn
  saveProfileInfo,
  // Logout Btn
  logoutProfile,
  response
}) => {
  return (
    <div className="form_wrapper">
      <form>
        <h3>Profile</h3>
        {/* First Name */}
        <div className="form-group">
          {!firstNameIsEditable ? (
            <div className="profile_info_holder">
              <DoubleLabel first={FIRST_NAME} second={firstName} />

              <EditButton onClick={handleFirstNameEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first={FIRST_NAME} second={firstName} />

              <EditableInputContainer
                initialValue={firstName}
                onSave={handleFirstNameEditSave}
                onCancel={handleFirstNameEditCancel}
              />
            </span>
          )}
        </div>
        {/* Last Name */}
        <div className="form-group">
          {!lastNameIsEditable ? (
            <div className="profile_info_holder">
              <DoubleLabel first={LAST_NAME} second={lastName} />

              <EditButton onClick={handleLastNameEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first={LAST_NAME} second={lastName} />

              <EditableInputContainer
                initialValue={lastName}
                onSave={handleLastNameEditSave}
                onCancel={handleLastNameEditCancel}
              />
            </span>
          )}
        </div>
        {/* Email */}
        <div className="form-group">
          {!emailIsEditable ? (
            <div className="profile_info_holder">
              <DoubleLabel first={EMAIL_ADDRESS} second={email} />

              <EditButton onClick={handleEmailEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first={EMAIL_ADDRESS} second={email} />

              <EditableInputContainer
                initialValue={email}
                onSave={handleEmailEditSave}
                onCancel={handleEmailEditCancel}
              />
            </span>
          )}
        </div>
        {/* Username */}
        <div className="form-group">
          {!usernameIsEditable ? (
            <div className="profile_info_holder">
              <DoubleLabel first={USERNAME} second={username} />

              <EditButton onClick={handleUsernameEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first={USERNAME} second={username} />

              <EditableInputContainer
                initialValue={username}
                onSave={handleUsernameEditSave}
                onCancel={handleUsernameEditCancel}
              />
            </span>
          )}
        </div>
        {/* Password */}
        <div className="form-group">
          {!passwordIsEditable ? (
            <div className="profile_info_holder">
              <DoubleLabel first={PASSWORD} second="" />

              <EditButton onClick={handlePasswordEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first={PASSWORD} second="" />

              <EditablePasswordContainer
                onSave={handlePasswordEditSave}
                onCancel={handlePasswordEditCancel}
              />
            </span>
          )}
        </div>
        {/* Age  */}
        <div className="form-group">
          {!ageIsEditable ? (
            <div className="profile_info_holder">
              <DoubleLabel first={AGE} second={`${age} years old.`} />

              <EditButton onClick={handleAgeEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first={AGE} second={`${age} years old.`} />

              <EditableInputContainer
                initialValue={age}
                type="number"
                onSave={handleAgeEditSave}
                onCancel={handleAgeEditCancel}
              />
            </span>
          )}
        </div>
        {/* Gender */}
        <div className="form-group">
          {!genderIsEditable ? (
            <div className="profile_info_holder">
              <DoubleLabel first={GENDER} second={gender} />

              <EditButton onClick={handleGenderEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first={GENDER} second={gender} />

              <EditableSelectContainer
                initialValue={gender}
                onSave={handleGenderEditSave}
                onCancel={handleGenderEditCancel}
                optionsArr={GENDERS}
              />
            </span>
          )}
        </div>
        {/* Weight */}
        <div className="form-group">
          {!weightIsEditable ? (
            <div className="profile_info_holder">
              <DoubleLabel first={WEIGHT} second={`${weight} kg.`} />

              <EditButton onClick={handleWeightEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first={WEIGHT} second={`${weight} kg.`} />

              <EditableInputContainer
                initialValue={weight}
                type="number"
                onSave={handleWeightEditSave}
                onCancel={handleWeightEditCancel}
              />
            </span>
          )}
        </div>
        {/* Height */}
        <div className="form-group">
          {!heightIsEditable ? (
            <div className="profile_info_holder">
              <DoubleLabel first={HEIGHT} second={`${height} cm.`} />

              <EditButton onClick={handleHeightEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first={HEIGHT} second={`${height} cm.`} />

              <EditableInputContainer
                initialValue={height}
                type="number"
                onSave={handleHeightEditSave}
                onCancel={handleHeightEditCancel}
              />
            </span>
          )}
        </div>
        {/* Eye Color */}
        <div className="form-group">
          {!eyeColorIsEditable ? (
            <div className="profile_info_holder">
              <DoubleLabel first={EYE_COLOR} second={eyeColor} />

              <EditButton onClick={handleEyeColorEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first={EYE_COLOR} second={eyeColor} />

              <EditableSelectContainer
                initialValue={eyeColor}
                onSave={handleEyeColorEditSave}
                onCancel={handleEyeColorEditCancel}
                optionsArr={EYE_COLORS}
              />
            </span>
          )}
        </div>
        {/* Hair Color */}
        <div className="form-group">
          {!hairColorIsEditable ? (
            <div className="profile_info_holder">
              <DoubleLabel first={HAIR_COLOR} second={hairColor} />

              <EditButton onClick={handleHairColorEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first={HAIR_COLOR} second={hairColor} />

              <EditableSelectContainer
                initialValue={hairColor}
                onSave={handleHairColorEditSave}
                onCancel={handleHairColorEditCancel}
                optionsArr={HAIR_COLORS}
              />
            </span>
          )}
        </div>
        {isEmptyObj(response) === false && response.status === 200 ? (
          <Success>{response.data}</Success>
        ) : (
          <Error>{response.data}</Error>
        )}
        <SubmitButton onClick={saveProfileInfo} />
        <LogoutButton onClick={logoutProfile} />
      </form>
    </div>
  );
};
export { ProfileComponent };
