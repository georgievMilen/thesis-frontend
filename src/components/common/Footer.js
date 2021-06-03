import React from "react";
import { CFooter } from "@coreui/react";

const Footer = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">TU Plovdiv &copy; Bachelor Thesis 2021 </span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Created by </span>
        <a
          href="https://coreui.io/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Milen Georgiev
        </a>
      </div>
    </CFooter>
  );
};

export { Footer };
