import React from "react";
import styled from "styled-components";
import MainDetail from "./MainDetail";

const Scontainer = styled.div`
  width: 100%;
  min-width: 1800px;
  height: 800px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const GoodsList = styled.div`
  height: 100%;
  width: 80%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

function MainGoods() {
  const arr = [0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <Scontainer>
      <GoodsList>
        {arr.map((data, i) => {
          return <MainDetail />;
        })}
      </GoodsList>
    </Scontainer>
  );
}

export default MainGoods;
