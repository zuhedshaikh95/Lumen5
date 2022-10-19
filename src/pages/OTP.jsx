import { Container, Heading, PinInput, PinInputField, HStack, Box,Image } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OTP() {
    const navigate = useNavigate();
  const [otp, setOtp] = useState(0);

  const handleOTP = (value) => {
    setOtp(value);

    if(otp === "123456"){
        alert("Plan Subscribed successfully!!! Happy Crafting moments");
        navigate("/dashboard")
    }

    
  }
  

  return (
    <Container pt={50} m="auto">
        <Box boxSize="150px">
            <Image src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg" objectFit="cover" />
        </Box>
      <Heading>OTP</Heading>
      <HStack alignItems="center" justifyContent="center" pt={10}>
        <PinInput otp onChange={(value) => handleOTP(value)}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </Container>
  );
}
