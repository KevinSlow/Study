import { keyframes } from "styled-components";
import styled from "styled-components";

const date: Date = new Date();

const secondsAnimation = keyframes`
  from {
    transform: rotateZ(${-90 + 6 * date.getSeconds()}deg)
  }
  to {
    transform: rotateZ(${-90 + 6 * date.getSeconds() + 360}deg)    
  }
`;
const minutesAnimation = keyframes`
  from {
    transform: rotateZ(${
    -90 + 6 * date.getMinutes() + (6 * date.getSeconds()) / 60
}deg);
  }
  to {
    transform: rotateZ(${
    -90 + 6 * date.getMinutes() + (6 * date.getMinutes()) / 60 + 360
}deg);
  }
`;
const hoursAnimation = keyframes`
  from {
    transform: rotateZ(${-90 + 30 * 3 + (4 * date.getMinutes()) / 12}deg);
  }
  to {
    transform: rotateZ(${
    -90 + 30 * date.getHours() + (6 * date.getMinutes()) / 12 + 360
}deg);
  }
`;

const Backdrop = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OuterClock = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background: black;
  border-radius: 500%;
`;
const SecondHand = styled.div`
  position: absolute;
  top: 197.5px;
  left: 50%;
  background: red;
  width: 175px;
  height: 5px;
  transform-origin: center left;
  z-index: 3;
  animation: ${secondsAnimation} 60s linear infinite;
`;
const MinuteHand = styled.div`
  position: absolute;
  top: 197.5px;
  left 50%;
  background: white;
  width: 150px;
  height: 5px;
  transform-origin: center left;
  z-index: 2;
  animation ${minutesAnimation} 3600s linear infinite;
`;
// minutes happen every 3600 seconds for animation
// make a function to convert minuites to seconds
// make a function to convert hours to seconds
const HourHand = styled.div`
  position: absolute;
  top: 197.5px;
  left: 50%;
  background: white;
  width: 100px;
  height: 5px;
  background: white;
  transform-origin: center left;
  z-index: 1;
  animation: ${hoursAnimation} 43200s linear infinite;
`;
//43200
export { Backdrop, OuterClock, SecondHand, MinuteHand, HourHand };
