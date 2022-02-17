import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

function AddProductForm ({categories, suppliers, handleAddProduct}){

    const [formData, setFormData] = useState({
        name: "",
        inventory: "",
        retail_price: "",
        image: "",
        category: "",
        supplier: ""
    })

    function manageFormData(event){
        let targetName = event.target.name;
        let targetValue = event.target.value;

        setFormData({
            ...formData,
            [targetName]: targetValue
        })
    }

    function handleSubmit(event){
        event.preventDefault();

        const formProduct = {
            name: formData.name,
            inventory: parseInt(formData.inventory),
            retail_price: parseFloat(formData.retail_price),
            image: formData.image,
            category: parseInt(formData.category),
            supplier: parseInt(formData.supplier)
        }
        handleAddProduct(formProduct)

        setFormData({
            name: "",
            inventory: "",
            retail_price: "",
            image: "",
            category: "",
            supplier: ""
        })
    }

    return (
        <Container className="mt-3" fluid="md">
            <h2>Add Product Form</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        as="input"
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        onChange={manageFormData}
                        value={formData.name}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        placeholder="Enter Image URL"
                        type="text"
                        name="image"
                        onChange={manageFormData}
                        value={formData.image}
                    />
                </Form.Group>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Inventory</Form.Label>
                        <Form.Control type="number" name="inventory" onChange={manageFormData} value={formData.inventory}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Retail Price</Form.Label>
                        <Form.Control type="number" name="retail_price" onChange={manageFormData} value={formData.retail_price}>
                        </Form.Control>
                    </Form.Group>
                </Row>
                <Row className="mt-3">
                    <Form.Group as={Col}>
                        <Form.Label> Pick a Category</Form.Label>
                        <Form.Select name="category" onChange={manageFormData} value={formData.category}>
                            <option>Category</option>
                            {categories.map( category => <option value={category.id} key={category.id}>{category.name}</option>)}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Pick a Supplier</Form.Label>
                        <Form.Select name="supplier" onChange={manageFormData} value={formData.supplier}>
                            <option>Supplier</option>
                            {suppliers.map(supplier => <option value={supplier.id} key={supplier.id}>{supplier.name}</option>)}
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Button className="mt-3" variant="outline-primary" type="submit">Submit</Button>
            </Form>
        </Container>        
    )
}

export default AddProductForm;