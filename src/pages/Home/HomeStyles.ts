import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  background: #273da6;
  overflow: hidden;
`;

export const NewContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  right: 0;
  top: 0;
  margin-top: -45px;
`;

export const Input = styled.input`
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  width: 250px;
  height: 35px;

  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
`;

export const NewTodoButton = styled.button`
  padding: 12px;

  background: rgb(39, 61, 166, 1);
  border-radius: 8px;

  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;

  transition: filter 0.4s;

  &:hover {
    filter: brightness(0.8);
  }
`;
export const Content = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 100px 440px;
  background: transparent;
  border-radius: 8px;
  padding: 16px 0px;
  filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.349));
`;

export const ContentHeader = styled.header`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  padding: 8px 0;

  text-align: center;
  color: #3d3d4d;
  background: #ffffff;

  border-radius: 8px 8px 0 0;

  span {
    font-family: "DM Sans", sans-serif;
    font-size: 32px;
    font-weight: 700;
  }
`;

export const SetAllCompletedButton = styled.button`
  position: absolute;
  top: 40%;
  left: 0;
  margin-left: 8px;
`;

export const Footer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 8px;
  margin-top: 16px;
  border-radius: 0 0 8px 8px;

  background: #ffffff;

  p {
    height: 32px;
    background: #000000;
    width: 1px;
    margin-right: 16px;
  }
`;

export const TodoLeft = styled.span`
  font-family: "Dm Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-right: 16px;
`;

export const DeleteButton = styled.button`
  padding: 8px;
  background: red;
  border-radius: 8px;
  margin-right: 16px;
`;

export const Filter = styled.ul`
  font-family: "Dm Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

export const FilterBox = styled.input`
  margin-right: 6px;
  cursor: pointer;
`;
