import styled from "styled-components";

export const Container = styled.div``;

export const TodoItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  width: 100%;
  padding: 8px;
  margin-top: 16px;
  cursor: pointer;

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

export const SetCompletedButton = styled.button`
  position: absolute;
  left: 0;
  top: 20%;
  background: transparent;
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
