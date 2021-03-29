import React, { useState } from "react";
import { SaveButton, CancelButton, Select } from "../../components/common";
function EditableSelectContainer({
  initialValue = "",
  onSave,
  onCancel,
  colors
}) {
  const [newValue, setValue] = useState(initialValue);

  const handleCancel = (e) => {
    onCancel(e);
  };
  const handleSave = (e) => {
    onSave({ e, newValue });
  };

  const handleInput = ({ target }) => {
    console.log(target.value);
    setValue(target.value);
  };

  return (
    <>
      <Select onChange={handleInput} optionsArr={colors} />

      <SaveButton onClick={handleSave} />

      <CancelButton onClick={handleCancel} />
    </>
  );
}

export { EditableSelectContainer };
