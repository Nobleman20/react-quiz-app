export const initialState = {
  questions: [],

  // 'loading', 'error', 'raady', 'active', 'finished'
  status: "loading",
};

export function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Action unknown");
  }
}
