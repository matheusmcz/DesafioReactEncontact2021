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

  border-radius: 8px;

  span {
    font-family: "DM Sans", sans-serif;
    font-size: 32px;
    font-weight: 700;
  }
`;

export const TodoItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  width: 100%;
  padding: 8px;
  margin-top: 16px;

  text-align: center;
  background: #ffffff;

  transition: background 0.4s;
  transition: color 0.4s;

  &:hover {
    background: rgb(39, 61, 166, 1);
    color: #ffffff;
  }
`;

export const StatusText = styled.p`
  position: relative;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;

  .complete {
    background: #00ff59;
  }

  .active {
    background: #365db9;
  }
`;

export const StatusPoint = styled.span`
  display: flex;
  position: absolute;
  width: 6px;
  height: 6px;
  top: 45%;
  right: 24%;
  margin-right: 30px;
  border-radius: 50%;
  margin-left: 4px;
`;

export const TrashButton = styled.button`
  position: absolute;
  right: 0;
  top: 10%;
  background: transparent;
  border: 0;
  svg {
    color: red;
  }
`;

export const SetCompletedButton = styled.button`
  position: absolute;
  left: 0;
  top: 20%;
  background: transparent;
`;

export const SetAllCompletedButton = styled.button`
  position: absolute;
  top: 40%;
  left: 0;
  margin-left: 8px;
`;
