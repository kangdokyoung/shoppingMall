import React, { useState } from "react";
import styled from "styled-components";
import InputBox from "./InputBox";

const Scontainer = styled.div`
  display: flex;
  justify-content: center;
  height: 1000px;
  min-height: 800px;
`;

const SsignUpContainer = styled.div`
  width: 60%;
  height: 70%;
  display: flex;
  justify-content: center;
`;

const SsignUpBox = styled.form`
  width: 70%;
  height: 100%;
  background-color: lightgrey;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`;

const Stitle = styled.div`
  height: 15%;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  padding-top: 20px;
`;

const SBox = styled.div`
  width: 80%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Sinput = styled.input`
  border: none;
  height: 70%;
  width: 70%;
`;

const SsignUpBtn = styled.button`
  width: 80%;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

function SignUp() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Scontainer>
      <SsignUpContainer>
        <SsignUpBox>
          <Stitle>회원가입</Stitle>
          <InputBox name={"이름"} value={name} set={setName} />
          <InputBox name={"ID"} value={id} set={setId} />
          <InputBox name={"PW"} value={password} set={setPassword} />
          <InputBox name={"E-mail"} value={email} set={setEmail} />

          <SsignUpBtn type="submit">회원가입</SsignUpBtn>
        </SsignUpBox>
      </SsignUpContainer>
    </Scontainer>
  );
}

export default SignUp;
