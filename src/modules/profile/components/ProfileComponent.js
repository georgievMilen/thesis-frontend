import React from "react";
import {
  HAIR_COLORS,
  EYE_COLORS,
  GENDERS,
  FIRST_NAME,
  LAST_NAME,
  EMAIL_ADDRESS,
  PASSWORD,
  AGE,
  GENDER,
  WEIGHT,
  HEIGHT,
  EYE_COLOR,
  HAIR_COLOR,
  RELATIONSHIP_TYPE,
  INTERESTED_GENDER
} from "../../../constants";
import { EditableInputContainer } from "../EditableInputContainer";
import { EditableSelectContainer } from "../EditableSelectContainer";
import { EditablePasswordContainer } from "../EditablePasswordContainer";

import {
  EditButton,
  SubmitButton,
  DoubleLabel,
  LogoutButton
} from "../../../components/common";

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
  // interest in gender
  interestGender,
  interestGenderIsEditable,
  stringInterestGender,
  handleIntGenderEditBtn,
  handleIntGenderEditSave,
  handleIntGenderEditCancel,
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
  // relationship
  arrOfRelationships,
  stringOfRelationships,
  handleRelationshipEditBnt,
  relationshipIsEditable,
  handleRelationshipEditSave,
  handleRelationshipEditCancel,
  // Save Btn
  saveProfileInfo,
  // Logout Btn
  logoutProfile
}) => {
  const cpArrOfRels = JSON.parse(JSON.stringify(arrOfRelationships));
  const cpIntGender = JSON.parse(JSON.stringify(interestGender));

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
        {/* Relationship  */}
        <div className="from-group">
          {!relationshipIsEditable ? (
            <div className="profile_info_holder">
              <DoubleLabel
                first={RELATIONSHIP_TYPE}
                second={stringOfRelationships}
              />
              <EditButton onClick={handleRelationshipEditBnt} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first="" second="" />

              <EditableInputContainer
                initialValue={cpArrOfRels}
                type="checkbox"
                onSave={handleRelationshipEditSave}
                onCancel={handleRelationshipEditCancel}
              />
            </span>
          )}
        </div>
        {/* Interest in Gender */}
        <div className="from-group">
          {!interestGenderIsEditable ? (
            <div className="profile_info_holder">
              <DoubleLabel
                first={INTERESTED_GENDER}
                second={stringInterestGender}
              />
              <EditButton onClick={handleIntGenderEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel
                first={INTERESTED_GENDER}
                second={stringInterestGender}
              />

              <EditableInputContainer
                initialValue={cpIntGender}
                type="checkbox"
                onSave={handleIntGenderEditSave}
                onCancel={handleIntGenderEditCancel}
              />
            </span>
          )}
        </div>
        <SubmitButton onClick={saveProfileInfo} />
        <LogoutButton onClick={logoutProfile} />
      </form>
    </div>
  );
};
export { ProfileComponent };
