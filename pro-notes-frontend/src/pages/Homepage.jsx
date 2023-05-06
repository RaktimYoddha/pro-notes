import { Box, Heading, Image, Text } from "@chakra-ui/react";
import '../App.css';
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assets/note.png";

export default function Homepage() {
  return (
    <Box className="heading" padding={8}>
      <Image position={"absolute"} right={0} top={70} w={450} src={note} />
      <Heading mt={16}  textAlign={"start"}  >
        Pro Notes Web App
      </Heading>
      <Text mt={8} className="para" maxW={"50%"} textAlign={"justify"}>
        <br/><br/>
        〽️ This note application is a software program that allows users to create,
        organize, and manage their digital notes.<br/><br/>〽️ It is an essential tool for
        anyone looking to streamline their daily tasks, increase productivity,
        and stay organized. <br/><br/>〽️ With its user-friendly interface and powerful
        features, a note application is perfect for students, professionals, and
        anyone who needs to keep track of their ideas, tasks, and goals.<br/><br/>〽️ One of
        the main features of a note application is its ability to create and
        edit notes.<br/><br/>〽️ Users can easily create notes, add text, images, and even
        voice memos. 
      </Text>
    </Box>
  );
}
