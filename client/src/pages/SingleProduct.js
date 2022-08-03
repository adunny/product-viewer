import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      console.log(data);
      setProduct(data);
      setLoading(false);
    };
    getProduct().catch(console.err);
  }, [id]);

  if (loading) {
    return <div>loading...</div>;
  }

  return <div>{product.title}</div>;
}

export default SingleProduct;
