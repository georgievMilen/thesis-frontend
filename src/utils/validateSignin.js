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

export { validateSignin };
