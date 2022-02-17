import React from 'react';
import Image from 'react-bootstrap/Image'

function ProductItem ({product}) {

    const {name, inventory, retail_price, image, categories, suppliers} = product;
    return (
        <tr>
            <td><Image style={{ maxWidth: '4rem' }} src={image} responsive="true" /></td>
            <td>{name}</td>
            <td>{categories.map(category => category.name)}</td>
            <td>{suppliers.map(supplier => supplier.name)}</td>
            <td>{inventory}</td>
            <td>{retail_price}</td>
            <td>Edit - Delete</td>
        </tr>
    )
}

export default ProductItem;