import {
  HomePage,
  LoginPage,
  ProfilePage,
  SignupPage,
  SearchPage,
  ChatPage
} from "../Pages";
export const LOGGED_IN_ROUTES = [
  {
    path: "/",
    key: "HOME",
    exact: true,
    private: true,
    component: HomePage
  },
  {
    path: "/profile",
    key: "PROFILE",
    exact: true,
    private: true,
    component: ProfilePage
  },
  {
    path: "/search",
    key: "SEARCH",
    exact: true,
    private: true,
    component: SearchPage
  },
  {
    path: "/chat",
    key: "CHAT",
    private: true,
    component: ChatPage
  }
];
export const ROUTES = [
  {
    path: "/login",
    key: "LOGIN",
    exact: true,
    private: false,
    component: LoginPage
  },
  {
    path: "/signup",
    key: "SIGNUP",
    exact: true,
    private: false,
    component: SignupPage
  }
];
