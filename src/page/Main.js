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
import CustomSwitch from "../component/CustomSwitch";
import { CircularProgress } from "@material-ui/core";
import { WaveBottom } from "../component/Wave";
import { withRouter } from "react-router-dom";

export default withRouter(({ history }) => {
  const [data, setData] = useState(null);

  const thingName = history.location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(
        `https://vgaf0jz45m.execute-api.us-east-1.amazonaws.com/beta/${thingName}`,
        {
          headers: {
            "x-api-key": "lC399ZhAd42s3FyYugZuy94bDv6vtCCsxMLHOy2f",
          },
        }
      );
      setData(data.state.reported);
    };

    fetchData();
  }, [thingName]);

  return (
    <Container>
      <WaveBottom />
      {console.log("data", data)}
      {data ? (
        <>
          <Title>{thingName}</Title>

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
            <CustomSwitch title={"LED"} state={data.led} />

            {/* boolean */}
            <CustomSwitch title={"Water"} state={data.water} />

            {/* boolean */}
            <CustomSwitch title={"Blind"} state={data.blind} />
          </div>
        </>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
});

const Title = styled.div`
  font-size: 30px;
  margin-bottom: 50px;
  font-family: "Sansita Swashed", cursive;
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  background-color: #3cb57c;
  color: white;
  font-family: "Cafe24Dangdanghae";
`;
