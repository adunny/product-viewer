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
            <Col sm={12} md={6} key={i}>
              <Card className="mt-2 mb-2 product-card">
                <Card.Header className="bg-secondary text-center">
                  <span className="fs-4 fw-bold">{product.title}</span>
                  <br />${product.price}
                </Card.Header>
                <Link
                  to={`/products/${product.id}`}
                  className="stretched-link"
                />
                <Card.Img
                  src={product.img_url}
                  variant={"bottom"}
                  className="rounded card-img"
                />
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Products;
