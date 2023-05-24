import React, { useState } from "react";
import styled from "styled-components";

const Scontainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// aspect-ratio: 1; <- 가로세로 비율. 3/1 하면 가로3 세로1 비율
const SGoodsImg = styled.img`
  height: 250px;
  width: 250px;
`;

const Sinforamtion = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  padding-right: 20%;
`;

const SinfoList = styled.li`
  font-size: 22px;
`;

const ScancelBtn = styled.button`
  padding: 5px;
  backround-color: lightgrey;
  font-weight: bold;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
`;

type CompletedOrderInformation = {
  goodsName: string;
  orderDate: string;
  selectedOption: string;
  completedDelivery: string;
};

const CompletedOrder: React.FC = () => {
  const date = new Date();
  const [info, setInfo] = useState<CompletedOrderInformation>({
    goodsName: "상품 1",
    orderDate: "2023/05/22",
    selectedOption: "옵션 1",
    completedDelivery: "2023/05/25",
  });

  return (
    <Scontainer>
      <SGoodsImg />
      <Sinforamtion>
        <SinfoList>{info.goodsName}</SinfoList>
        <SinfoList>{info.selectedOption}</SinfoList>
        <SinfoList>주문 날짜: {info.orderDate}</SinfoList>
        <SinfoList>배송일: {info.completedDelivery}</SinfoList>
      </Sinforamtion>
      <ScancelBtn
        onClick={() => {
          console.log("리뷰");
        }}
      >
        리뷰 작성
      </ScancelBtn>
    </Scontainer>
  );
};

export default CompletedOrder;
