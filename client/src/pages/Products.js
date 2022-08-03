import { React, useState, useEffect } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    fetchProducts().catch(console.err);
  }, []);

  return (
    <Container>
      <Row className="mt-5 product-list">
        {!!products.length &&
          products.map((product, i) => (
            <Col md={6} key={i}>
              <Card className="mt-2 mb-2 product-card">
                <Card.Img src={product.img_url} className="rounded card-img" />
                <Card.ImgOverlay>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>Price: {product.price}$</Card.Text>
                  <Link
                    to={`/products/${product.id}`}
                    className="stretched-link"
                  />
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Products;
