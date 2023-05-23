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

type orderInformation = {
  goodsName: string;
  orderDate: string;
  selectedOption: string;
  expectedDelivery: string;
  deliveryState: string;
};

const ScheduledGoods: React.FC = () => {
  const date = new Date();
  const [info, setInfo] = useState<orderInformation>({
    goodsName: "상품 1",
    orderDate: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
    selectedOption: "옵션 1",
    expectedDelivery: `${date.getFullYear()}/${date.getMonth() + 1}/${
      date.getDate() + 3
    }`,
    deliveryState: "배송준비중",
  });

  return (
    <Scontainer>
      <SGoodsImg />
      <Sinforamtion>
        <SinfoList>{info.goodsName}</SinfoList>
        <SinfoList>{info.selectedOption}</SinfoList>
        <SinfoList>주문 날짜: {info.orderDate}</SinfoList>
        <SinfoList>배송 예정일: {info.expectedDelivery}</SinfoList>
        <SinfoList>배송 상태: {info.deliveryState}</SinfoList>
      </Sinforamtion>
      <ScancelBtn
        onClick={() => {
          console.log("취소");
        }}
      >
        주문 취소
      </ScancelBtn>
    </Scontainer>
  );
};

export default ScheduledGoods;
