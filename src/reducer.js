const initialState = {
  title: "What's your name?",
  subtitle: "",
  name: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "INPUT_NAME":
      return { ...state, name: action.payload };

    case "SET_TITLE":
      return { ...state, title: action.payload };

    case "SET_SUBTITLE":
      return { ...state, subtitle: action.payload };

    default:
      return state;
  }
}
