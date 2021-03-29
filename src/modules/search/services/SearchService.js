import axios from "axios";
import { ENDPOINT, SEARCH_UTL } from "../../../constants";

const searchForPeople = (props, callback) => {
  console.log(props);
  axios
    .post(ENDPOINT + SEARCH_UTL, props)
    .then((res) => {
      return callback(res);
    })
    .catch((err) => {
      if (err.response) return callback(err.response);
    });
};
export { searchForPeople };
