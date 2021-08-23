import React, { useState } from "react";
import { Modal } from "../../util/interfaces/interfaces";
import { Container } from "./ModalStyles";

const Modal: React.FC = (item: Object) => {
  const [modalShown, setModalShown] = useState([]);

  return (
    <Container>
      <h1>hi</h1>
    </Container>
  );
};

export default Modal;
