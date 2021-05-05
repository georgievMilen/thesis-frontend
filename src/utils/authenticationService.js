import { BehaviorSubject } from "rxjs";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);
const logout = () => {
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
};
const login = (email) => {
  localStorage.setItem("currentUser", JSON.stringify(email));
  authenticationService.currentUserSubject.next(email);
};
export const authenticationService = {
  logout,
  login,
  currentUserSubject,
  get currentUserValue() {
    return currentUserSubject.value;
  }
};
