import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container
      style={{ height: "100vh" }}
      className="d-flex my-auto justify-content-center"
    >
      <Row className="justify-content-center align-items-center">
        <Card>
          <Card.Body className="text-center">
            <Card.Title>Product Viewer</Card.Title>
            <Card.Text>
              <Link
                to={"/products"}
                role="button"
                className="btn btn-secondary"
              >
                view products
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Home;
