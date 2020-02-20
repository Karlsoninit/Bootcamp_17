import { createAction } from "@reduxjs/toolkit";
import Type from "../types";

export const increment = createAction(Type.COUNTER_INCREMENT);
export const decrement = createAction(Type.COUNTER_DECREMENT);
