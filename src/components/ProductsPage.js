import React, {useState} from 'react';
import Search from './Search';
import ProductList from './ProductList';

function ProductsPage({products, categories, suppliers, handleFilterByCategory, handleFilterBySupplier}){

    const [search, setSearch] = useState("")

    const displayedProducts = [...products].filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
    
    return (
        <main>
            <Search search={search} setSearch={setSearch} categories={categories} suppliers={suppliers} 
                    handleFilterByCategory={handleFilterByCategory}
                    handleFilterBySupplier={handleFilterBySupplier}
                    />
            <ProductList products={displayedProducts} />
        </main>

    )
}

export default ProductsPage;