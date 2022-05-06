import React from "react";
import { storiesOf } from "@storybook/react";
import DisclaimerAgreementModalWindow from "./DisclaimerAgreementModalWindow";

storiesOf("Cosmology/legal", module).add("DisclaimerAgreement", () => {
  return (
    <>
      <DisclaimerAgreementModalWindow />
    </>
  );
});
