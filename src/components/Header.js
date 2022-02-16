import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

function Header () {
    return (
        <Container className="mt-3" fluid="md">
            <Row>
                <Col><h1>Product</h1></Col>
                <Col md="auto"></Col>
                <Col xs lg="2"><Button>Add Product</Button></Col>
            </Row>
        </Container>    
    )
}
export default Header;