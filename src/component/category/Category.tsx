import React from "react";
import styled from "styled-components";

const Scontainer = styled.div`
  min-width: 1800px;
  max-height: 60px;
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: grey;
  :hover {
    background-color: black;
    opacity: 0.9;
  }
`;

const ScatList = styled.ul`
  height: 100%;
  width: 50%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ScatDetail = styled.li`
  color: white;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

function Category() {
  return (
    <Scontainer>
      <ScatList>
        <ScatDetail>패션</ScatDetail>
        <ScatDetail>디지털</ScatDetail>
        <ScatDetail>완구</ScatDetail>
        <ScatDetail>식품</ScatDetail>
      </ScatList>
    </Scontainer>
  );
}

export default Category;
