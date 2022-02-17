import React from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Search ({search, setSearch, categories, suppliers, handleFilterByCategory, handleFilterBySupplier}) {
    return (
        <Container className="mt-3" fluid="md">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Search</Form.Label>
                    <Form.Control
                        placeholder="Product name ... "
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Form.Group>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Category</Form.Label>
                        <Form.Select onChange={ e => handleFilterByCategory(e.target.value) }>
                            <option value="all">All Categories</option>
                            {categories.map(category => <option value={category.id} key={category.id}>{category.name}</option>)}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Supplier</Form.Label>
                        <Form.Select onChange={(e => handleFilterBySupplier(e.target.value) )}>
                            <option value="all">All Suppliers</option>
                            {suppliers.map(supplier => <option value={supplier.id} key={supplier.id}>{supplier.name}</option>)}
                        </Form.Select>
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    )
}
export default Search;