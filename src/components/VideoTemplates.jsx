import { Container, Flex, Box, Heading, Text } from "@chakra-ui/react";
import { videos } from "../data/data";

export default function VideoTemplates() {
  const handlePause = (event) => {
    event.target.pause();
  };

  const handlePlay = (event) => {
    event.target.play();
  };

  return (
    <Container maxW="90%" m="auto" p={0} my="20vh">
      <Heading fontSize="4xl">Captivating video templates</Heading>
      <Text mt={6} fontSize="xl" mb={8}>
        Drag and drop. No experience required.
      </Text>
      <Flex w="full" p={0} flexWrap="wrap" justifyContent="center" gap={8}>
        {videos.map((video, index) => (
          <Box w="350px" key={index} p={0}>
            {/* <Box className="play-icon">
            <i className="fa-solid fa-play"></i>
          </Box> */}
            <video
              src={video.link}
              poster={video.poster}
              onMouseOut={handlePause}
              onMouseOver={handlePlay}
              style={{ borderRadius: "1rem" }}
            ></video>
          </Box>
        ))}
      </Flex>
    </Container>
  );
}
