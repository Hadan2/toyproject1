import React from "react";
import {Button, Container, Nav, Navbar,Row,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Add() {
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

            <Container>
                <div className="sqaure">

                    <div className="textst" style={{ marginTop: 20 }}> Title </div>
                        <input
                            className="input-field"
                            onChange={(e) => {}}
                            placeholder="아이디"
                            type="text"
                        />

                    <div className="textst" style={{ marginTop: 20 }}>Content</div>
                        <textarea
                            className="textarea-field"
                            onChange={(e) => {}}
                            placeholder="긴 문단을 입력하세요"
                        ></textarea>
                </div>
                

            </Container>



           
        </div>
    )
}

export default Add;