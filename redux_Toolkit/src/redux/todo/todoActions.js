import { createAction } from "@reduxjs/toolkit";
import types from "../types";

export const addTodo = createAction(types.TODO_ADD);
export const delTodo = createAction(types.TODO_DELETE);
