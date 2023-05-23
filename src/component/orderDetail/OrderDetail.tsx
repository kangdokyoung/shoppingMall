import React from "react";
import styled from "styled-components";
import ScheduledGoods from "./ScheduledGoods";

const Scontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SscheduledContainer = styled.div`
  width: 80%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
`;

const Stitle = styled.div`
  width: 100%;
  padding-left: 10px;
  text-align: left;
  border-bottom: 1px solid black;
`;

const OrderDetail: React.FC = () => {
  const list = [0];

  return (
    <Scontainer>
      <SscheduledContainer>
        <Stitle>배송 예정</Stitle>
        {list.map((data, i) => {
          return <ScheduledGoods key={i} />;
        })}
      </SscheduledContainer>
    </Scontainer>
  );
};

export default OrderDetail;
