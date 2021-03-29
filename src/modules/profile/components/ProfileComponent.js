import React from "react";
import { HAIR_COLORS, EYE_COLORS } from "../../../constants";
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
  return (
    <div className="form_wrapper">
      <form>
        <h3>Profile</h3>
        {/* First Name */}
        <div className="form-group">
          {!firstNameIsEditable ? (
            <div className="profile_info_holder">
              <DoubleLabel first="First name" second={firstName} />

              <EditButton onClick={handleFirstNameEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first="First name" second={firstName} />

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
              <DoubleLabel first="Last name" second={lastName} />

              <EditButton onClick={handleLastNameEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first="Last name" second={lastName} />

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
              <DoubleLabel first="Email address" second={email} />

              <EditButton onClick={handleEmailEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first="Email address" second={email} />

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
              <DoubleLabel first="Password" second="" />

              <EditButton onClick={handlePasswordEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first="Password" second="" />

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
              <DoubleLabel first="Age" second={`${age} years old.`} />

              <EditButton onClick={handleAgeEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first="Age" second={`${age} years old.`} />

              <EditableInputContainer
                initialValue={age}
                type="number"
                onSave={handleAgeEditSave}
                onCancel={handleAgeEditCancel}
              />
            </span>
          )}
        </div>
        {/* Weight */}
        <div className="form-group">
          {!weightIsEditable ? (
            <div className="profile_info_holder">
              <DoubleLabel first="Weight" second={`${weight} kg.`} />

              <EditButton onClick={handleWeightEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first="Weight" second={`${weight} kg.`} />

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
              <DoubleLabel first="Height" second={`${height} cm.`} />

              <EditButton onClick={handleHeightEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first="Height" second={`${height} cm.`} />

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
              <DoubleLabel first="Eye Color" second={eyeColor} />

              <EditButton onClick={handleEyeColorEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first="Eye Color" second={eyeColor} />

              <EditableSelectContainer
                initialValue={eyeColor}
                onSave={handleEyeColorEditSave}
                onCancel={handleEyeColorEditCancel}
                colors={EYE_COLORS}
              />
            </span>
          )}
        </div>
        {/* Hair Color */}
        <div className="form-group">
          {!hairColorIsEditable ? (
            <div className="profile_info_holder">
              <DoubleLabel first="Hair Color" second={hairColor} />

              <EditButton onClick={handleHairColorEditBtn} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first="Hair Color" second={hairColor} />

              <EditableSelectContainer
                initialValue={hairColor}
                onSave={handleHairColorEditSave}
                onCancel={handleHairColorEditCancel}
                colors={HAIR_COLORS}
              />
            </span>
          )}
        </div>
        {/* Relationship  */}
        <div className="from-group">
          {!relationshipIsEditable ? (
            <div className="profile_info_holder">
              <DoubleLabel
                first="Type of Relationship"
                second={stringOfRelationships}
              />
              <EditButton onClick={handleRelationshipEditBnt} />
            </div>
          ) : (
            <span className="profile_edit_wrapper">
              <DoubleLabel first="Hair Color" second={stringOfRelationships} />

              <EditableInputContainer
                initialValue={cpArrOfRels}
                type="checkbox"
                onSave={handleRelationshipEditSave}
                onCancel={handleRelationshipEditCancel}
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
