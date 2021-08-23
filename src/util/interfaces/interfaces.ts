export interface TodoList {
  id: string;
  title: string;
  isDone: boolean;
}

export interface Modal {
  Todo: TodoList;
  isShown: boolean;
}

export interface Status {
  id: string;
  name: string;
}
