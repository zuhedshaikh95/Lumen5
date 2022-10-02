import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export default function PlayVideo() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        w="70px"
        h="70px"
        borderRadius="50%"
        color="#5846F6"
        fontSize="25px"
        mt={20}
      >
        <i className="fa-solid fa-play"></i>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent bg="transparent">
          <ModalBody m="auto">
            <video width="900px" controls>
              <source src="https://storage.googleapis.com/lumen5-site-images/website-assets/product-tour-header.mp4" />
            </video>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
