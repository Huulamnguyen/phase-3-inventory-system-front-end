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
  const [ handleRequest, setHandleRequest ] = useState(false)
  
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
  },[handleRequest])

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

  function handleAddProduct(formProduct){
    console.log(formProduct)

    const newProduct = {
      name: formProduct.name,
      inventory: formProduct.inventory,
      image: formProduct.image,
      retail_price: formProduct.retail_price,
      category: formProduct.category,
      supplier: formProduct.supplier
    }

    fetch(`${SERVER_URL}/products`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })
      .then( r => r.json())
      .then(setHandleRequest(!handleRequest))
    
    const newProductsArray = [...products, newProduct]
    setProducts(newProductsArray)
  }

  return (
    <div className="App">
      <Switch>

        <Route path="/products/new">
          <AddProductForm categories={categories} suppliers={suppliers} handleAddProduct={handleAddProduct}/>
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
