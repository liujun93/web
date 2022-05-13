import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import ConnectedShowAddress from "./ConnectedShowAddress";
import ConnectWallet from "./ConnectWallet";
import ShowBalance from "./ShowBalance";
import ConnectModal from "./ConnectModal";

storiesOf("Cosmology/wallet", module).add("ConnectedShowAddress", () => {
  const showLink = boolean("showLink", false);
  return (
    <ConnectedShowAddress
      showLink={showLink}
      address="juno1jnxl8gxfjz4pqswpa2e8j5h9wcgxcsyvratfxf"
    />
  );
});

storiesOf("Cosmology/wallet", module).add("ConnectWallet", () => {
  return (
    <ConnectWallet address="juno1jnxl8gxfjz4pqswpa2e8j5h9wcgxcsyvratfxf" />
  );
});

storiesOf("Cosmology/wallet", module).add("ShowBalance", () => {
  return <ShowBalance />;
});

storiesOf("Cosmology/wallet", module).add("ConnectModal", () => {
  return <ConnectModal open={undefined} setOpen={undefined} />;
});
