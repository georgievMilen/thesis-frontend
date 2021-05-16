const validateSignin = ({
  username,
  first_name,
  last_name,
  password,
  email
}) => {
  let msg = "";
  if (password.length < 6) {
    msg = "Password must be at least 6 characters long!";
  }
  // Must update email validation to use regex
  if (email.length < 5) {
    msg = "Please enter valid email!";
  }
  if (username.length < 3) {
    msg = "Username must be at least 3 characters long!";
  }
  if (last_name.length < 3) {
    msg = "Last name must be at least 3 characters long!";
  }
  if (first_name.length < 3) {
    msg = "First name must be at least 3 characters long!";
  }

  return msg;
};

const validatePost = ({
  title,
  text,
  type,
  country,
  cities,
  ageFrom,
  ageTo,
  genders
}) => {
  let msg = "";

  // Must update email validation to use regex
  if (cities.length < 1) {
    msg = "Please select a at least one city!";
  }
  if (country === "") {
    msg = "Please select a country!";
  }
  if (type === "") {
    msg = "Please select a type!";
  }
  if (type === "Acquaintance") {
    if (ageFrom === null) msg = "Please selecte age from!";
    if (ageTo === null) msg = "Please selecte age to!";
    if (genders.length < 1) msg = "Please selecte gender!";
  }
  if (text.length < 3) {
    msg = "Text must be at least 3 characters long!";
  }
  if (title.length < 3) {
    msg = "Title must be at least 3 characters long!";
  }
  return msg;
};

export { validateSignin, validatePost };
