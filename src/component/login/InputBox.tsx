import React from "react";
import styled from "styled-components";

const SBox = styled.div`
  width: 80%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Sinput = styled.input`
  border: none;
  height: 70%;
  width: 70%;
`;

type inputProps = {
  name: any;
  set?: any;
  value: any;
};

function InputBox(props: inputProps) {
  const { name, set, value } = props;
  return (
    <SBox>
      <h3>{name}</h3>
      <Sinput
        type="text"
        placeholder={name}
        value={value}
        onChange={(e) => {
          set(e.target.value);
        }}
      />
    </SBox>
  );
}

export default InputBox;
