import React from "react";
import styled from "styled-components";
import { tempMarks, lightMarks, waterMarks } from "../data/marks";
import CustomSlider from "../component/CustomSlider";

export default () => {
  return (
    <Container>
      <CustomSlider title={"Temperature"} mark={tempMarks} />
      <CustomSlider title={"Light"} mark={lightMarks} />
      <CustomSlider title={"Water"} mark={waterMarks} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  margin: 0;
`;
