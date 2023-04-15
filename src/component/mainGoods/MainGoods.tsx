import React from "react";
import styled from "styled-components";
import MainDetail from "./MainDetail";

const Scontainer = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justifycontent: center;
`;

const GoodsList = styled.div`
  height: 100%;
  width: 70%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

function MainGoods() {
  return (
    <Scontainer>
      <GoodsList>
        {Array(4).map((data, i) => {
          return <MainDetail />;
        })}
      </GoodsList>
    </Scontainer>
  );
}

export default MainGoods;
