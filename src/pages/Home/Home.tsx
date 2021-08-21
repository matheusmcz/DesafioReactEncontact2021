import React, { useEffect, useState } from "react";
import { FiTrash } from "react-icons/fi";
import { toast } from "react-toastify";
import { uuid } from "uuidv4";
import Header from "../../components/Header/Header";
import { api } from "../../services/api";
import { TodoList } from "../../util/interfaces/interfaces";
import * as S from "./HomeStyles";

const Home: React.FC = () => {
  const [todoList, setTodoList] = useState<TodoList[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [allChecked, setAllChecked] = useState(true);

  useEffect(() => {
    api.get("/todos").then((value) => {
      setTodoList(value.data);
    });
  }, []);

  function handleCreateNewTodo(e: any) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      title: newTodo,
      isDone: false,
    };

    newTodo === ""
      ? toast.info("Nova To Do vazio!")
      : setTodoList([...todoList, newItem]);

    setNewTodo("");
  }

  function handleRemoveTodo(id: string) {
    const itemDeleted = todoList.filter((item) => item.id !== id);

    setTodoList(itemDeleted);
  }

  function handleToggleCompleteTodo(id: string) {
    const toggleItem = todoList.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    const notCompletedItemIndex = toggleItem.findIndex((item) => !item.isDone);
    setTodoList(toggleItem);

    notCompletedItemIndex !== -1 && setAllChecked(!allChecked);
  }

  function handleToggleAllCompleted() {
    console.log(allChecked);
    setAllChecked(!allChecked);
    console.log(allChecked);

    const setAllCompleted = todoList.map((item) => ({
      ...item,
      isDone: allChecked,
    }));
    setTodoList(setAllCompleted);
  }

  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.NewContainer>
          <form onSubmit={handleCreateNewTodo}>
            <S.Input
              type="text"
              onChange={(e) => {
                setNewTodo(e.target.value);
              }}
              value={newTodo}
            />
            <S.NewTodoButton onClick={handleCreateNewTodo}>
              Nova To Do
            </S.NewTodoButton>
          </form>
        </S.NewContainer>

        <S.ContentHeader>
          <S.SetAllCompletedButton>
            <input
              type="checkbox"
              onChange={handleToggleAllCompleted}
              name="setAllChecked"
              checked={!allChecked}
            />
          </S.SetAllCompletedButton>
          <span>Titulo</span>
          <span>Status</span>
        </S.ContentHeader>

        {todoList.length ? (
          todoList
            .map((item) => (
              <S.TodoItem key={item.id}>
                <S.StatusText>
                  <S.SetCompletedButton type="submit">
                    <input
                      type="checkbox"
                      checked={item.isDone}
                      onChange={() => handleToggleCompleteTodo(item.id)}
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
      </S.Content>
    </S.Container>
  );
};

export default Home;
