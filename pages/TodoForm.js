import React from "react";

const TodoForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          placeholder="Add a task..."
          value={props.value}
          onChange={props.onChange}
          maxLength="40"
          ref={props.reference}
          required
        />
        <div>
          <button type="submit">
            {!props.isEditing ? "Add a task" : "Edit Task"}
          </button>
          <button type="button" onFocus={props.onClick}>
            {!props.isEditing ? "Clear tasks" : "Cancel"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
