import axios from "axios";
import { ENDPOINT, REG_URL } from "../../../constants";
const signup = (userData, callback) => {
  axios
    .post(ENDPOINT + REG_URL, userData)
    .then((res) => {
      return callback(res);
    })
    .catch((err) => {
      if (err.response) return callback(err.response);
    });
};

export { signup };
