import React, { useState } from "react";
import { Grid, GridItem, IconButton, Input } from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";

export default function Todo({
  title,
  completed,
  removeTodo,
  editTodoItemProp,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);
  const [tempValue, setTempValue] = useState(title);
  const [completedState, setCompleted] = useState(completed);
  function handleDivDoubleClick() {
    setIsEditing(true);
  }

  function handleInputKeyDown(e) {
    const key = e.keyCode;

    if (key === 13) {
      editTodoItemProp({ title: tempValue });
      setValue(tempValue);
      setIsEditing(false);
    } else if (key === 27) {
      setTempValue(value);
      setIsEditing(false);
    }
  }

  function handleInputOnChange(e) {
    setTempValue(e.target.value);
  }

  function handleButtonClick() {
    setCompleted((oldCompleted) => {
      const newState = !oldCompleted;
      editTodoItemProp({ completed: newState });
      return newState;
    });
  }

  function handleSaveEdit() {
    editTodoItemProp({ title: tempValue });
    setValue(tempValue);
    setIsEditing(false);
  }

  return isEditing ? (
    <Grid templateColumns={"repeat(5,1fr)"} gap={5}>
      <GridItem colSpan={3}>
        <Input
          onKeyDown={handleInputKeyDown}
          autoFocus={true}
          onChange={handleInputOnChange}
          value={tempValue}
        />
      </GridItem>
      <IconButton onClick={handleSaveEdit}>
        <EditIcon />
      </IconButton>
    </Grid>
  ) : (
    <Grid templateColumns={"repeat(5,1fr)"} gap={5}>
      <GridItem
        onClick={handleDivDoubleClick}
        colSpan={3}
        textDecoration={completedState ? "line-through" : ""}
      >
        <h1>{value}</h1>
      </GridItem>
      <GridItem colSpan={2}>
        <IconButton
          colorScheme={"green"}
          variant={"solid"}
          onClick={handleButtonClick}
          style={{ borderRadius: 50 }}
        >
          <CheckIcon />
        </IconButton>
        <IconButton
          colorScheme={"red"}
          variant={"solid"}
          onClick={removeTodo}
          style={{ borderRadius: 50 }}
        >
          <CloseIcon />
        </IconButton>
      </GridItem>
    </Grid>
  );
}
