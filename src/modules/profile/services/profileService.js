import axios from "axios";
import {
  ENDPOINT,
  UPDATE_PROFILE_URL,
  GET_PROFILE_INFO
} from "../../../constants";

const updateProfile = (props, callback) => {
  axios
    .post(ENDPOINT + UPDATE_PROFILE_URL, props)
    .then((res) => {
      return callback(res);
    })
    .catch((err) => {
      if (err.response) return callback(err.response);
    });
};

const getProfileInfo = (props) => {
  return new Promise((resolve, reject) => {
    axios
      .get(ENDPOINT + GET_PROFILE_INFO, { params: props })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        if (err.res) reject(err.response);
      });
  });
};

export { updateProfile, getProfileInfo };
