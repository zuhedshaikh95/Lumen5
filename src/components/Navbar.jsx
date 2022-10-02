import {
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Show,
  Box,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box id="myNav" position="fixed" top="0" w="full" zIndex={1}>
      <Flex bg="white" px={20} alignItems="center">
        <img
          className="logo"
          src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png"
          alt=""
        />
        <Spacer />
        <Show above="md">
          <HStack gap={4}>
            <Link to="/pricing">Pricing</Link>
            <Link>Enterprise</Link>
            <Link>Case Study</Link>
            <Menu>
              <MenuButton
                fontWeight="400"
                as={Button}
                color="#48505E"
                variant="unstyled"
                rightIcon={<ChevronDownIcon />}
              >
                Learn
              </MenuButton>
              <MenuList>
                <MenuItem p={2}>Resources</MenuItem>
                <MenuItem p={2}>Blog</MenuItem>
              </MenuList>
            </Menu>
            <Button id="login-btn">Log in</Button>
            <Button id="signup-btn">Sign up</Button>
          </HStack>
        </Show>
        <Show below="md">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <VStack gap={4}>
                <Link to="/pricing">Pricing</Link>
                <Link>Enterprise</Link>
                <Link>Case Study</Link>
                <Menu>
                  <MenuButton
                    fontWeight="400"
                    as={Button}
                    color="#48505E"
                    variant="unstyled"
                    rightIcon={<ChevronDownIcon />}
                  >
                    Learn
                  </MenuButton>
                  <MenuList>
                    <MenuItem p={2}>Resources</MenuItem>
                    <MenuItem p={2}>Blog</MenuItem>
                  </MenuList>
                </Menu>
                <Button id="login-btn">Log in</Button>
                <Button id="signup-btn">Sign up</Button>
              </VStack>
            </MenuList>
          </Menu>
        </Show>
      </Flex>
    </Box>
  );
}