import React from 'react'
import { Button, Container, Row, Col, CloseButton } from 'react-bootstrap';

function Bootstrap() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='col-4 border'>
                        <Button variant="secondary">Secondary</Button>
                    </Col>
                    <Col className='col-4 border'>
                        <Button variant="secondary">Secondary</Button>
                    </Col>
                    <Col className='col-4 border'>
                        <Button variant="secondary">Secondary</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Bootstrap