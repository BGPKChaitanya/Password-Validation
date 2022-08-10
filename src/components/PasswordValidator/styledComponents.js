import styled from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #24263c;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #475569;
  border-radius: 15px;
`;

export const Heading = styled.h1`
  font-size: 35px;
  font-family: Roboto;
  color: #ffffff;
  margin: 0px;
`;

export const Para = styled.p`
  font-size: 15px;
  font-family: Roboto;
  color: #ffffff;
  margin: 10px;
`;

export const InputStyle = styled.input`
  width: 100%;
  border: 0px;
  height: 30px;
`;

export const ErrorMsg = styled.p`
  font-size: 15px;
  font-family: Roboto;
  color: #ef4444;
  margin: 10px;
`;
