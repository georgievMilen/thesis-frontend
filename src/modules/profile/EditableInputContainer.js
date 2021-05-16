import React, { useState } from "react";
import {
  CancelButton,
  SaveButton,
  Input,
  Label
} from "../../components/common";

function EditableInputContainer({
  initialValue = "",
  type = "text",
  onSave,
  onCancel
}) {
  const [newValue, setValue] = useState(initialValue);

  const handleCancel = (e) => {
    onCancel(e);
  };
  const handleSave = (e) => {
    onSave({ e, newValue });
  };

  const handleInput = ({ target }) => {
    let value = target.value;
    if (type === "number") value = parseInt(value);

    setValue(value);
  };

  const handleCheckboxInput = ({ target }) => {
    const { name, checked } = target;
    const rIndex = findRelationshipIndex(name);
    const buffer = [...newValue];
    buffer[rIndex].checked = checked;
    setValue(buffer);
  };

  const findRelationshipIndex = (name) => {
    let i;
    newValue.forEach((element, index) => {
      if (element.name === name) i = index;
    });
    return i;
  };

  return (
    <>
      {(type === "text" || type === "number") && (
        <Input type={type} onChange={handleInput} value={newValue} />
      )}
      {type === "checkbox" &&
        initialValue.map((value, i) => {
          const { name, checked } = value;
          return (
            <Label key={i}>
              {`${value.name}:`}
              <Input
                type={type}
                onChange={handleCheckboxInput}
                name={name}
                checked={checked}
              />
            </Label>
          );
        })}
      <SaveButton onClick={handleSave} />

      <CancelButton onClick={handleCancel} />
    </>
  );
}

export { EditableInputContainer };
