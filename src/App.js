import React, { useEffect, useState } from "react";

import { ChakraProvider, Container } from "@chakra-ui/react";
import Todos from "./apis/";
import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";

const appTitle = "To-Do App";

function App() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await Todos.get("/todos");
      setTodoList(data);
    }
    fetchData();
  }, []);

  const addTodo = async (todo) => {
    const { data } = await Todos.post("/todos", todo);
    setTodoList((oldList) => [...oldList, data]);
  };

  const removeTodo = async (id) => {
    await Todos.delete(`/todos/${id}`);
    setTodoList((oldList) => oldList.filter((item) => item._id !== id));
  };

  const editTodo = async (id, todo) => {
    await Todos.put(`/todos/${id}`, todo);
  };
  return (
    <ChakraProvider>
      <Container centerContent>
        <Section>
          <h1>{appTitle}</h1>
        </Section>
        <Section>
          <Form addTodo={addTodo} />
        </Section>
        <Section>
          <List
            editTodoListProp={editTodo}
            removeTodo={removeTodo}
            list={todoList}
          />
        </Section>
      </Container>
    </ChakraProvider>
  );
}

export default App;
