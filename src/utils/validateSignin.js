const validateSignin = ({ firstName, lastName, password, email }) => {
  if (firstName.length < 3)
    return { msg: "First name must be at least 3 characters long!" };
  if (lastName.length < 3)
    return { msg: "Last name must be at least 3 characters long!" };
  if (email.length < 8) return { msg: "Please enter valid email!" };
  if (password.length < 6)
    return { msg: "Password must be at least 6 characters long!" };

  return null;
};

export { validateSignin };
