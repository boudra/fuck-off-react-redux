import React from "react";

import { connect } from "react-redux";

import { inputName, submitName } from "./actions";

function NameForm({ name, inputName, submitName }) {
  function onSubmit(e) {
    e.preventDefault();
    submitName(name);
  }

  return (
    <form action="" onSubmit={onSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Your name"
        onChange={(e) => inputName(e.target.value)}
        value={name}
      />
      <button>Submit</button>
    </form>
  );
}

function mapStateToProps(state) {
  return { name: state.name };
}

export default connect(mapStateToProps, { inputName, submitName })(NameForm);
