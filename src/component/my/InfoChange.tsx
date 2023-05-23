import React, { useState } from "react";
import styled, { css } from "styled-components";
import InputBox from "../login/InputBox";

type PropsType = {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const SmainModal = styled.div<PropsType>`
  z-index: 10000;
  position: absolute;
  width: 850px;
  height: 1000px;
  left: calc(50vw - 400px);
  top: calc(50vh - 400px);
  background-color: lightgrey;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  transition: 0.5s all;
  ${(prop) => {
    if (prop.isOpen) {
      return css`
        display: flex;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }}
`;

const Stitle = styled.label`
  height: 10%;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  padding-top: 20px;
`;

const SbuttonBox = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

const SBtn = styled.div`
  width: 45%;
  height: 60px;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  background-color: black;
  color: white;
`;

type InfoProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const InfoChange: React.FC<InfoProps> = (props) => {
  const { isOpen, setIsOpen } = props;
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const modalClose = () => {
    setIsOpen(false);
  };
  return (
    <SmainModal isOpen={isOpen}>
      <Stitle>정보 수정</Stitle>
      <InputBox name="이름" value={name} set={setName} />
      <InputBox name="ID" value={id} set={setId} />
      <InputBox name="PW" value={password} set={setPassword} />
      <InputBox name="PW확인" value={check} set={setCheck} />
      <InputBox name="email" value={email} set={setEmail} />
      <InputBox name="주소" value={address} set={setAddress} />
      <SbuttonBox>
        <SBtn onClick={modalClose}>취소</SBtn>
        <SBtn onClick={modalClose}>수정 완료</SBtn>
      </SbuttonBox>
    </SmainModal>
  );
};

export default InfoChange;
