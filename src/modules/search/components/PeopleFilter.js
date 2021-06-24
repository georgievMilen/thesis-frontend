import React from "react";
import {
  Select,
  RangeInput,
  ImportanceLabel,
  Input,
  Label
} from "../../../components/common";
import { EYE_COLORS, HAIR_COLORS } from "../../../constants/index";

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
  // Hair color
  hairColor,
  setHairColor,
  hairColorImp,
  setHairColorImp,
  // Eye color
  eyeColor,
  setEyeColor,
  eyeColorImp,
  setEyeColorImp
}) => {
  return (
    <div
      className="form_wrapper"
      style={{
        boxShadow: "5px 5px 20px silver"
      }}
    >
      <form>
        <div className="h_holder">
          <h4>Importance</h4>
        </div>
        {/* Age */}
        <div className="form-group">
          <div className="search_info_holder">
            <div className="search_label_holder">
              <h5>Age</h5>
              <Label>From </Label>
              <Input
                type="number"
                value={ageFrom}
                name="ageFrom"
                setter={setAgeFrom}
              />
              <Label> years old.</Label>
              <Label>To </Label>
              <Input
                type="number"
                value={ageTo}
                name="ageTo"
                setter={setAgeTo}
              />
              <Label> years old.</Label>
            </div>
            <ImportanceLabel>{ageImp}</ImportanceLabel>
            <RangeInput value={ageImp} name="ageImp" setter={setAgeImp} />
          </div>
        </div>
        {/* Weight */}
        <div className="form-group">
          <div className="search_info_holder">
            <div className="search_label_holder">
              <h5>Weight</h5>
              <Label>From</Label>
              <Input
                type="number"
                value={weightFrom}
                name="weightFrom"
                setter={setWeightFrom}
              />
              <Label> kg.</Label>
              <Label>To</Label>
              <Input
                type="number"
                value={weightTo}
                name="weightTo"
                setter={setWeightTo}
              />
              <Label> kg.</Label>
            </div>
            <ImportanceLabel>{weightImp}</ImportanceLabel>
            <RangeInput
              value={weightImp}
              name="weightImp"
              setter={setWeightImp}
            />
          </div>
        </div>

        {/* Height */}
        <div className="form-group">
          <div className="search_info_holder">
            <div className="search_label_holder">
              <h5>Height</h5>
              <Label>From</Label>
              <Input
                type="number"
                value={heightFrom}
                name="heightFrom"
                setter={setHeightFrom}
              />
              <Label> cm.</Label>
              <Label>To</Label>
              <Input
                type="number"
                value={heightTo}
                name="heightTo"
                setter={setHeightTo}
              />
              <Label> cm.</Label>
            </div>
            <ImportanceLabel for="heightImp">{heightImp}</ImportanceLabel>
            <RangeInput
              value={heightImp}
              name="heightImp"
              setter={setHeightImp}
            />
          </div>
        </div>

        {/* Eyes */}
        <div className="form-group">
          <div className="search_info_holder">
            <div className="search_label_holder">
              <h5>Eye color</h5>
              <Label>{eyeColor}</Label>
              <Select
                setter={setEyeColor}
                name="eyeColor"
                optionsArr={EYE_COLORS}
              />
            </div>
            <ImportanceLabel>{eyeColorImp}</ImportanceLabel>
            <RangeInput
              value={eyeColorImp}
              name="eyeColorImp"
              setter={setEyeColorImp}
            />
          </div>
        </div>

        {/* Hair */}
        <div className="form-group">
          <div className="search_info_holder">
            <div className="search_label_holder">
              <h5>Hair color</h5>
              <Label>{hairColor}</Label>
              <Select setter={setHairColor} optionsArr={HAIR_COLORS} />
            </div>
            <ImportanceLabel>{hairColorImp}</ImportanceLabel>
            <RangeInput
              value={hairColorImp}
              name="hairColorImp"
              setter={setHairColorImp}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export { PeopleFilter };
