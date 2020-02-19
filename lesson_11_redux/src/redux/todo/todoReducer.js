import Type from "../types";

// export const todo = (state = [], { type, payload }) => {
//   switch (type) {
//     case Type.TODO_ADD:
//       return [...state, payload];
//     case Type.TODO_DELETE:
//       return state.filter(elem => elem.id !== payload);
//     default:
//       return state;
//   }
// };

const handlers = {
  [Type.TODO_ADD]: (state, { payload: { todo } }) => {
    console.log(state);
    // localStorage.setItem("todos", JSON.stringify([...state, todo]));
    return [...state, todo];
  },

  [Type.TODO_DELETE]: (state, { payload: { id } }) =>
    state.filter(elem => elem.id !== id),

  DEFAULT: state => state
};

export const todo = (state = [], action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};
