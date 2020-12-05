import React from "react";
import { FacebookProvider, Page } from "react-facebook";

const Facebook = () => {
  return (
    <FacebookProvider appId="1524347227953701">
      <Page
        href="https://www.facebook.com/SouthMumbaiUnitedFc"
        tabs="timeline"
        style={{ width: "300px" }}
        adaptContainerWidth
      />
    </FacebookProvider>
  );
};

export default Facebook;
