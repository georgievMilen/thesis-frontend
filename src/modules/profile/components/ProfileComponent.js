import React from "react";
import {
  HAIR_COLORS,
  EYE_COLORS,
  GENDERS,
  FIRST_NAME,
  LAST_NAME,
  USERNAME,
  EMAIL_ADDRESS,
  AGE,
  GENDER,
  WEIGHT,
  HEIGHT,
  EYE_COLOR,
  HAIR_COLOR,
  ABOUT
} from "../../../constants";
import { EditableInputContainer } from "../EditableInputContainer";
import { EditableSelectContainer } from "../EditableSelectContainer";

import {
  EditButton,
  SubmitButton,
  DoubleLabel,
  LogoutButton,
  Success,
  Error,
  FileInput,
  Image,
  Label,
  ROTextArea
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
  // file
  setSelectedImage,
  imageName,
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
  // username
  about,
  aboutIsEditable,
  handleAboutEditBtn,
  handleAboutEditSave,
  handleAboutEditCancel,

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
        <h3 className="profile_h3">Profile</h3>
        <div className="profile_sec_1">
          <div className="profile_image">
            {/* Image */}
            {imageName && <Image src={imageName} />}
            <div className="form-group">
              <div className="select_image">
                <Label>Select Image:</Label>
              </div>
              <div className="profile_info_holder">
                <FileInput setSelectedImage={setSelectedImage} />
              </div>
            </div>
          </div>
          <div className="profile_sec_1.1">
            {/* First Name */}
            <div className="form-group">
              {!firstNameIsEditable ? (
                <div className="profile_info_holder">
                  <DoubleLabel first={FIRST_NAME} second={firstName} />

                  <EditButton onClick={handleFirstNameEditBtn} />
                </div>
              ) : (
                <div className="profile_edit_wrapper ">
                  <DoubleLabel first={FIRST_NAME} second={firstName} />

                  <EditableInputContainer
                    initialValue={firstName}
                    onSave={handleFirstNameEditSave}
                    onCancel={handleFirstNameEditCancel}
                  />
                </div>
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
          </div>
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
        {/* About */}
        <div className="form-group">
          {!aboutIsEditable ? (
            <div className="profile_info_holder">
              <div className="profile_label_holder">
                <label>{ABOUT} </label>

                <ROTextArea defaultValue={about} />
              </div>

              <EditButton onClick={handleAboutEditBtn} />
            </div>
          ) : (
            <div className="profile_edit_wrapper">
              <EditableInputContainer
                initialValue={about}
                type="textarea"
                onSave={handleAboutEditSave}
                onCancel={handleAboutEditCancel}
              />
            </div>
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
        <div className="profile_p_btns">
          <SubmitButton onClick={saveProfileInfo} />
          <LogoutButton onClick={logoutProfile} />
        </div>
      </form>
    </div>
  );
};
export { ProfileComponent };
