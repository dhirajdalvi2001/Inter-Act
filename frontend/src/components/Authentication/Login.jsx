import React, { useState } from "react";
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";

const Login = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  const submitHandler = () => {};

  return (
    <VStack spacing="5">
      <FormControl id="email" isRequired>
        <FormLabel fontWeight={700}>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          type="text"
          border="1px solid #666"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel fontWeight={700}>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter Your Password"
            type={show ? "text" : "password"}
            border="1px solid #666"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="50">
            <Button
              size="sm"
              padding="5px 30px"
              onClick={handleClick}
              backgroundColor="#2DBCE4"
              marginRight="1"
              transition="all 0.5s"
              color="white"
              _hover={{ bg: "#C0DDE1" }}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        backgroundColor="#2DBCE4"
        transition="all 0.5s"
        color="white"
        _hover={{ bg: "#83c5d7" }}
        width="100%"
        marginTop="15"
        onClick={submitHandler}
      >
        Sign Up
      </Button>
      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
