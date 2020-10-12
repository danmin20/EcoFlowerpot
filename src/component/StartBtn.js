import React from "react";
import styled from "styled-components";

export default ({ text, onClick }) => {
  return <Container onClick={onClick}>{text}</Container>;
};

const Container = styled.div`
  text-align: center;
  background-color: #a76f3c;
  color: white;
  font-size: 12px;
  padding: 5px 35px;
  border-radius: 30px;
`;
