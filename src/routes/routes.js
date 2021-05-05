import {
  PostsPage,
  LoginPage,
  LogoutPage,
  ProfilePage,
  SignupPage,
  SearchPage,
  ChatPage,
  CreatePostPage
} from "../Pages";
export const LOGGED_IN_ROUTES = [
  {
    path: "/posts",
    key: "POSTS",
    exact: true,
    private: true,
    component: PostsPage
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
    path: "/create-post",
    key: "CREATE POST",
    exact: true,
    private: true,
    component: CreatePostPage
  },

  {
    path: "/chat",
    key: "CHAT",
    private: true,
    component: ChatPage
  },
  {
    path: "/logout",
    key: "LOGOUT",
    private: true,
    component: LogoutPage
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
