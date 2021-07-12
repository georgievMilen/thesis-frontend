import {
  PostsPage,
  LogoutPage,
  ProfilePage,
  SearchPage,
  ChatPage,
  CreatePostPage,
  MyPostsPage,
  RequestsPage,
  ConnectionsPage
} from "../Pages";

export const ROUTES = [
  {
    path: "/posts",
    key: "POSTS",
    exact: true,
    private: true,
    component: PostsPage
  },
  {
    path: "/my-posts",
    key: "MY POSTS",
    exact: true,
    private: true,
    component: MyPostsPage
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
    key: "FIND PEOPLE",
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
    path: "/requests",
    key: "REQUESTS",
    exact: true,
    private: true,
    component: RequestsPage
  },
  {
    path: "/connections",
    key: "CONNECTIONS",
    exact: true,
    private: true,
    component: ConnectionsPage
  },
  {
    path: "/chat",
    key: "CHAT",
    exact: false,
    private: true,
    component: ChatPage
  },
  {
    path: "/logout",
    key: "LOGOUT",
    private: true,
    component: LogoutPage
  }
  // {
  //   path: "/",
  //   key: "",
  //   exact: true,
  //   private: true,
  //   component:
  // },
];
