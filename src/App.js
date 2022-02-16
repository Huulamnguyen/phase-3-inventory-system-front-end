import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


import Header from "./components/Header";
import ProductsPage from "./components/ProductsPage";

const SERVER_URL = "http://localhost:9292"

function App() {

  const [products, setProducts] = useState([])
  const [ issueRequest, setIssueRequest ] = useState(false)

  function loadProducts(){
    fetch(`${SERVER_URL}/products`)
    .then(r => r.json())
    .then(data => setProducts(data))
  }

  useEffect( () => {
    loadProducts();
  },[issueRequest])

  return (
    <div className="App">
      <Header />
      <ProductsPage products={products}/>
    </div>
  );
}

export default App;
