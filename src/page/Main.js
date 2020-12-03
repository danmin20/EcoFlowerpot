import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  tempMarks,
  moistMarks,
  humidMarks,
  intensityMarks,
} from "../data/marks";
import CustomSlider from "../component/CustomSlider";
import Axios from "axios";
import CustomizedSwitch from "../component/CustomizedSwitch";

export default () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const { data } = await Axios.get(
      "https://vgaf0jz45m.execute-api.us-east-1.amazonaws.com/beta/RPiTest",
      {
        headers: {
          "x-api-key": "lC399ZhAd42s3FyYugZuy94bDv6vtCCsxMLHOy2f",
        },
      }
    );
    setData(data.state.reported);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {data && (
        <>
          {/* number */}
          <CustomSlider
            title={"Temperature"}
            mark={tempMarks}
            state={data.tempeture}
          />

          {/* number */}
          <CustomSlider
            title={"Soil Moisture"}
            mark={moistMarks}
            state={data.soil_moisture}
          />

          {/* number */}
          <CustomSlider
            title={"Humidity"}
            mark={humidMarks}
            state={data.humidity}
          />

          {/* number */}
          <CustomSlider
            title={"Intentisy"}
            mark={intensityMarks}
            state={data.intensity}
          />
          <div
            style={{
              display: "flex",
              marginTop: "30px",
            }}
          >
            {/* boolean */}
            <CustomizedSwitch title={"LED"} state={data.led} />

            {/* boolean */}
            <CustomizedSwitch title={"Water"} state={data.water} />

            {/* boolean */}
            <CustomizedSwitch title={"Blind"} state={data.blind} />
          </div>
        </>
      )}
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
  justify-content: center;
  margin: 0;
`;
