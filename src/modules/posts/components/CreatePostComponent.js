import React from "react";
import { Textarea, Label, Input } from "../../../components/common";
const CreatePostComponent = () => {
  return (
    <div className="form_wrapper">
      <form>
        <div className="h_holder">
          <h3>Create a post</h3>
        </div>

        <Label>Text:</Label>
        <Textarea />
        <Label>Age from:</Label>
        <Input type="number" />
        <Label>Age to:</Label>
        <Input type="number" />
      </form>
    </div>
  );
};

export { CreatePostComponent };
