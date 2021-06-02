import React from "react";
import { useToast } from "@chakra-ui/react";
const ErrorMsgToast = () => {
  const toast = useToast();
  return (
    <>
      {toast({
        title: "Error",
        description: "Data could not be fetched",
        status: "error",
        duration: 5000,
        isClosable: true,
      })}
    </>
  );
};

export default ErrorMsgToast;
