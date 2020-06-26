import React from "react";

import { connect } from "react-redux";

import { inputName, submitName } from "./actions";

function NameForm({ name, loading, inputName, submitName }) {
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
      <button disabled={loading}>Submit</button>
    </form>
  );
}

function mapStateToProps(state) {
  return { name: state.name, loading: state.loading };
}

export default connect(mapStateToProps, { inputName, submitName })(NameForm);
