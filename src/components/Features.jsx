import { Container, Flex, Image, VStack, Box, Center, Spacer, Heading, Text, Link, Divider } from "@chakra-ui/react";

export default function Features() {
  return (
    <Container maxW="80%" p={0} m="auto" my={10}>
      <Flex maxW="full" p={0} alignItems="flex-end" justifyContent="center" my={20}>
        <Box boxSize="lg" w="50%" >
          <Image
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-content.png"
            objectFit="contain"
          />
        </Box>
        <Spacer />
        <VStack w="50%" textAlign="left" alignItems="flex-start"  pl={20}>
          <Center bg="#5846F6" w="60px" h="60px" borderRadius="full">
            <span
              style={{ color: "white", fontSize: "38px" }}
              className="material-symbols-outlined"
            >
              description
            </span>
          </Center>
            <Box textAlign="left" pb={8}>
                <Heading fontSize="40px">Easier than building <br /> a slide deck</Heading>
                <Text w="75%" py={7} fontSize="xl">
                Creating with Lumen5 is just like making a presentation. Point and click, drag and drop, done and done.
                </Text>
                <Link color="#5846F6">Get started for free</Link>
            </Box>
            <Divider m={10} w="80%" />
            <Box textAlign="left">
                <Text w="75%" py={8}>
                “One of our colleagues called Lumen5 the PowerPoint of video making. Everybody can use PowerPoint; it’s easy.”
                </Text>
                <Box my={-3}>
                <Text fontWeight="600">Michelle Hsiao</Text>
                <Text>Visual Content Director</Text>
                </Box>
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png" boxSize="100px" objectFit="contain" alt="" />
            </Box>
        </VStack>
      </Flex>

      <Flex maxW="full" direction="row-reverse" p={0} alignItems="flex-end" justifyContent="center" my={20}>
        <Box boxSize="lg" w="50%" >
          <Image
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-media.png"
            objectFit="contain"
          />
        </Box>
        <Spacer />
        <VStack w="50%" textAlign="left" alignItems="flex-start"  pl={20}>
          <Center bg="#02D3DA" w="60px" h="60px" borderRadius="full">
            <span
              style={{ color: "white", fontSize: "38px" }}
              className="material-symbols-outlined"
            >
              image_search
            </span>
          </Center>
            <Box textAlign="left" pb={8}>
                <Heading fontSize="40px">A.I. built to repurpose marketing content</Heading>
                <Text w="75%" py={7} fontSize="xl">
                Automatically turn blog posts into videos or transform zoom recordings into captivating clips.
                </Text>
                <Link color="#5846F6">Get started for free</Link>
            </Box>
            <Divider m={10} w="80%" />
            <Box textAlign="left">
                <Text w="75%" py={8}>
                “It's the best content creator I've ever used. It takes me 10-15 minutes to create a video.”
                </Text>
                <Box my={-2}>
                <Text fontWeight="600">Gareth Lloyd</Text>
                <Text>Social Media Marketing Manager</Text>
                </Box>
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-color.png" boxSize="100px" objectFit="contain" alt="" />
            </Box>
        </VStack>
      </Flex>

      <Flex maxW="full" p={0}alignItems="center" justifyContent="center" my={20}>
        <Box boxSize="lg" w="50%" >
          <Image
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-customize.png"
            objectFit="contain"
          />
        </Box>
        <Spacer />
        <VStack w="50%" textAlign="left" alignItems="flex-start"  pl={20}>
          <Center bg="#F8558E" w="60px" h="60px" borderRadius="full">
            <span
              style={{ color: "white", fontSize: "45px" }}
              className="material-symbols-outlined"
            >
              palette
            </span>
          </Center>
            <Box textAlign="left" pb={8}>
                <Heading fontSize="40px">Templates designed to help you stay on brand, on budget, and on time</Heading>
                <Text w="75%" py={7} fontSize="xl">
                Tap into hundreds of customizable designs made to help you communicate effectively and consistently.
                </Text>
                <Link color="#5846F6">Get started for free</Link>
            </Box>
            <Divider m={10} w="80%" />
            <Box textAlign="left">
                <Text w="75%" py={8}>
                “Lumen5 provides a great library of images, video footage, and music to deliver the energy and traction you need for your social posts.”
                </Text>
                <Box my={-2}>
                <Text fontWeight="600">Shirley Pang</Text>
                <Text>Global Social Media Manager</Text>
                </Box>
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png" boxSize="100px" objectFit="contain" alt="" />
            </Box>
        </VStack>
      </Flex>
    </Container>
  );
}
