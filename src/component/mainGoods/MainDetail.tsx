import React from "react";
import styled from "styled-components";
import DetailModal from "./DetailModal";

const Scontainer = styled.div`
    width: 300px;
    height: 400px;
    position:relative;
    display:flex;
    flex-direction:column;
    margin-right: 20px;
    margin-left: 20px;
    transition: all 0.1s;
    :hover{
      transform:scale(1.02);
    }
`;

const SgoodsImg = styled.img`
  width: 100%;
  height: 280px;
`;

const SgoodsName = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center; 
  border: 1px solid;
`;

const SnameSpace = styled.div`
    cursor:pointer;
`

function MainDetail() {
  return (
    <Scontainer>
      <DetailModal />
      <SgoodsImg src="https://ifh.cc/g/SHnt9j.png" alt="상품 이미지" />
      <SgoodsName>
        <SnameSpace>
          상품 이름
        </SnameSpace>
      </SgoodsName>
    </Scontainer>
  );
}

export default MainDetail;
