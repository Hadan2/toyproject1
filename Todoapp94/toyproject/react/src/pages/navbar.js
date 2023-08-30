import React , { useState, useEffect } from "react";
import {Button, Container, Nav, Navbar,Row,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function MyNavbar() {
    const navigate = useNavigate();
    return (
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
    )
            
}
            

export default MyNavbar;