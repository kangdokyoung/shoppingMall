import React from "react";
import styled from "styled-components";
import DetailModal from "./DetailModal";
import { Link } from "react-router-dom";

const Scontainer = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 20px;
`;

const SgoodsBox = styled.div`
  cursor: pointer;
`;

const SImgBox = styled.div`
  width: 100%;
  height: 280px;
  background-color: lightgrey;
  display: flex;
`;

const SgoodsImg = styled.img`
  width: auto;
  height: auto;
`;

const SgoodsName = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
`;

const SnameSpace = styled.div`
  cursor: pointer;
`;

const MainDetail: React.FC = () => {
  return (
    <Scontainer>
      <DetailModal />
      <SgoodsBox>
        <Link
          to={"/detailGoods"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <SImgBox>
            <SgoodsImg alt="상품 이미지" />
          </SImgBox>
        </Link>
        <SgoodsName>
          <SnameSpace>상품 이름</SnameSpace>
        </SgoodsName>
      </SgoodsBox>
    </Scontainer>
  );
};

export default MainDetail;
