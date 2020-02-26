const handler = {
  ADD_WISH: (state, { payload }) => ({
    ...state,
    wishes: payload
  }),
  DELETE_WISH: (state, { payload }) => ({
    ...state,
    wishes: state.wishes.filter(wish => wish.id !== payload)
  }),
  DEFAULT: state => state
};

export const wishReducer = (state, action) => {
  const handlers = handler[action.type] || handler.DEFAULT;
  return handlers(state, action);
};
