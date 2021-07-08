import React from "react";
import {
  Select,
  RangeInput,
  ImportanceLabel,
  Input,
  Label,
  SubmitButton,
  H4,
  EditButton,
  Error
} from "../../../components/common";
import { EYE_COLORS, GENDERS, HAIR_COLORS } from "../../../constants/index";

const PeopleFilter = ({
  // Age
  ageFrom,
  setAgeFrom,
  ageTo,
  setAgeTo,
  ageImp,
  setAgeImp,
  // Weight
  weightFrom,
  setWeightFrom,
  weightTo,
  setWeightTo,
  weightImp,
  setWeightImp,
  // Height
  heightFrom,
  setHeightFrom,
  heightTo,
  setHeightTo,
  heightImp,
  setHeightImp,
  // Gender
  gender,
  setGender,
  genderImp,
  setGenderImp,
  // Hair color
  hairColor,
  setHairColor,
  hairColorImp,
  setHairColorImp,
  // Eye color
  eyeColor,
  setEyeColor,
  eyeColorImp,
  setEyeColorImp,
  // Search
  onClickSearch,
  clearFilter,
  error
}) => {
  return (
    <div className="people_filter_wrapper">
      <div className="h_holder">
        <H4>Property</H4>
        <H4> Importance</H4>
      </div>
      {/* Age */}
      <div className="form-group">
        <div className="search_info_holder">
          <div className="search_label_holder">
            <div className="s_label_1">
              <Label>Age From </Label>
              <Input
                type="number"
                value={ageFrom}
                name="ageFrom"
                setter={setAgeFrom}
              />
              <Label> yo.</Label>
            </div>
            <div className="s_label_2">
              <Label>Age To </Label>
              <Input
                type="number"
                value={ageTo}
                name="ageTo"
                setter={setAgeTo}
              />
              <Label> yo.</Label>
            </div>
          </div>
          <div>
            <ImportanceLabel>{ageImp}</ImportanceLabel>
            <RangeInput value={ageImp} name="ageImp" setter={setAgeImp} />
          </div>
        </div>
      </div>
      {/* Weight */}
      <div className="form-group">
        <div className="search_info_holder">
          <div className="search_label_holder">
            <div className="s_label_1">
              <Label>Weight From</Label>
              <Input
                type="number"
                value={weightFrom}
                name="weightFrom"
                setter={setWeightFrom}
              />
              <Label> kg.</Label>
            </div>
            <div className="s_label_2">
              <Label>Weight To</Label>
              <Input
                type="number"
                value={weightTo}
                name="weightTo"
                setter={setWeightTo}
              />
              <Label> kg.</Label>
            </div>
          </div>
          <div>
            <ImportanceLabel>{weightImp}</ImportanceLabel>
            <RangeInput
              value={weightImp}
              name="weightImp"
              setter={setWeightImp}
            />
          </div>
        </div>
      </div>

      {/* Height */}
      <div className="form-group">
        <div className="search_info_holder">
          <div className="search_label_holder">
            <div className="s_label_1">
              <Label>Height From</Label>
              <Input
                type="number"
                value={heightFrom}
                name="heightFrom"
                setter={setHeightFrom}
              />
              <Label> cm.</Label>
            </div>
            <div className="s_label_2">
              <Label>Height To </Label>
              <Input
                type="number"
                value={heightTo}
                name="heightTo"
                setter={setHeightTo}
              />
              <Label> cm.</Label>
            </div>
          </div>
          <div>
            <ImportanceLabel for="heightImp">{heightImp}</ImportanceLabel>
            <RangeInput
              value={heightImp}
              name="heightImp"
              setter={setHeightImp}
            />
          </div>
        </div>
      </div>

      {/* Eyes */}
      <div className="form-group">
        <div className="search_info_holder">
          <div className="search_label_holder">
            <div className="s_label_1">
              <Label>Gender</Label>
            </div>
            <div className="s_label_2">
              <Label>{gender ? gender : "No gender selected"}</Label>

              <Select setter={setGender} name="gender" optionsArr={GENDERS} />
            </div>
          </div>
          <div>
            <ImportanceLabel>{genderImp}</ImportanceLabel>
            <RangeInput
              value={genderImp}
              name="eyeColorImp"
              setter={setGenderImp}
            />
          </div>
        </div>
      </div>

      {/* Eyes */}
      <div className="form-group">
        <div className="search_info_holder">
          <div className="search_label_holder">
            <div className="s_label_1">
              <Label>Eye color</Label>
            </div>
            <div className="s_label_2">
              <Label>{eyeColor ? eyeColor : "No color selected"}</Label>

              <Select
                setter={setEyeColor}
                name="eyeColor"
                optionsArr={EYE_COLORS}
              />
            </div>
          </div>
          <div>
            <ImportanceLabel>{eyeColorImp}</ImportanceLabel>
            <RangeInput
              value={eyeColorImp}
              name="eyeColorImp"
              setter={setEyeColorImp}
            />
          </div>
        </div>
      </div>

      {/* Hair */}
      <div className="form-group">
        <div className="search_info_holder">
          <div className="search_label_holder">
            <div className="s_label_1">
              <Label>Hair color {hairColor}</Label>
            </div>
            <div className="s_label_2">
              <Label> {hairColor ? hairColor : "No color selected"}</Label>

              <Select setter={setHairColor} optionsArr={HAIR_COLORS} />
            </div>
          </div>
          <div>
            <ImportanceLabel>{hairColorImp}</ImportanceLabel>
            <RangeInput
              value={hairColorImp}
              name="hairColorImp"
              setter={setHairColorImp}
            />
          </div>
        </div>
      </div>
      <Error>{error}</Error>
      <div className="people_s_btn">
        <SubmitButton onClick={onClickSearch} type="submit">
          Search
        </SubmitButton>
        <div>
          <EditButton onClick={clearFilter}>Clear filter</EditButton>
        </div>
      </div>
    </div>
  );
};

export { PeopleFilter };
