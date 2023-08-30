import React , { useState, useEffect } from "react";
import {Button, Container, Nav, Navbar,Row,Col} from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyNavbar from "./navbar";

function Detail(props) {
    const {title} = useParams();
    

    return (
            <div>

            <MyNavbar></MyNavbar>

            <Container>
                <div className="sqaure">

                    <div className="textst" style={{ marginTop: 20 }}> {title} </div>
                        

                    <div className="textst" style={{ marginTop: 20 }}></div>
                        

                     
                </div>
                    
                

            </Container> 

            </div>

               
    )
}

export default Detail;