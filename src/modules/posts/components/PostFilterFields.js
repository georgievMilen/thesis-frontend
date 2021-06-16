import React from "react";
import { Label, Select, Input, CBoxInput } from "../../../components/common";
import { POST_TYPES, GENDERS, COUNTRIES } from "../../../constants";
const PostFilterFields = ({
  handleState,
  postInfo,
  handleArrState,
  cities
}) => {
  return (
    <>
      <div className="search_info_holder">
        <Label>Type:</Label>
        <Select onChange={handleState} optionsArr={POST_TYPES} name="type" />
      </div>

      <div
        className="search_info_holder"
        style={{
          display: postInfo.data.type === "Acquaintance" ? "block" : "none"
        }}
      >
        <Label>Age from:</Label>
        <Input
          name="ageFrom"
          onChange={handleState}
          type="number"
          value={postInfo.data.ageFrom}
        />

        <Label>Age to:</Label>
        <Input
          name="ageTo"
          onChange={handleState}
          type="number"
          value={postInfo.data.ageTo}
        />
        <Label>
          Gender:
          {GENDERS.map((gender, index) => {
            return (
              <div className="genders_checkbox" key={index}>
                <Label>
                  {gender}
                  <CBoxInput
                    onChange={handleArrState}
                    name="genders"
                    value={gender}
                    checked={postInfo.data.genders.includes(gender)}
                  />
                </Label>
              </div>
            );
          })}
        </Label>
      </div>
      <Label>Country:</Label>
      <Select onChange={handleState} optionsArr={COUNTRIES} name="country" />
      <Label>
        Cities:
        {cities.map((city, index) => {
          return (
            <div className="cities_checkbox" key={index}>
              <Label>
                {city}:
                <CBoxInput
                  onChange={handleArrState}
                  name="cities"
                  value={city}
                  checked={postInfo.data.cities.includes(city)}
                />
              </Label>
            </div>
          );
        })}
      </Label>
    </>
  );
};

export { PostFilterFields };
