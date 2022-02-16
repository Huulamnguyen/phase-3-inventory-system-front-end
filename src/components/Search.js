import React from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Search ({search, setSearch}) {
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
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Supplier</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    )
}
export default Search;