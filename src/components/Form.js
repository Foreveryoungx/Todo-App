import React, { useState } from "react";
import { Button, Input, Grid, GridItem } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export default function Form({ addTodo }) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const placeholder = "Enter a task";

  function handleFormSubmit(e) {
    e.preventDefault();

    if (inputValue.trim() === "") return;
    addTodo({ title: inputValue, completed: false });
    console.log(inputValue);
    console.log("clicked");
    setInputValue("");
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <Grid templateColumns={"repeat(5,1fr)"} gap={4}>
        <GridItem colSpan={4}>
          <Input
            value={inputValue}
            type={"text"}
            placeholder={placeholder}
            onChange={handleInputChange}
          />
        </GridItem>
        <Button type={"submit"} colorScheme={"green"} variant={"solid"}>
          <AddIcon />
        </Button>
      </Grid>
    </form>
  );
}
