import React from "react";
import styled from "styled-components";

const Scontainer = styled.div`
  min-width: 1800px;
  width: 100%;
  height: 50vh;
  transition: all 0.1s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: lightgrey;
  :hover {
    transform: scale(1.01);
  }
`;

const SadvImg = styled.img`
  height: 100%;
`;

const Advertise: React.FC = () => {
  const imgList = ["https://ifh.cc/g/SHnt9j.png"];
  return (
    <Scontainer>
      <SadvImg src={imgList[0]} alt="advertisement" />
    </Scontainer>
  );
};

export default Advertise;
