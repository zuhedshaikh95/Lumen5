import {
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
  Box,
  Button,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import PlayVideo from "./PlayVideo";
import { partners } from "../data/data";

export default function Masthead() {
  return (
    <>
      <Container maxW="container.lg" p={0} pt={40}>
        <Flex w="full" p={0} direction={{base:"column", md:"row"}} alignItems="center">
          <Box w={{base:"80%", md:"30%"}} pl={10} textAlign="left" pb={20}>
            <Heading mb={10}>
              Grow your brand and drive demand with video at scale
            </Heading>
            <Text fontSize="2xl" lineHeight="1.2" mb={10}>
              Our online video creator makes it easy for anyone on your team to
              create engaging video content in minutes.
            </Text>
            <Button
              variant="outlined"
              borderRadius="50px"
              px={8}
              py={6}
              bg="#5846F6"
              color="white"
              fontWeight="400"
            >
              Sign up free
            </Button>
          </Box>
          <Spacer />
          <div className="hero-image">
            <PlayVideo />
          </div>
        </Flex>
      </Container>
      <Container maxW="container.lg" p={0} m="auto" mb={20}>
        <Text fontSize="xl" lineHeight="1.2" mb={5} mt={10}>
          Over 10 million videos created across every industry
        </Text>
        <Grid
          templateColumns={{ base: "repeat(4, 1fr)", md: "repeat(8, 1fr)" }}
          m="auto"
          justifyContent="center"
          alignItems="center"
        >
          {partners.map((item, index) => (
            <GridItem key={index} colSpan={1}>
              <Image
                src={item.link}
                boxSize="100px"
                objectFit="contain"
                loading="lazy"
                alt=""
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  );
}
