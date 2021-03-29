import React from "react";
import {
  Select,
  RangeInput,
  ImportanceLabel
} from "../../../components/common";
import { EYE_COLORS, HAIR_COLORS } from "../../../constants/index";

const SearchComponent = ({
  // max age
  maxAge,
  maxAgeImp,
  handleMaxAge,
  handleMaxAgeImp,
  // weight
  weight,
  weightImp,
  handleWeight,
  handleWeightImp,
  // height
  height,
  heightImp,
  handleHeight,
  handleHeightImp,
  // eye color
  eyeColor,
  eyeColorImp,
  handleEyeColor,
  handleEyeColorImp,
  // hair color
  hairColor,
  hairColorImp,
  handleHairColor,
  handleHairColorImp,
  // button on click
  onClickSearch
}) => {
  return (
    <div className="form_wrapper">
      <form>
        <div className="h_holder">
          <h3>Search for a match</h3>
          <h4>Importance</h4>
        </div>
        {/* Age */}
        <div className="form-group">
          <div className="search_info_holder">
            <div className="search_label_holder">
              <h5>Max age</h5>
              <label>{maxAge} years old.</label>
              <input type="number" value={maxAge} onChange={handleMaxAge} />
            </div>
            <ImportanceLabel>{maxAgeImp}</ImportanceLabel>
            <RangeInput value={maxAgeImp} onChange={handleMaxAgeImp} />
          </div>
        </div>
        {/* Weight */}
        <div className="form-group">
          <div className="search_info_holder">
            <div className="search_label_holder">
              <h5>Max weight</h5>
              <label>{weight} kg.</label>
              <input type="number" value={weight} onChange={handleWeight} />
            </div>
            <ImportanceLabel>{weightImp}</ImportanceLabel>
            <RangeInput value={weightImp} onChange={handleWeightImp} />
          </div>
        </div>

        {/* Height */}
        <div className="form-group">
          <div className="search_info_holder">
            <div className="search_label_holder">
              <h5>Max height</h5>
              <label>{height} cm.</label>
              <input type="number" value={height} onChange={handleHeight} />
            </div>
            <ImportanceLabel>{heightImp}</ImportanceLabel>
            <RangeInput value={heightImp} onChange={handleHeightImp} />
          </div>
        </div>

        {/* Eyes */}
        <div className="form-group">
          <div className="search_info_holder">
            <div className="search_label_holder">
              <h5>Eye color</h5>
              <label>{eyeColor}</label>
              <Select onChange={handleEyeColor} optionsArr={EYE_COLORS} />
            </div>
            <ImportanceLabel>{eyeColorImp}</ImportanceLabel>
            <RangeInput value={eyeColorImp} onChange={handleEyeColorImp} />
          </div>
        </div>

        {/* Hair */}
        <div className="form-group">
          <div className="search_info_holder">
            <div className="search_label_holder">
              <h5>Hair color</h5>
              <label>{hairColor}</label>
              <Select onChange={handleHairColor} optionsArr={HAIR_COLORS} />
            </div>
            <ImportanceLabel>{hairColorImp}</ImportanceLabel>
            <RangeInput value={hairColorImp} onChange={handleHairColorImp} />
          </div>
        </div>

        <button
          onClick={onClickSearch}
          style={{ margin: "0 auto", marginTop: "50px" }}
          type="submit"
          className="btn btn-primary btn-block"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export { SearchComponent };
