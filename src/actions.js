export function inputName(value) {
  return {
    type: "INPUT_NAME",
    payload: value,
  };
}

export function submitName(name) {
  return fetch(`https://foaas.com/off/${name}/Everyone`, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((r) => r.json())
    .then((res) => ({
      type: "SET_TITLE",
      payload: res.message,
    }));
}
