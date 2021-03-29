import React, { useState } from "react";
import {
  SaveButton,
  CancelButton,
  Input,
  Error
} from "../../components/common";
function EditablePasswordContainer({ onSave, onCancel }) {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [newPasswordIsValid, setNewPasswordIsValid] = useState(true);
  const handlePasswordEdit = ({ target }) => {
    setPassword(target.value);
  };

  const handleNewPasswordEdit = ({ target }) => {
    setNewPassword(target.value);
  };

  const handleNewPasswordRepeatEdit = ({ target }) => {
    setNewPasswordRepeat(target.value);
  };

  const handleCancel = (e) => {
    onCancel(e);
  };
  const handleSave = (e) => {
    e.preventDefault();

    const valid = validatePasswords(password, newPassword);
    setNewPasswordIsValid(valid);

    const match = checkPasswordsMatch(newPassword, newPasswordRepeat);
    setPasswordsMatch(match);
    if (match && valid) {
      //  onSave({ e, password, newPassword });
    }
  };

  const validatePasswords = (pw, newPw) => {
    const pwTrimmed = pw.trim();
    const newPwTrimmed = newPw.trim();

    return pwTrimmed.length >= 6 && newPwTrimmed.length >= 6;
  };

  const checkPasswordsMatch = (pw1, pw2) => {
    return pw1 === pw2;
  };

  return (
    <>
      <label>Current</label>
      <Input type="password" onChange={handlePasswordEdit} value={password} />
      <label>New</label>
      <Input
        type="password"
        onChange={handleNewPasswordEdit}
        value={newPassword}
      />
      <label>Repeat </label>
      <Input
        type="password"
        onChange={handleNewPasswordRepeatEdit}
        value={newPasswordRepeat}
      />
      {!passwordsMatch && <Error>Passwords don't match!</Error>}
      {!newPasswordIsValid && (
        <Error>Password must be at least 6 chars long!</Error>
      )}
      <SaveButton onClick={handleSave} />

      <CancelButton onClick={handleCancel} />
    </>
  );
}

export { EditablePasswordContainer };
