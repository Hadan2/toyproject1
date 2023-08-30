import React, { useState, useEffect }from "react";
import {Button, Container, Nav, Navbar,Row,Col} from 'react-bootstrap'
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import MyNavbar from "./navbar";

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
            <MyNavbar ></MyNavbar> 
            <div className="completed-box textst"> Completed Todo  </div>

            {

                props.data1.map((a,i) => {
                    let x = a._id.toString()
                    if(a.complete == false) {
                    return (
                        <Container style={{ display: 'flex' }}  key={a._id}>

                                <div className="small-square" >
                                <div className="top-left textst" onClick={() => {
                                    navigate('/')
                                }}>{a.date}</div>

                                
                                <Link to={`/detail/${x}`} className="bottom-left textst">{a.title}</Link>

                                <Button className="bottom-right-completed" onClick={() => {

                                    axios.post(`http://localhost:8080/modify/${a._id}`, {
                                    })
                                    .then(response => {
                                        let copy2 = [...props.data1]
                                        props.setData1(copy2)
                                        console.log(response);
                                    })
                                    .catch(error => {
                                        console.log(error);
                                    });
                                }}> Complete! </Button>


                                <Button className="bottom-right-delete" variant="danger" 
                                onClick={(e) => {
                                    console.log(a.title)
                                    axios.delete(`http://localhost:8080/delete/${a._id}`,{
                                        })
                                        .then(response => {
                                            let copy2 = [...props.data1]
                                            copy2.splice(i,1)
                                            props.setData1(copy2)
                                            console.log(response);
                                        })
                                        .catch(error => {
                                            
                                            console.error(error);
                                        })
                                    
                                }}
                                > Delete </Button>
                            </div>
                         </Container>
                    )}

                    else {
                        return (
                            <Container style={{ display: 'flex'}}  key={a._id}>
                                <div className="small-square2 textst" >  {a.date}   {a.title} </div>

                            </Container>
                        )
                    }
                })

                
            }

            

            
           
        </div>
    )
}

export default Home;