export const ENDPOINT = "http://localhost:4000";
export const REG_URL = "/api/v1/register";
export const LOGIN_URL = "/api/v1/login";
export const SEARCH_URL = "/api/v1/search/";
export const UPDATE_PROFILE_URL = "/api/v1/profile/updateProfile";
export const GET_PROFILE_INFO = "/api/v1/profile/getProfileInfo";
export const SLIDER_MAX = 100;
export const SLIDER_MIN = 0;
// POSTERS
export const CREATE_POSTER = "/api/v1/poster/createPoster";
export const GET_ALL_POSTERS = "/api/v1/poster/getAllPosters";
export const GET_MY_POSTERS = "/api/v1/poster/getMyPosters";
export const DELETE_POSTER = "/api/v1/poster/deletePoster";
export const POSTER_CONNECTION_REQUEST = "/api/v1/poster/sendConnectionRequest";
// Arrays
export const GENDERS = ["Male", "Female", "Other"];
export const EYE_COLORS = ["Amber", "Blue", "Brown", "Grey", "Green", "Hazel"];
export const HAIR_COLORS = ["Black", "Brown", "Red", "Blond", "Grey", "White"];
export const POST_TYPES = ["Acquaintance", "Service", "Real Estate", "Cars"];
export const COUNTRIES = ["Bulgaria", "Britain"];
export const CITIES_BG = [
  "Sofia",
  "Plovdiv",
  "Varna",
  "Burgas",
  "Ruse",
  "Stara Zagora",
  "Pleven",
  "Sliven",
  "Dobrich",
  "Shumen",
  "Pernik",
  "Haskovo",
  "Yambol",
  "Pazardzik"
];
export const CITIES_BR = [
  "Longon",
  "Manchester",
  "Leeds",
  "Bradford",
  "Sheffield",
  "Birmingham",
  "Liverpool",
  "Newcastle",
  "Nottingham",
  "Bristol"
];
export const POST_INITIAL_STATE = Object.freeze({
  data: {
    title: "",
    text: "",
    type: "",
    image: "",
    ageFrom: null,
    ageTo: null,
    genders: [],
    country: "",
    cities: []
  },
  isValid: false,
  status: "FROZEN",
  error: null,
  response: null
});
// Labels
export const FIRST_NAME = "First Name";
export const LAST_NAME = "Last Name";
export const EMAIL_ADDRESS = "Email Address";
export const USERNAME = "Username";
export const PASSWORD = "Password";
export const AGE = "Age";
export const GENDER = "Gender";
export const WEIGHT = "Weight";
export const HEIGHT = "Height";
export const EYE_COLOR = "Eye Color";
export const HAIR_COLOR = "Hair Color";
