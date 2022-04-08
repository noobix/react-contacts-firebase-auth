import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "./ContactForm";
import Contacts from "./Contacts";

const App = () => {
    return (<React.Fragment>
        <Container>
      <Row>
        <Col md={4}><Form /></Col>
        <Col md={8}><Contacts /></Col>
      </Row>
    </Container>
    </React.Fragment>)
}
export default App