import {
  Container,
  Heading,
  VStack,
  Text,
  Box,
  Flex,
  HStack,
  Button,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { yearly, monthly } from "../data/data";
import style from "./Pricing.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

export default function Pricing() {
  const navigate = useNavigate()
  const [bool, setBool] = useState(true);
  const [data, setData] = useState([]);
  const {isAuth, setPlan} = useContext(AppContext);

  useEffect(() => {
    return bool ? setData(yearly) : setData(monthly);
  },[bool]);

  return (
    <>
    <Navbar />
    <Container maxW={{base:"container.sm", md:"container.xl"}} pt={40} m="auto" mb={10}>
      <VStack
        w={{ base: "500px", md: "container.md" }}
        m="auto"
        spacing={10}
        mb={10}
      >
        <Text fontSize="2xl">PRICING</Text>
        <Heading fontSize={{ base: "3xl", md: "4xl" }}>
          Plans for your video content creation strategy
        </Heading>
        <HStack border="1px solid #5D6575" borderRadius="full">
          <Box
            onClick={() => setBool(!bool)}
            className={!bool ? style.active : style.default}
          >
            Bill monthly
          </Box>
          <Box
            onClick={() => setBool(!bool)}
            className={bool ? style.active : style.default}
          >
            Bill yearly
          </Box>
        </HStack>
      </VStack>
      </Container>

      <Container maxW={{base:"container.sm", md:"container.xl"}} m="auto" justifyContent="center">
      <Flex
        w="full"
        gap={5}
        justifyContent="center"
        flexWrap="wrap"
        my={30}
        m="auto"
      >
        {data.map((plan, index) => (
          <Box>
            <Box className="plan-card" key={index + 1}>
              <Box p={4}></Box>
              <Text textAlign="left" fontWeight="600" fontSize="xl">
                {plan.title}
              </Text>
              <Text textAlign="left" fontSize="xs" py={2}>
                {plan.bio}
              </Text>
              <Box p={4}></Box>
              <Text
                textAlign="left"
                fontSize="xx-large"
                color="#24282F"
                fontWeight="700"
              >
                {isNaN(plan.price) ? null : <span style={{ fontSize: "28px" }}>$</span>}
                {plan.price}
                {plan.price > 0 ? <span style={{fontSize:"16px"}}> USD</span> : null}
              </Text>
              <Text textAlign="left" fontSize="xs" py={1}>
                {plan.validity}
              </Text>
              <Box p={8}></Box>
              <Button
                variant="outlined"
                borderRadius="50px"
                fontWeight="300"
                px={8}
                py={6}
                className="get-started"
                onClick={() => {
                  if(isAuth){
                    setPlan(plan)
                    navigate("/checkout")
                  }
                  else{
                    alert("Please login first!!!")
                    navigate("/");
                  }
                }}
              >
                Get started
              </Button>
            </Box>
            <Box className="included" mt={8}>
              <Text fontSize="xs" fontWeight="600">
                {plan.included}
              </Text>
              <VStack alignItems="flex-start" mt={5}>
                {plan.whatsIncluded.map((item, index) => (
                  <HStack key={index + 1} alignItems="center">
                    <CheckIcon color="green" boxSize="10px" />
                    <Text lineHeight="1.2" fontSize="xs">
                      {item}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </Box>
        ))}
      </Flex>
    </Container>
    </>
  );
  
}
