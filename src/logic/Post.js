import Axios from "axios";

export const sliderPost = (newValue, title) => {
  switch (title) {
    case "Temperature":
      Axios.post(
        "https://vgaf0jz45m.execute-api.us-east-1.amazonaws.com/beta/RPiTest",
        {
          state: {
            desired: {
              temperature: newValue,
            },
          },
        },
        {
          headers: {
            "x-api-key": "lC399ZhAd42s3FyYugZuy94bDv6vtCCsxMLHOy2f",
          },
        }
      );
      break;

    case "Soil Moisture":
      Axios.post(
        "https://vgaf0jz45m.execute-api.us-east-1.amazonaws.com/beta/RPiTest",
        {
          state: {
            desired: {
              soil_moisture: newValue,
            },
          },
        },
        {
          headers: {
            "x-api-key": "lC399ZhAd42s3FyYugZuy94bDv6vtCCsxMLHOy2f",
          },
        }
      );
      break;

    case "Humidity":
      Axios.post(
        "https://vgaf0jz45m.execute-api.us-east-1.amazonaws.com/beta/RPiTest",
        {
          state: {
            desired: {
              humidity: newValue,
            },
          },
        },
        {
          headers: {
            "x-api-key": "lC399ZhAd42s3FyYugZuy94bDv6vtCCsxMLHOy2f",
          },
        }
      );
      break;

    case "Intensity":
      Axios.post(
        "https://vgaf0jz45m.execute-api.us-east-1.amazonaws.com/beta/RPiTest",
        {
          state: {
            desired: {
              intensity: newValue,
            },
          },
        },
        {
          headers: {
            "x-api-key": "lC399ZhAd42s3FyYugZuy94bDv6vtCCsxMLHOy2f",
          },
        }
      );
      break;

    default:
      break;
  }
};

export const switchPost = (value, title) => {
  switch (title) {
    case "LED":
      Axios.post(
        "https://vgaf0jz45m.execute-api.us-east-1.amazonaws.com/beta/RPiTest",
        {
          state: {
            desired: {
              led: value,
            },
          },
        },
        {
          headers: {
            "x-api-key": "lC399ZhAd42s3FyYugZuy94bDv6vtCCsxMLHOy2f",
          },
        }
      );
      break;

    case "Water":
      Axios.post(
        "https://vgaf0jz45m.execute-api.us-east-1.amazonaws.com/beta/RPiTest",
        {
          state: {
            desired: {
              water: value,
            },
          },
        },
        {
          headers: {
            "x-api-key": "lC399ZhAd42s3FyYugZuy94bDv6vtCCsxMLHOy2f",
          },
        }
      );
      break;

    case "Fan":
      Axios.post(
        "https://vgaf0jz45m.execute-api.us-east-1.amazonaws.com/beta/RPiTest",
        {
          state: {
            desired: {
              blind: value,
            },
          },
        },
        {
          headers: {
            "x-api-key": "lC399ZhAd42s3FyYugZuy94bDv6vtCCsxMLHOy2f",
          },
        }
      );
      break;

    default:
      break;
  }
};
