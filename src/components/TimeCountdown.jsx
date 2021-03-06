import React, { useMemo } from "react";
import Countdown from "react-countdown";
import styled from "styled-components";

const TimeCountdown = ({ title, base, deadline, onComplete, size = "md" }) => {
  const tiplng = title;
  const daysLng = "d";
  const hrsLng = "h";
  const minsLng = "m";
  const secsLng = "s";

  const deadlineVal = useMemo(() => {
    return deadline.getTime();
  }, [deadline]);

  const countdownRenderer = (countdownProps) => {
    const { days, hours, minutes, seconds } = countdownProps;
    const d = String(days);
    const h = String(hours);
    const m = String(minutes);
    const s = String(seconds);
    return (
      <>
        {deadline ? (
          <InformationBox>
            {/* <TiemBox className="dateline"> */}
            {tiplng}
            {/* </TiemBox> */}
            {Number(d) > 0 ? (
              <>
                <TiemBox type={size}>{d.padStart(2, "0")}</TiemBox>
                {size === "sm" ? ":" : daysLng}
              </>
            ) : null}
            <TiemBox type={size}>{h.padStart(2, "0")}</TiemBox>
            {size === "sm" ? ":" : hrsLng}
            <TiemBox type={size}>{m.padStart(2, "0")}</TiemBox>
            {size === "sm" ? ":" : minsLng}
            <TiemBox type={size}>{s.padStart(2, "0")}</TiemBox>
            {size === "sm" ? ":" : secsLng}
          </InformationBox>
        ) : null}
      </>
    );
  };

  return (
    <Countdown
      date={deadlineVal}
      onComplete={onComplete}
      renderer={countdownRenderer}
    />
  );
  // return (
  //   <StyledCardContentInner>
  //
  //   </StyledCardContentInner>
  // )
};
export default TimeCountdown;

const StyledCountItem = styled.div`
  /* width:30px; */
  display: flex;
  margin-left: 10px;
  flex-wrap: wrap;
  p {
    padding: 0;
    margin: 1px;
  }
  &:first-child {
    margin-left: 0;
  }
  @media (max-width: 1000px) {
    margin-left: 5px;
    &.dateline {
      display: none;
    }
  }
`;
const StyledCountdown = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  padding: 0;
  margin: 0;
  display: flex;
`;

const InformationBox = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 12px;
`;
const TiemBox = styled.div`
  width: 20px;
  height: 20px;
  font-size: 12px;
  color: ${(props) => (props.type === "md" ? "#fff" : "#fff")};
  border: solid 0.5px #ffffff70;
  border-radius: 2px;
  /* background-color: ${(props) =>
    props.type === "md" ? "#182338" : "transparent"}; */
  text-align: center;
  line-height: 20px;
  margin-left: 5px;
  margin-right: 2px;
`;
