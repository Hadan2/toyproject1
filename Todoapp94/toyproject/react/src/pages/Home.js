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

      const handleComplete = (id) => {
        axios
          .post(`http://localhost:8080/modify/${id}`, {})
          .then((response) => {
            // 데이터를 업데이트하고 다시 렌더링
            const updatedData = props.data1.map((item) => {
              if (item._id === id) {
                return { ...item, complete: true };
              }
              return item;
            });
            props.setData1(updatedData);
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      const handleDelete = (id,i) => {
        axios.delete(`http://localhost:8080/delete/${id}`,{
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
      };



    return (
        
        <div>
            <MyNavbar></MyNavbar>
            
            <div className="large-square">


            <div className="large-square1">
            {
                props.data1.map( (a,i) => {
                    let x = a._id.toString()

                    if(a.complete == false) {
                    return (
                                <div className="small-square textst" >

                                <div className=" textst" onClick={() => {
                                }}>{a.date}</div>

                                <Link to={`/detail/${x}`} className="textst">{a.title}</Link>

                                <div className="button-container">

                                <Button className="bottom-right-completed" onClick={() => {
                                    handleComplete(a._id)
                                }}> Complete! </Button>

                                <Button className="bottom-right-delete" variant="danger" 
                                onClick={(e) => {
                                    handleDelete(a._id,i)
                                }}
                                > Delete </Button> 
                                
                                </div>

                                </div>
                         
                    )}})
            }
            </div>    
                
            <div className="large-square2 textst">
            <div> Completed Todolist</div>
            {
               props.data1.map((a,i) => {

                        if(a.complete==true) {
                            return (
                            
                                <div className="small-square2 textst" >  {a.date}   {a.title} 

                                <div className="button-container">

                                <Button className="bottom-right-delete" variant="danger" 
                                style={{ display: 'inline', marginLeft: 300, marginTop:-5}} 
                                onClick={(e) => {
                                    handleDelete(a._id,i)
                                }}
                                > Delete </Button>

                                </div>
                                
                                </div>

                            
                                )
                            }
                        })
                    
            }
            </div>
                    

                

            

           </div> 
            
            
           
        </div>
    )
}

export default Home;