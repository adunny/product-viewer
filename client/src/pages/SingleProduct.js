import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);

      setProduct(data);
      setLoading(false);
    };
    getProduct().catch((err) => {
      if (err.response.status === 404) {
        setLoading(false);
        setNotFound(true);
      }
      console.log(err);
    });
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
        <Col className="mt-5 pt-5 text-center">
          {notFound ? (
            <Link to={"/products"} role="button" className="btn btn-secondary">
              Product Not Found <br /> Click here to return
            </Link>
          ) : (
            <>
              <Link
                to={"/products"}
                role="button"
                className="btn btn-secondary"
              >
                ◀ Back to Products
              </Link>
              <Card className="bg-secondary">
                <Row>
                  <Col md={4}>
                    <Card.Img src={product.img_url}></Card.Img>
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>
                        {product.title} <br />{" "}
                        <span className="fst-italic">${product.price}</span>
                      </Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                    </Card.Body>
                    <Button
                      className="btn-dark text-secondary"
                      onClick={likeHandler}
                    >
                      ❤️ {product.likes > 0 && product.likes}
                    </Button>
                  </Col>
                </Row>
              </Card>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default SingleProduct;
