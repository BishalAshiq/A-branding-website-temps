import React from "react";
import { Accordion, Container,} from "react-bootstrap";

const Accordions = () => {
  return (
    <div>
      <h1 className="mt-5"><span style={{color:"#D57008"}}>Ask</span> Anything You Want</h1>
      <Container className="mt-5 pb-5">
        <Accordion defaultActiveKey={["0"]}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Want Know About Us?</Accordion.Header>
            <Accordion.Body>
            Learning is the accumulation of experience; it is skill in action. One learns a language, a craft, a skill, one learns how to drive a car, how to draw, how to read, build a dynamo or sail a ship. Learning is also the accumulation of knowledge, knowledge of various philosophies, of science, and so on.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What Is the Purpose Of the Website?</Accordion.Header>
            <Accordion.Body>
            All that we learn and all that we know is accumulation. It is the accumulative memory which acts; therefore it is imitation. Is it possible to find a state of being in which all knowledge has ceased and there is only that state of being? It is very important to find this out because we approach existence not with the unknown but always with the known. We translate experience in terms of the known, in terms of the past, and therefore living becomes a series of reactions based on the known. As the known is mere imitation, our lives become dull and empty.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Must not the mind go beyond all knowledge all learning?</Accordion.Header>
            <Accordion.Body>
            All that we learn and all that we know is accumulation. It is the accumulative memory which acts; therefore it is imitation. Is it possible to find a state of being in which all knowledge has ceased and there is only that state of being? It is very important to find this out because we approach existence not with the unknown but always with the known. We translate experience in terms of the known, in terms of the past, and therefore living becomes a series of reactions based on the known. As the known is mere imitation, our lives become dull and empty.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Accordions;
