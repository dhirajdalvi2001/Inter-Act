import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Home() {
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignContent="center"
      justifyContent="center"
      w="50vw"
    >
      <Box
        d="flex"
        justifyContent="center"
        alignContent="center"
        p="5"
        w="100%"
        m="40px auto 15px"
        bg="#C0DDE1"
        borderWidth="1px"
        borderRadius="6"
        opacity="80%"
      >
        <Text
          fontSize="26"
          fontWeight="700"
          letterSpacing={6}
          w="fit-content"
          color="black"
          m="auto"
        >
          Inter-Act
        </Text>
      </Box>
      <Box
        d="flex"
        justifyContent="center"
        alignContent="center"
        p="0"
        w="100%"
        m="20px auto 15px"
        bg="#C0DDE1"
        borderWidth="1px"
        borderRadius="6"
        fontSize="16"
        fontWeight="700"
        opacity="80%"
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab fontSize="16" fontWeight="700">
              Login
            </Tab>
            <Tab fontSize="16" fontWeight="700">
              Sign-Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Home;
