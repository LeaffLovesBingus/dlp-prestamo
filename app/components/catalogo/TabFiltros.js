"use client";
import { Box, Button, Heading, Stack, useDisclosure } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { Checkbox } from "@chakra-ui/react";


const Filtros = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen}> Filtros </Button>

            <Modal 
                isOpen={isOpen} 
                onClose={onClose}
                isCentered
            >
                <ModalOverlay
                    bg="rgba(0, 0, 0, 0.5)" 
                />
                    <ModalContent
                        maxW="60vw"
                        maxH="60vh"
                        minW="30vw"
                        minH="30vh"
                        p={4}
                        borderRadius="15px"
                        bg="rgba(0, 0, 0, 0.5)"
                        textAlign="center"
                    >
                    <ModalHeader
                        display="flex"
                        justifyContent="left"
                        alignItems="center"
                        flexDirection="row"
                        px="2vw"
                    >
                        Modal Title  
                    </ModalHeader>
                    <ModalBody
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        px="3vw"
                    >
                        <Stack spacing="2vh" direction="column">
                            <Stack spacing="1vw" direction="row" minW="30vw">
                                <Checkbox>Manga</Checkbox>
                                <Checkbox>Libro</Checkbox>
                                <Checkbox>Comic</Checkbox>
                                <Checkbox>Revista</Checkbox>
                            </Stack>
                            <Stack spacing="1vw" direction="row" minW="30vw">
                                <Checkbox>Fantasia</Checkbox>
                                <Checkbox>Romance</Checkbox>
                                <Checkbox>Juvenil</Checkbox>
                                <Checkbox>Misterio</Checkbox>
                            </Stack>
                            <Stack spacing="1vw" direction="row" minW="30vw">
                                <Checkbox>Terror</Checkbox>
                                <Checkbox>Ciencia Ficcion</Checkbox>
                                <Checkbox>Historia</Checkbox>
                                <Checkbox>Literatura Clásica</Checkbox>
                            </Stack>
                        </Stack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Cerrar
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default Filtros;