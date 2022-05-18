import React, { useState, useEffect } from "react";
import {
  Flex,
  Button,
  useBreakpointValue,
  Box,
  useClipboard,
} from "@chakra-ui/react";
import { IoWallet } from "react-icons/io5";
import { Card } from "./ConnectedShowAddress";

interface ConnectWallet {
  address: string;
}

export default function ({
  address = "address not identified yet",
}: ConnectWallet) {
  const buttonSize = useBreakpointValue({
    base: "md",
    sm: "md",
    md: "lg",
    lg: "lg",
    xl: "lg",
    "2xl": "lg",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isConnect, setIsConnect] = useState(false);
  const { hasCopied, onCopy } = useClipboard(address);

  useEffect(() => {
    if (isLoading)
      setTimeout(() => {
        setIsLoading(false);
        setIsConnect(true);
      }, 500);
  }, [isLoading]);

  return (
    <Flex
      justify="center"
      align="center"
      flexWrap={{ base: "wrap", md: "nowrap" }}
    >
      {isConnect && (
        <Box m={4}>
          <Card
            address={address}
            showLink={true}
            onCopy={onCopy}
            hasCopied={hasCopied}
          />
        </Box>
      )}
      <Button
        bg="primary.500"
        _hover={{
          bg: "primary.400",
          _disabled: {
            bg: "primary.300",
          },
        }}
        _active={{
          bg: "primary.700",
        }}
        _focus={{
          bg: "primary.600",
          boxShadow: "outline",
        }}
        _disabled={{
          bg: "primary.300",
          cursor: "not-allowed",
        }}
        color="white"
        size={buttonSize}
        leftIcon={isConnect ? undefined : <IoWallet />}
        isLoading={isLoading}
        spinner={<></>}
        loadingText="Connecting..."
        onClick={() => (isConnect ? setIsConnect(false) : setIsLoading(true))}
      >
        {isConnect ? "Disconnect" : "Connect Wallet"}
      </Button>
    </Flex>
  );
}
