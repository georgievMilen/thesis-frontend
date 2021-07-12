import { POST_INITIAL_STATE } from "../constants";
const Reducer = (postInfo, action) => {
  switch (action.type) {
    case "login":
      return {
        logged: action.payload
      };
    case "logout":
      return {
        logged: action.payload
      };
    default:
      return postInfo;
  }
};

const noEmptyFields = (data) => {
  if (Object !== typeof data) {
    return false;
  }

  const fields = Object.keys(data);

  for (let index = 0; index < fields.length; index++) {
    const fieldName = fields[index];

    const fieldValue = data[fieldName];

    if (fieldValue.length < 1) {
      return false;
    }
  }

  return true;
};

const enterData = (postInfo, action) => {
  const { fieldName, value } = action.payload || {};

  if (postInfo.data.hasOwnProperty(fieldName)) {
    // Update data property values
    const data = {
      ...postInfo.data,
      [fieldName]: value
    };

    if (fieldName === "type") {
      data.ageFrom = "";
      data.ageTo = "";
      data.genders = [];
    }
    return {
      ...postInfo,
      data,
      isValue: noEmptyFields(data)
    };
  }
};

const handleArr = (postInfo, action) => {
  const { fieldName, value } = action.payload || {};

  let newArr = [...postInfo.data[fieldName]];

  // Update data property values
  const index = postInfo.data[fieldName].findIndex(
    (element) => element === value
  );
  if (index < 0) {
    newArr.push(value);
  } else {
    newArr = newArr.filter((element) => element !== value);
  }
  const data = {
    ...postInfo.data,
    [fieldName]: newArr
  };

  return {
    ...postInfo,
    data,
    isValue: noEmptyFields(data)
  };
};

const clearArr = (postInfo, action) => {
  const { fieldName } = action.payload || {};

  const emptyArr = [];
  const data = {
    ...postInfo.data,
    [fieldName]: emptyArr
  };
  return {
    ...postInfo,
    data,
    isValue: noEmptyFields(data)
  };
};

const success = (postInfo, action) => {
  return {
    ...postInfo,
    status: "READY",
    error: null,
    response: action.payload
  };
};

const failure = (postInfo, action) => {
  return {
    ...postInfo,
    status: "ERROR",
    error: action.payload,
    response: null
  };
};

const formReducer = (postInfo, action) => {
  switch (action.type) {
    case "form/enter-data":
      return Object.assign({}, postInfo, enterData(postInfo, action));
    case "form/arr-state-select":
      return Object.assign({}, postInfo, handleArr(postInfo, action));
    case "form/arr-state-clear":
      return Object.assign({}, postInfo, clearArr(postInfo, action));
    case "form/update-status":
      return Object.assign({}, postInfo, { status: action.payload });
    case "form/success":
      return Object.assign({}, postInfo, success(postInfo, action));
    case "form/failure":
      return Object.assign({}, postInfo, failure(postInfo, action));
    case "form/reset":
      return POST_INITIAL_STATE;
    default:
      return postInfo;
  }
};

export { Reducer, formReducer };
