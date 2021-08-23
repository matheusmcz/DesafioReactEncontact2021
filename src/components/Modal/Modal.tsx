import React from "react";
import { FiX } from "react-icons/fi";
import * as S from "./ModalStyles";

interface ModalProps {
  submitEdition: (e: string) => void;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ submitEdition, closeModal }) => {
  return (
    <S.Container>
      <S.Content>
        <FiX onClick={closeModal} />
        <S.Title>Editar Todo</S.Title>
        <S.EditField
          type="text"
          placeholder="Novo Título"
          onChange={(e) => submitEdition(e.target.value)}
        />
      </S.Content>
    </S.Container>
  );
};

export default Modal;
