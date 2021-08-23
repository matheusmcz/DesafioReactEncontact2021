import React from "react";
import { FiTrash } from "react-icons/fi";
import { TodoList } from "../../util/interfaces/interfaces";
import * as S from "./RenderTodosStyles";

interface RenderTodosProps {
  renderTodos: TodoList[];
  handleRemoveTodo: (id: string) => void;
  handleChangeTodoStatus: (id: string) => void;
  editTodo: (id: string) => void;
}

const RenderTodos: React.FC<RenderTodosProps> = ({
  renderTodos,
  handleRemoveTodo,
  handleChangeTodoStatus,
  editTodo,
}) => {
  return (
    <S.Container>
      {renderTodos.length ? (
        renderTodos
          .map((item) => (
            <S.TodoItem key={item.id} onDoubleClick={() => editTodo(item.id)}>
              <S.StatusText>
                <S.SetCompletedButton type="submit">
                  <input
                    type="checkbox"
                    checked={item.isDone}
                    onChange={() => handleChangeTodoStatus(item.id)}
                  />
                </S.SetCompletedButton>
                {item.title}
              </S.StatusText>
              <S.StatusText>
                {item.isDone ? "Completo" : "Ativo"}
                <S.StatusPoint
                  className={item.isDone ? "complete" : "active"}
                />
                <S.TrashButton onClick={() => handleRemoveTodo(item.id)}>
                  <FiTrash size={16} />
                </S.TrashButton>
              </S.StatusText>
            </S.TodoItem>
          ))
          .reverse()
      ) : (
        <S.TodoItem>Sua lista está vazia.</S.TodoItem>
      )}
    </S.Container>
  );
};

export default RenderTodos;
