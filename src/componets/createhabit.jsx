import React, { useRef } from "react";

function Createhabit({ onCreate }) {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && onCreate(name);
    inputRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          className="add-input"
          ref={inputRef}
          type="text"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    </>
  );
}

export default React.memo(Createhabit);
