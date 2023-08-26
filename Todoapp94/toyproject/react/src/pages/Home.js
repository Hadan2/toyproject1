import React from "react";
import {Button, Container, Nav, Navbar,Row,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar>
                <Container>
                    <Row>
                        <Col>
                            <Button variant="contained" color="primary" className="textst"
                                onClick={() => {
                                    navigate('/home')
                                }}>
                                Todolist
                            </Button>
                        </Col>
                        <Col xs="auto">
                            <Button variant="contained" color="primary" className="textst"
                                onClick={() => {
                                    navigate('/add')
                                }}>
                                Add
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
           
        </div>
    )
}

export default Home;