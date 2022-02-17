import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


import Header from "./components/Header";
import AddProductForm from "./components/AddProductForm";
import ProductsPage from "./components/ProductsPage";

import { Switch, Route } from "react-router-dom";

const SERVER_URL = "http://localhost:9292"

function App() {

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [suppliers, setSuppliers] = useState([])
  const [ issueRequest, setIssueRequest ] = useState(false)
  
  function loadAllProducts(){
    fetch(`${SERVER_URL}/products`)
    .then(r => r.json())
    .then(data => setProducts(data))
  }

  function loadAllCategories(){
    fetch(`${SERVER_URL}/categories`)
    .then(r => r.json())
    .then(data => setCategories(data))
  }
  
  function loadAllSuppliers(){
    fetch(`${SERVER_URL}/suppliers`)
    .then(r => r.json())
    .then(data => setSuppliers(data))
  }

  useEffect( () => {
    loadAllProducts();
    loadAllCategories();
    loadAllSuppliers()
  },[issueRequest])

  function handleFilterByCategory(categoryValue){
    if (categoryValue === "all"){
      loadAllProducts()
    } else {
      fetch(`${SERVER_URL}/categories/${categoryValue}`)
        .then (r => r.json())
        .then(data => setProducts(data.products))
    }
  }
  function handleFilterBySupplier(supplierValue){
    if (supplierValue === "all"){
      loadAllProducts()
    } else {
      fetch(`${SERVER_URL}/suppliers/${supplierValue}`)
        .then (r => r.json())
        .then(data => setProducts(data.products))
    }
  }

  return (
    <div className="App">
      <Switch>

        <Route path="/products/new">
          <AddProductForm categories={categories} suppliers={suppliers}/>
        </Route>

        <Route path="/products">
          <Header />
          <ProductsPage products={products} categories={categories} suppliers={suppliers} 
                        handleFilterByCategory={handleFilterByCategory}
                        handleFilterBySupplier={handleFilterBySupplier}
                        />
        </Route>

        {/* <Route path="/">
        </Route> */}

      </Switch>
    </div>
  );
}

export default App;
