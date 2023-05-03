import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Scontainer = styled.div`
  display: flex;
  justify-content: center;
  height: 1000px;
  min-height: 800px;
`;

const SLoginContainer = styled.div`
  width: 60%;
  height: 70%;
  display:flex;
  justify-content:center;
`;

const SLoginBox = styled.form`
  width: 70%;
  height: 80%;
  background-color: lightgrey;
  display:flex;
  justify-content:space-evenly;
  flex-direction:column;
  align-items:center;
  margin-top:10%;
`;

const Stitle = styled.div`
  height: 15%;
  font-weight: bold;
  font-size: 30px;
  text-align:center;
  padding-top:20px;
`

const SBox = styled.div`
  width: 80%;
  height: 60px;
  background-color: white;
  display:flex;
  justify-content: space-around;
  align-items:center;
`

const Sinput = styled.input`
  border: none;
  height: 70%;
  width: 70%;
`

const Ssignbtn = styled.div`
  width:80%;
  text-align:right;
  font-weight: bold;
  :hover{
    cursor:pointer;
  }
`

const SLoginBtn = styled.button`
  width: 80%;
  background-color: black;
  color:white;
  font-weight: bold;
  font-size: 25px;
  text-align:center;
  padding-top: 20px;
  padding-bottom: 20px;
`

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Scontainer>
      <SLoginContainer>
        <SLoginBox>
          <Stitle>로그인</Stitle>
          <SBox>
            <h3>ID</h3>
            <Sinput type="text" placeholder="ID" value={id} onChange={(e)=>{setId(e.target.value)}} />
          </SBox>
          <SBox>
            <h3>PW</h3>
            <Sinput type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          </SBox>
          <Ssignbtn>
            <Link to={"/signup"} style={{ textDecoration: "none", color: "black" }}>회원가입</Link>
          </Ssignbtn>
          <SLoginBtn type="submit" onClick={()=>{console.log(id, password, '로그인!')}}>
            로그인
          </SLoginBtn>
        </SLoginBox>
      </SLoginContainer>
    </Scontainer>
  );
}

export default Login;
