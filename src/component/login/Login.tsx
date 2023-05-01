import React from "react";
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
  display: flex;
`;

function Login() {
  return (
    <Scontainer>
      <SLoginContainer>gd</SLoginContainer>
    </Scontainer>
  );
}

export default Login;
