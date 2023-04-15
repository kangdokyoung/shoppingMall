import React from "react";
import styled from "styled-components";
import DetailModal from "./DetailModal";

const Scontainer = styled.div`
    width: 200px;
    height: 400px;
    position:relative;
    display:flex;
    flex-direction:column:
`;

const SgoodsImg = styled.img`
  width: 100%;
  height: 300px;
`;

const SgoodsName = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
`;

function MainDetail() {
  return (
    <Scontainer>
      <DetailModal />
      <SgoodsImg src="https://ifh.cc/g/SHnt9j.png" alt="상품 이미지" />
      <SgoodsName>상품 이름</SgoodsName>
    </Scontainer>
  );
}

export default MainDetail;
