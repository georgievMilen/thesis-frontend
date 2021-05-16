import axios from "axios";
import { ENDPOINT } from "../../constants";

const getAPI = (props) => {
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

const postAPI = (props) => {
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

const deleteAPI = (props) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(ENDPOINT + props.url, { params: props.params })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        if (err.response) reject(err.response);
      });
  });
};

export { postAPI, getAPI, deleteAPI };
