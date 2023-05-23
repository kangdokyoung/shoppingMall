import React, { useState } from "react";
import styled from "styled-components";
import MainGoods from "../mainGoods/MainGoods";
import InfoChange from "./InfoChange";

const Scontainer = styled.div`
  height: 450px;
`;

const Sinfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`;

const SinfoDetail = styled.div`
  height: 50px;
  width: 45%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const Sname = styled.div`
  width: 20%;
  text-align: center;
`;

const Sdetail = styled.div`
  width: 80%;
  text-align: center;
`;

const SchangeInfo = styled.div`
  width: 45%;
  text-align: right;
  font-weight: bold;
  margin-top: 5px;
`;

const Stext = styled.text`
  cursor: pointer;
`;

const SorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SorderTitle = styled.div`
  width: 80%;
  text-align: left;
  font-weight: bold;
  font-size: 25px;
  padding-left: 10px;
  border-bottom: 1px solid black;
`;

const SgoodsBox = styled.div`
  display: flex;
`;

const SinfoBox = (props: { title: string; detail: string }) => {
  const { title, detail } = props;
  return (
    <SinfoDetail>
      <Sname>{title}</Sname>
      <Sdetail>{detail}</Sdetail>
    </SinfoDetail>
  );
};

const My: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Scontainer>
        <InfoChange isOpen={isOpen} setIsOpen={setIsOpen} />
        <Sinfo>
          <SinfoBox title="이름" detail="강도경" />
          <SinfoBox title="ID" detail="아이디" />
          <SinfoBox title="E-mail" detail="이메일" />
          <SinfoBox title="주소" detail="주소" />
          <SchangeInfo>
            <Stext
              onClick={() => {
                setIsOpen(true);
              }}
            >
              정보 수정
            </Stext>
          </SchangeInfo>
        </Sinfo>
      </Scontainer>
      <SorderContainer>
        <SorderTitle>주문 목록</SorderTitle>
        <MainGoods />
      </SorderContainer>
    </>
  );
};

export default My;
