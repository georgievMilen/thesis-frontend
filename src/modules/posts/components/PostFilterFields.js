import React from "react";
import {
  Label,
  Select,
  Input,
  CheckBoxInput
} from "../../../components/common";
import { POST_TYPES, GENDERS, COUNTRIES } from "../../../constants";
const PostFilterFields = ({
  handleState,
  postInfo,
  handleArrState,
  cities
}) => {
  return (
    <div className="post_filter_wrapper">
      <div className="search_info_holder">
        <Label>Type:</Label>
        <Select onChange={handleState} optionsArr={POST_TYPES} name="type" />
      </div>

      <div
        style={{
          display: postInfo.data.type === "Acquaintance" ? "block" : "none"
        }}
      >
        <div className="search_info_holder">
          <Label>Age from:</Label>
          <Input
            name="ageFrom"
            onChange={handleState}
            type="number"
            value={postInfo.data.ageFrom}
          />
        </div>

        <div className="search_info_holder">
          <Label>Age to:</Label>
          <Input
            name="ageTo"
            onChange={handleState}
            type="number"
            value={postInfo.data.ageTo}
          />
        </div>
        <Label>Gender:</Label>

        {GENDERS.map((gender, index) => {
          return (
            <div className="genders_checkbox" key={index}>
              <CheckBoxInput
                onChange={handleArrState}
                name="genders"
                value={gender}
                checked={postInfo.data.genders.includes(gender)}
              >
                {gender}
              </CheckBoxInput>
            </div>
          );
        })}
      </div>
      <div className="search_info_holder">
        <Label>Country:</Label>
        <Select onChange={handleState} optionsArr={COUNTRIES} name="country" />
      </div>
      <div className="search_info_holder">
        <Label>
          Cities:
          {cities.map((city, index) => {
            return (
              <div className="cities_checkbox" key={index}>
                <CheckBoxInput
                  onChange={handleArrState}
                  name="cities"
                  value={city}
                  checked={postInfo.data.cities.includes(city)}
                >
                  {city}
                </CheckBoxInput>
              </div>
            );
          })}
        </Label>
      </div>
    </div>
  );
};

export { PostFilterFields };
