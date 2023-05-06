import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import "./style.css";
import notebg from "../../../assets/note_bg.png";
import { useDispatch } from "react-redux";
import { deleteNotes, updateNotes } from "../../../Redux/notes/note.actions";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function NoteCard({ title, body, user, _id }) {
  const dispatch = useDispatch();
  const [notes, setNotes] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [tempTitle, setTitle] = useState(title);
  const [tempBody, setBody] = useState(body);

  const updateNote =()=>{

    dispatch(updateNotes(_id,{title:tempTitle,body:tempBody}))
    onClose()

  }

  return (
    <Card backgroundImage={`url(${notebg})`}>
      <CardBody>
        {/* <VStack> */}
          <div  className='mt-20 flex flex-wrap gap-7'>
            <Heading>{title}</Heading><br/>
            <Text>{body}</Text><br/>

            <Flex gap={10}>
              <>
                <Button ml={7} onClick={onOpen}>Update</Button>

                <Modal
                  initialFocusRef={initialRef}
                  finalFocusRef={finalRef}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent h="600px" w="900px">
                    <ModalHeader>Update Note</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6} >
                      <Input
                        value={tempTitle}
                        
                        placeholder="Please enter title"
                        onChange={(e) => setTitle(e.target.value)}
                      ></Input>
                      <Textarea
                        mt={8}
                        value={tempBody}
                        h="370px"
                        placeholder={"Please enter description"}
                        onChange={(e) => setBody(e.target.value)}
                      ></Textarea>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mt={-10} mr={200} onClick={updateNote}>Update</Button>
                      <Button  mt={-10} ml={10} onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </>
              <Button
                onClick={() => {
                  dispatch(deleteNotes(_id));
                }}
              >
                Delete
              </Button>
            </Flex>
          </div>
        {/* </VStack> */}
      </CardBody>
    </Card>
  );
}
