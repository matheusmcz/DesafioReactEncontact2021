import React, { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import Header from "../../components/Header/Header";
import RenderTodos from "../../components/RenderTodos/RenderTodos";
import { api } from "../../services/api";
import { TodoList } from "../../util/interfaces/interfaces";
import * as S from "./HomeStyles";

const Home: React.FC = () => {
  useEffect(() => {
    api.get("/todos").then((value) => {
      setTodoList(value.data);
    });
  }, []);

  const [todoList, setTodoList] = useState<TodoList[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<TodoList[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [allChecked, setAllChecked] = useState(false);
  const [isCompletedFilterActive, setIsCompletedFilterActive] = useState(false);
  const [isActiveFilterActive, setIsActiveFilterActive] = useState(false);
  const remainingTodos = todoList.filter((item) => !item.isDone && { ...item });

  function handleCreateNewTodo(e: any) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      title: newTodo,
      isDone: false,
    };

    newTodo === ""
      ? window.alert("Nova To Do vazio!")
      : setTodoList([...todoList, newItem]);

    setNewTodo("");
  }

  function handleRemoveTodo(id: string) {
    const itemDeleted = todoList.filter((item) => item.id !== id);
    setTodoList(itemDeleted);
  }

  function handleChangeTodoStatus(id: string) {
    const toggleItem = todoList.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTodoList(toggleItem);
  }

  function handleRemoveNotCompletedTodos() {
    const completedTodos = todoList.filter((item) => !item.isDone);
    setTodoList(completedTodos);
  }

  function handleToggleAllCompleted() {
    setAllChecked(!allChecked);

    const setAllCompleted = todoList.map((item) => ({
      ...item,
      isDone: !allChecked,
    }));
    setTodoList(setAllCompleted);
  }

  //Função para edição (incompleto)

  function editTodo(id: string) {
    const todoToBeEdited = todoList.filter((item) => item.id === id && item);
  }

  function filterCompletedTodos() {
    const seletedItems = todoList.filter((item) => item.isDone && { ...item });
    seletedItems.length <= 0 &&
      !isCompletedFilterActive &&
      window.alert("Nenhuma ToDo Completada");
    setFilteredTodos(seletedItems);
    setIsCompletedFilterActive(!isCompletedFilterActive);

    isCompletedFilterActive && setFilteredTodos([]);
  }

  function filterActiveTodos() {
    const seletedItems = todoList.filter((item) => !item.isDone && { ...item });
    seletedItems.length <= 0 &&
      !isActiveFilterActive &&
      window.alert("Nenhuma ToDo ativa");
    setFilteredTodos(seletedItems);
    setIsActiveFilterActive(!isActiveFilterActive);

    isActiveFilterActive && setFilteredTodos([]);
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
              checked={allChecked}
            />
          </S.SetAllCompletedButton>
          <span>Titulo</span>
          <span>Status</span>
        </S.ContentHeader>
        <RenderTodos
          renderTodos={filteredTodos.length ? filteredTodos : todoList}
          handleRemoveTodo={handleRemoveTodo}
          handleChangeTodoStatus={handleChangeTodoStatus}
          editTodo={editTodo}
        />
        <S.Footer>
          <S.TodoLeft>ToDo restante: {remainingTodos.length}</S.TodoLeft>
          <p />
          <span>
            <S.DeleteButton onClick={handleRemoveNotCompletedTodos}>
              Deletar concluídos
            </S.DeleteButton>
          </span>
          <p />

          <S.Filter>
            <li>
              <S.FilterBox
                type="checkbox"
                onClick={filterCompletedTodos}
                checked={isCompletedFilterActive}
              />
              Completo
            </li>
            <li>
              <S.FilterBox
                type="checkbox"
                onClick={filterActiveTodos}
                checked={isActiveFilterActive}
              />
              Ativo
            </li>
          </S.Filter>
        </S.Footer>
      </S.Content>
    </S.Container>
  );
};

export default Home;
