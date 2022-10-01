import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Modal1 = ({form1,setForm1,handleSave}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

 
  


    const handleChange=(e)=>{
        const {name,value}=e.target;
        setForm1({...form1,[name]:value})

    }

    
  return (
    <Box pt={5}><Button onClick={onOpen} w="70%" h={["40px","50px","60px","70px","80px"]} color="white" borderRadius={15} fontSize={30} bg="rgb(24,132,51)" _hover={{outline:"rgb(24,132,51)",bgColor:"rgb(24,132,51)"}} _focus={{outline:"rgb(24,132,51)",bgColor:"rgb(24,132,51)"}}>+</Button><Text pt={2} fontWeight={500}>Time Track</Text>
 

    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New time entry for Today</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Projects</FormLabel>
            <Select ref={initialRef} placeholder='Project Name' name="projects" value={form1.projects} onChange={handleChange}>
                <option value="Harvest">Harvest</option>
                <option value="Myntra">Myntra</option>
                
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Category</FormLabel>
            <Select ref={initialRef} placeholder='Choose Category' name="category" value={form1.category} onChange={handleChange}>
                <option value="Harvest">Other</option>
                <option value="Myntra">Design</option>
                
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleSave}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal></Box>
  )
}

export default Modal1