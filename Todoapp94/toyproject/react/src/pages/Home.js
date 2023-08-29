import React, { useState, useEffect }from "react";
import {Button, Container, Nav, Navbar,Row,Col} from 'react-bootstrap'
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home(props) {
    const navigate = useNavigate();
    const params = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8080/data2') 
          .then(res => {
            let copy = [...res.data]
            props.setData1(copy);
            console.log(props.data1); 
          })
          .catch(err => {
            console.error(err);
          });
      }, []);


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

            {
                props.data1.map((a,i) => {
                    
                    return (
                        <Container key={a._id}>
                            <div className="small-square" >
                                <div className="top-left textst" onClick={() => {
                                    navigate('/')
                                }}>{a.date}</div>
                                
                                <Link to={`/${a.title}`} className="bottom-left textst">{a.title}</Link>

                                <Button className="bottom-right-delete" variant="danger" 
                                onClick={(e) => {
                                    console.log(a.title)
                                    axios.delete('http://localhost:8080/data2',{
                                        data : {
                                            title : a.title
                                        }
                                    })
                                        .then(response => {
                                            console.log(response);
                                            window.location.reload()
                                            
                                        })
                                        .catch(error => {
                                            
                                            console.error(error);
                                        })
                                    
                                }}
                                > Delete </Button>
                            </div>
                         </Container>
                    )
                })
            }

            

            
           
        </div>
    )
}

export default Home;