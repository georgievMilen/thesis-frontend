import axios from "axios";
import { ENDPOINT } from "../../constants";

const get = (props) => {
  return new Promise((resolve, reject) => {
    axios
      .get(ENDPOINT + props.url, { params: props.params })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        if (err.response) reject(err.response);
      });
  });
};

const post = (props) => {
  return new Promise((resolve, reject) => {
    axios
      .post(ENDPOINT + props.url, props.data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        if (err.response) reject(err.response);
      });
  });
};

export { post, get };
