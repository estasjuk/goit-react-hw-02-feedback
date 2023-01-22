import React from 'react';
import css from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className={css.TodoList}>
    {todos.map(({ id, text }) => (
      <li key={id} className={css.TodoListItem}>
        <p className={css.TodoListText}>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
