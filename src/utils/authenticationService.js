import { BehaviorSubject } from "rxjs";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);
const logout = () => {
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
};
export const authenticationService = {
  logout,
  currentUserSubject,
  get currentUserValue() {
    return currentUserSubject.value;
  }
};
