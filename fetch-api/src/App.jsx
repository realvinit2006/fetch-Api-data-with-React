import { useState, useEffect } from "react";
import  axios  from "axios"; // Fixed import

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products?limit=20");
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.image} width="200px" alt="" />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;