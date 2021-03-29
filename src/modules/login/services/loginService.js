import axios from "axios";
import { ENDPOINT, LOGIN_URL } from "../../../constants";
import { authenticationService } from "../../../utils";
const login = ({ email, password }, callback) => {
  axios
    .post(ENDPOINT + LOGIN_URL, { email, password })
    .then((res) => {
      localStorage.setItem("currentUser", JSON.stringify(email));
      authenticationService.currentUserSubject.next(email);
      return callback(res);
    })
    .catch((err) => {
      if (err.response) return callback(err.response);
    });
};
export { login };
