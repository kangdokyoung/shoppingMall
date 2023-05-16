import React from "react";
import styled from "styled-components";

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
`;

const Stitle = styled.div`
  width: 100%;
  padding-left: 10px;
  text-align: left;
  border-bottom: 1px solid black;
`;

function OrderDetail() {
  return (
    <Scontainer>
      <SscheduledContainer>
        <Stitle>배송 예정</Stitle>
      </SscheduledContainer>
    </Scontainer>
  );
}

export default OrderDetail;
