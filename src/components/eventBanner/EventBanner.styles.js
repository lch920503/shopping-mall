import styled from "styled-components";

export const Banner = styled.article`
  position: relative;
  width: 100%;
  height: 500px;
  background: #f2f2f2;
  margin-bottom: 80px;
  background: url("/images/event.png") no-repeat center center / 100% 100%;
`;

export const ArrowRight = styled.div`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 5%;
`;
export const RightImage = styled.img``;

export const ArrowLeft = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  background: transparent;
`;
export const LeftImage = styled.img``;
