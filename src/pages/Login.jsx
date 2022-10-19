import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";
import {
  Container,
  VStack,
  Image,
  Box,
  Heading,
  Text,
  Flex,
  Show,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Button,
  Spacer,
} from "@chakra-ui/react";

const initState = {
  email: "",
  password: "",
};

export default function Login() {
  const { isAuth, setIsAuth, toggleAuth, token, setToken, setUser } =
    useContext(AppContext);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [formdata, setFormData] = useState(initState);

  if (isAuth && token) {
    return <Navigate to="/dashboard" /> 
  }

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = () => {
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        return data.token ? (setToken(data.token), setIsAuth(true), setUser(formdata)) :(setIsAuth(false), alert("Something went wrong, check email or password"));
      });
  };

  return (
    <>
      <Container maxW="full" p={0}>
        <Flex>
          <Show above="md">
            <div className="login-bg">
              <VStack alignItems="flex-start" pt={5}>
                <Box boxSize="150px" textAlign="left" ml={10}>
                  <Image
                    src="https://storage.googleapis.com/lumen5-site-images/L5-logo/logo-white_266x156.png"
                    objectFit="cover"
                    alt=""
                  />
                </Box>
                <Heading
                  color="white"
                  fontSize="3xl"
                  textAlign="left"
                  pr={20}
                  lineHeight="1.4"
                  pl={10}
                >
                  Grow your brand and drive demand with video at scale
                </Heading>
                <Text
                  textAlign="left"
                  pl={10}
                  pr={20}
                  color="white"
                  fontSize="xl"
                >
                  Join over 1,000,000 companies using Lumen5 to tell their
                  stories.
                </Text>
                <Box p={7}></Box>
                <Flex pl={10} flexWrap="wrap" alignItems="flex-start" gap={5}>
                  <Box boxSize="90px" mb={0}>
                    <Image
                      src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-seimens-white.png"
                      objectFit="cover"
                      alt=""
                    />
                  </Box>
                  <Box boxSize="90px" mb={0}>
                    <Image
                      src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sf-white.png"
                      objectFit="cover"
                      alt=""
                    />
                  </Box>
                  <Box boxSize="90px" mb={0}>
                    <Image
                      src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merck-white.png"
                      objectFit="cover"
                      alt=""
                    />
                  </Box>
                  <Box boxSize="90px">
                    <Image
                      src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-white.png"
                      objectFit="cover"
                      alt=""
                    />
                  </Box>
                  <Box boxSize="90px">
                    <Image
                      src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-white.png"
                      objectFit="cover"
                      alt=""
                    />
                  </Box>
                  <Box boxSize="90px">
                    <Image
                      src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-white.png"
                      objectFit="cover"
                      alt=""
                    />
                  </Box>
                </Flex>
              </VStack>
            </div>
          </Show>
          <Spacer />
          <VStack
            w={{ base: "full", md: "60%" }}
            alignItems="flex-start"
            pr={{ base: "", md: "60" }}
          >
            <Show below="md">
              <Box p={8}>
                <img
                  src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg"
                  alt=""
                  width="150"
                />
              </Box>
            </Show>
            <Box textAlign="left">
              <Heading p={5}>Welcome Back!</Heading>
            </Box>
            <VStack p={5} w="full">
              <FormControl>
                <FormLabel>WORK EMAIL</FormLabel>
                <Input
                  type="email"
                  variant="flushed"
                  name="email"
                  focusBorderColor="#5846F6"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl pt={5}>
                <FormLabel>PASSWORD</FormLabel>
                <InputGroup size="md" pt={5} pb={10}>
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    variant="flushed"
                    name="password"
                    focusBorderColor="#5846F6"
                    onChange={handleChange}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" mt={10} onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Input
                type="submit"
                bg="#5846F6"
                color="white"
                vlaue="Login"
                borderRadius="full"
                onClick={handleSubmit}
                cursor="pointer"
              />

              <VStack pt={10} w="full" gap={5}>
                <Button
                  w="full"
                  borderRadius="full"
                  bg=""
                  border="2px solid #4A68AD"
                  p={6}
                  fontWeight="500"
                  fontSize="sm"
                  color="#4A68AD"
                  leftIcon={
                    <i
                      style={{ color: "#4A68AD" }}
                      className="fa-brands fa-square-facebook"
                    ></i>
                  }
                >
                  Login with Facebook
                </Button>
                <Button
                  w="full"
                  borderRadius="full"
                  bg=""
                  border="1px solid #5846F6"
                  p={6}
                  fontWeight="500"
                  fontSize="sm"
                  leftIcon={
                    <i className="fa-sharp fa-solid fa-key-skeleton"></i>
                  }
                >
                  Login with SSO
                </Button>
              </VStack>
            </VStack>
          </VStack>
        </Flex>
      </Container>
    </>
  );
}
