import React,{ useState, useEffect } from "react";
import '../App.css';
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

    let [modal, setModal] = useState(false);
    let [id, setId] = useState("");
    let [pwd, setPwd] = useState("");

    const navigate = useNavigate();

    return (
        <div className="background">
            <div style={{ fontFamily : "Oswald", fontSize: '100px', color: 'black', textAlign : "center" }} > Welcome!</div> 

            <div style={{textAlign : "center"}}>
            <button className="login-button" onClick={ () => {
                
            }}>로그인</button>
            
            <button className="signup-button" onClick={ () => {
                setModal(!modal);
            }}>회원가입</button>

            {
                modal === true ? <Modal id = {id} setId = {setId} setPwd = {setPwd} pwd = {pwd} />: null
            }
            </div>
            
            

            
        </div>
    )
}

function Modal(props){

  const navigate = useNavigate();

    return (
        <div>
            

            <div>
            <input onChange={(e) => {
              props.setId(e.target.value);
            }}
            
            placeholder="아이디"
            type="text"
          />

            </div>

            <div>
            <input onChange={(e) => {
              props.setPwd(e.target.value);
            }}
            
            placeholder="비밀번호"
            type="password"
            />
            </div>
          

          <button onClick={() => {
            //console.log(props.id)
            //console.log(props.pwd)
            axios.post('http://localhost:8080/info', {
                id : props.id,
                pwd : props.pwd
            })
            .then(response => {
                /* console.log('요청이 성공했습니다.');
                console.log('서버 응답 데이터:', response.data); */
                navigate('/home')

              })
              .catch(error => {
                /* console.error('요청이 실패했습니다.');
                console.error('오류:', error); */
              });
          }}> 회원가입 </button>


        

            
        </div>

        

       
    )
  }

export default Login;