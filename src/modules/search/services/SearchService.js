import axios from "axios";
import { ENDPOINT, SEARCH_URL } from "../../../constants";

const searchForPeople = (props, callback) => {
  axios
    .post(ENDPOINT + SEARCH_URL, props)
    .then((res) => {
      return callback(res);
    })
    .catch((err) => {
      if (err.response) return callback(err.response);
    });
};
export { searchForPeople };
