import React from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

function AddProductForm ({categories, suppliers}){
    return (
        <Container className="mt-3" fluid="md">
            <h2>Add Product Form</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        placeholder="Enter name"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        placeholder="Enter Image URL"
                    />
                </Form.Group>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number">
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Retail Price</Form.Label>
                        <Form.Control type="number">
                        </Form.Control>
                    </Form.Group>
                </Row>
                <Row className="mt-3">
                    <Form.Group as={Col}>
                        <Form.Label>Category</Form.Label>
                        <Form.Select onChange={(e => console.log(e.target.value) )}>
                            <option>All Categories</option>
                            {categories.map( category => <option value={category.id} key={category.id}>{category.name}</option>)}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Supplier</Form.Label>
                        <Form.Select onChange={(e => console.log(e.target.value) )}>
                            <option>All Suppliers</option>
                            {suppliers.map(supplier => <option value={supplier.id} key={supplier.id}>{supplier.name}</option>)}
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Button className="mt-3" as={Col} variant="outline-primary" type="submit">Submit</Button>
            </Form>
        </Container>        
    )
}

export default AddProductForm;