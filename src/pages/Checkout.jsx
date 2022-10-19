import { CheckIcon } from "@chakra-ui/icons";
import {Navigate, useNavigate} from "react-router-dom";
import {
  Container,
  Flex,
  VStack,
  Text,
  Heading,
  HStack,
  Spacer,
  Box,
  Divider,
  Input,
  Select,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  FormControl,
} from "@chakra-ui/react";
import { useContext } from "react";
import {AppContext} from "../context/AppContextProvider";

export default function Checkout() {
  const navigate = useNavigate()
  const {plan, isAuth, user} = useContext(AppContext);

  if(!isAuth){
    return <Navigate to="/" />
  }

  const handleSubscribe = () => {
    navigate("/otp")
  };

  return (
    <Container maxW="container.lg" p={0} m="auto" mt={20} pt={10}>
      <Flex w="full" m="auto">
        <VStack w="40%" alignItems="flex-start">
          <Text color="#1a1a1a99;" fontSize="sm" fontWeight="600">
            Subscribe to Basic - v1 (Annual)
          </Text>
          <HStack alignItems="flex-end">
            <Heading color="#303030" fontWeight="600">
            {plan.type === "year" ? (plan.price * 12) : plan.price}
            </Heading>
            <Text>per {plan.type}</Text>
          </HStack>
          <Text color="#1a1a1a99;" fontSize="sm" fontWeight="600">
            View details
          </Text>
          <Flex w="full">
            <Box textAlign="left">
              <Text fontSize="sm" fontWeight="600" color="#303030">
                {plan.title} - v1 Annual
              </Text>
              <Text fontSize="xs" color="#1a1a1a99;">
                Billed {plan.type}
              </Text>
            </Box>
            <Spacer />
            <Text fontSize="sm" fontWeight="600" color="#303030">
              {/* ${plan.price * 12}.00 */}
              ${plan.type === "year" ? (plan.price * 12) : plan.price}
            </Text>
          </Flex>
          <Box p={2}></Box>
          <Flex w="full">
            <Text fontSize="sm" fontWeight="600" color="#303030">
              Subtotal
            </Text>
            <Spacer />
            <Text fontSize="sm" fontWeight="600" color="#303030">
            ${plan.type === "year" ? (plan.price * 12) : plan.price}
            </Text>
          </Flex>
          <Divider py={1} />
          <Flex w="full">
            <Text color="#1a1a1a99;" fontSize="14px">
              Tax
            </Text>
            <Spacer />
            <Text color="#1a1a1a99;" fontSize="14px">
              0.00
            </Text>
          </Flex>
          <Divider py={1} />
          <Flex w="full">
            <Text fontSize="sm" fontWeight="600" color="#303030">
              Total due today
            </Text>
            <Spacer />
            <Text fontSize="sm" fontWeight="600" color="#303030">
            ${plan.type === "year" ? (plan.price * 12) : plan.price}
            </Text>
          </Flex>
        </VStack>
        <Spacer />
        <VStack w="40%" alignItems="flex-start">
          <Text color="#303030" fontSize="lg">
            Pay with card
          </Text>
          <Input type="email"  disabled value={user.email} />  
          <Box w="full" textAlign="left" fontSize="sm" pt={3}>
            <Text>Card information</Text>
            <Input required type="number" placeholder="1234 1234 1234 1234" />
          </Box>
          <Box pt={2}>
            <HStack>
              <Input placeholder="MM / YY"  />
              <Input placeholder="CVC"  />
            </HStack>
          </Box>
          <Box w="full" textAlign="left" fontSize="sm" pt={3}>
            <Text>Name on card</Text>
            <Input type="text" isRequired />
          </Box>
          <Box w="full" textAlign="left" fontSize="sm" pt={3}>
            <Text>Country or region</Text>
            <Select isRequired>
              <option value="India">India</option>
              <option value="USA">United States</option>
              <option value="India">China</option>
              <option value="India">United Arab Emirates</option>
            </Select>
          </Box>
          <Box w="full" textAlign="left" fontSize="sm" pt={3} pb={5}>
            <Input type="text" placeholder="Postal code" />
          </Box>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="$"
            />
            <Input placeholder="Enter amount" isRequired />
            <InputRightElement children={<CheckIcon color="green.500" />} />
          </InputGroup>
          <Input
            onClick={handleSubscribe}
            type="submit"
            bg="#5846F6"
            value="Subscribe"
            pt={2}
            isRequired
          />
          <Box pt={4}>
            <Text fontSize="xs">
              By confirming your subscription, you allow Lumen5 Technologies Ltd
              to charge your card for this payment and future payments in
              accordance with their terms. You can always cancel your
              subscription.
            </Text>
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
}
