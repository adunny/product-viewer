import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
      setLoading(false);
    };
    getProduct().catch(console.err);
  }, [id]);

  const likeHandler = async () => {
    try {
      const { data } = await axios.post(`/api/products/${id}`);
      setProduct({ ...product, likes: data.likes });
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col className="mt-5 pt-5">
          <Link to={"/products"} role="button" className="btn btn-secondary">
            ◀ Back to Products
          </Link>
          <Card>
            <Row>
              <Col md={4}>
                <Card.Img src={product.img_url}></Card.Img>
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <Button className="btn-secondary" onClick={likeHandler}>
                  👍 {product.likes > 0 && product.likes}
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SingleProduct;
