import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import image1 from "../../Images/Services/service-2.jpg";
import image2 from "../../Images/Services/service-1.jpg";
import image3 from "../../Images/Services/64407.jpg";

const Services = () => {
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img style={{width:350, alignItems:"center"}} variant="top" src={image1}/>
          <Card.Body>
            
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          
        </Card>
        <Card>
          <Card.Img style={{width:350, height:250, alignItems:"center"}} variant="top" src={image2}/>
          <Card.Body>
            
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
        
        </Card>
        <Card>
          <Card.Img style={{width:350, height:250, alignItems:"center"}} variant="top" src={image3}/>
          <Card.Body>
            
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          
        </Card>
      </CardGroup>
    </div>
  );
};

export default Services;
