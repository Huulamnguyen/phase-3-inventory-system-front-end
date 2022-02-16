import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import ProductItem from './ProductItem';

function ProductList ({products}){
    return (
        <Container className="mt-3" fluid="md">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Supplier</th>
                        <th>Inventory</th>
                        <th>Retail Price</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                        {products.map(product => <ProductItem key={product.id} product={product} />)}
                </tbody>
            </Table>
        </Container>
        
    )
}

export default ProductList;