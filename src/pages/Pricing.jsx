import { Container, Heading, VStack, Text, Box, Flex, HStack } from "@chakra-ui/react";
import { useState } from "react";
import style from "./Pricing.module.css"

export default function Pricing() {
    const [plan, setPlan] = useState(false);
  return (
    <Container maxW="container.lg" pt={40}>
      <VStack w={{base:"500px", md:"container.md"}} m="auto" spacing={10}>
        <Text fontSize="2xl">PRICING</Text>
        <Heading fontSize={{base:"3xl", md:"4xl"}}>
          Plans for your video content creation strategy
        </Heading>
        <HStack border="1px solid #48505E" borderRadius="full">
            <Box onClick={() => setPlan(!plan)} className={plan ? style.active : style.default}>Bill monthly</Box>
            <Box onClick={() => setPlan(!plan)} className={!plan ? style.active : style.default}>Bill yearly</Box>
        </HStack>
      </VStack>
    </Container>
  );
}
