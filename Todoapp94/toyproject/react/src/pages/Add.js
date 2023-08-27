import React , { useState, useEffect } from "react";
import {Button, Container, Nav, Navbar,Row,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Add() {
    const navigate = useNavigate();

    let [title, setTitle] = useState("");
    let [date, setDate] = useState("");
    let [content, setContent] = useState("");

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
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            placeholder="Title"
                            type="text"
                        />

                        <input
                            className="input-field"
                            onChange={(e) => {
                                setDate(e.target.value)
                            }}
                            placeholder="Date"
                            type="text"
                        />

                    <div className="textst" style={{ marginTop: 20 }}>Content</div>
                        <textarea
                            className="textarea-field"
                            onChange={(e) => {
                                setContent(e.target.value)
                            }}
                            placeholder="Please enter the content"
                        ></textarea>

                        <Button className="add-button" style={{marginTop:20, color: "Dark"}} 
                        onClick={() => {
                            axios.post('http://localhost:8080/data2', {
                                title : title,
                                content : content,
                                date : date
                            })
                            .then(response => {
                                navigate('/home')

                            })
                            .catch(error => {
                            });
                                    }}>
                            Add
                        </Button>
                    </div>

                    
                

            </Container>



           
        </div>
    )
}

export default Add;