import React from "react";
import Todo from "./Todo";
import Section from "./Section";

export default function List({ list, removeTodo, editTodoListProp }) {
  const renderList = list.map((todo, key) => (
    <Section key={key}>
      <Todo
        title={todo.title}
        completed={todo.completed}
        removeTodo={(e) => removeTodo(todo._id)}
        editTodoItemProp={(updatedItem) =>
          editTodoListProp(todo._id, updatedItem)
        }
        id={key}
      />
      {console.log(key)}
    </Section>
  ));
  return renderList;
}
