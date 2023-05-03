import React,{useState} from 'react';
import styled from 'styled-components';

const Scontainer = styled.div`
  display: flex;
  justify-content: center;
  height: 1000px;
  min-height: 800px;
`;

const SsignUpContainer = styled.div`
  width: 60%;
  height: 70%;
  display:flex;
  justify-content:center;
`;

const SsignUpBox = styled.form`
  width: 70%;
  height: 100%;
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

const SsignUpBtn = styled.button`
  width: 80%;
  background-color: black;
  color:white;
  font-weight: bold;
  font-size: 25px;
  text-align:center;
  padding-top: 20px;
  padding-bottom: 20px;
`

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
                    <SBox>
                        <h3>이름</h3>
                        <Sinput type="text" placeholder='이름' value={name} />
                    </SBox>
                    <SBox>
                        <h3>ID</h3>
                        <Sinput type="text" placeholder='ID' value={id} />
                    </SBox>
                    <SBox>
                        <h3>PW</h3>
                        <Sinput type="password" placeholder='PW' value={password} />
                    </SBox>
                    <SBox>
                        <h3>E-mail</h3>
                        <Sinput type="email" placeholder='이메일' value={email} />
                    </SBox>
                    <SsignUpBtn type='submit' onClick={()=>{console.log(name,id, password, email, '회원가입!')}}>
                        회원가입
                    </SsignUpBtn>
                </SsignUpBox>
            </SsignUpContainer>
        </Scontainer>
    );
}

export default SignUp;