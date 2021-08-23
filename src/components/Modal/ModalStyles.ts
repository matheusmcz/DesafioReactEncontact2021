import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: -20%;
  right: 68%;
  z-index: 100;
  padding: 10px;
  border: 1px solid #3d3d4d;
  border-radius: 8px;

  background: #ffffff;
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  svg {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;
export const Title = styled.h1`
  font-family: "DM Sans", sans-serif;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const EditField = styled.input`
  border-radius: 8px;
  border: 1px solid #3d3d4d;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 8px;
  margin-bottom: 12px;

  &::placeholder {
    font-family: "DM Sans", sans-serif;
    font-size: 12px;
  }
`;

export const SubmitEditionButton = styled.button`
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 8px;
  border-radius: 8px;
  background: #273da6;
  color: #ffffff;
`;
