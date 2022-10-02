import { Container, Heading, VStack, Text, Box, Button } from "@chakra-ui/react";

export default function SignUpCard() {
  return (
    <Container
      className="signup-template"
      maxW={{ base: "90%", md: "container.lg" }}
      py={{base:"2.5rem", md:"4.5rem"}}
      px="3rem"
      my={10}
    >
      <VStack alignItems="center" justifyContent="center">
        <Box w={{base:"90%", md:"70%"}} mb={5}>
          <Heading color="white" fontSize={{base:"3xl", md:"4xl"}}>
            Join over 1,000,000 companies using Lumen5 to tell their stories.
          </Heading>
        </Box>
        <Box w={{base:"80%", md:"70%"}} color="white" fontSize="xl">
          <Text mb={6}>
            Lumen5 is a video creation software that helps marketers,
            publishers, and brands create video content in a breeze, without any
            technical expertise.
          </Text>
        </Box>
        <Box>
            <Button>Sign up free</Button>
        </Box>
      </VStack>
    </Container>
  );
}
