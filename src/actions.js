export function inputName(value) {
  return {
    type: "INPUT_NAME",
    payload: value,
  };
}

export function setTitle(payload) {
  return {
    type: "SET_TITLE",
    payload,
  };
}

export function setSubtitle(payload) {
  return {
    type: "SET_SUBTITLE",
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: "SET_LOADING",
    payload,
  };
}

export function submitName(name) {
  return function (dispatch) {
    dispatch(setLoading(true));

    fetch(`https://foaas.com/off/${name}/Everyone`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((res) => {
        dispatch(setTitle(res.message));
        dispatch(setSubtitle(res.subtitle));
      }).finally(() => {
        dispatch(setLoading(false));
      })
  };
}
