import React from "react";
import { Label, Image, Paragraph } from "../common";

const Post = () => {
  /* props =    id: 1,
      user: "Fists Last 5",
      title: "post1",
      image: "someURL",
      type: "acquaintance",
      text: "Text of post.",
      ageFrom: null,
      ageTo: 30 
    */
  return (
    <div className="post-wrapper">
      <Label>Title</Label>
      <Image src="src" />
      <Label>User</Label>
      <Label>Type</Label>
      <Paragraph>text</Paragraph>
      {/* {ageFrom && <Label>ageFrom</Label>} */}
      {/* {ageTo && <Label>ageTo</Label>} */}
    </div>
  );
};

export { Post };
