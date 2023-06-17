import { fakeFetch } from "./api/productFakeFetch";
import { useEffect, useState } from "react";

export const ProductOnClick = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [filteredProductList, setFilteredProductList] = useState([]);

  const filterProduct = (name) => {
    setFilteredProductList(
      (filteredProductList) =>
        (filteredProductList = product.filter(
          (currentProduct) => currentProduct.name === name
        ))
    );
  };
  const getData = async () => {
    try {
      setLoading((isLoading) => (isLoading = true));
      const { status, data } = await fakeFetch(
        "https://example.com/api/products"
      );
      if (status === 200) {
        setProduct((product) => (product = data.products));
        setLoading((isLoading) => (isLoading = false));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Question-1</h2>
      <h2>Product Page</h2>
      <div>{isLoading && "Loading..."}</div>
      {product.map(({ name }) => {
        return (
          <button
            onClick={() => {
              filterProduct(name);
            }}
          >
            {name}
          </button>
        );
      })}
      <ul>
        {filteredProductList.map(({ src, name, price, desc }) => {
          return (
            <li style={{ listStyle: "none" }}>
              <div>
                <img src={src} alt="" />
                <p>
                  <b>Name</b>: {name}
                </p>
                <p>Price: {price}</p>
                <p>Description: {desc}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
