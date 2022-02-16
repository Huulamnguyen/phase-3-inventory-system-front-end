import React, {useState} from 'react';
import Search from './Search';
import ProductList from './ProductList';

function ProductsPage({products}){

    const [search, setSearch] = useState("")

    const displayedProducts = [...products].filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
    
    return (
        <main>
            <Search search={search} setSearch={setSearch}/>
            <ProductList products={displayedProducts} />
        </main>

    )
}

export default ProductsPage;