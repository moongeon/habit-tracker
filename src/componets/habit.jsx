import React, { useState, Fragment } from "react";

function Habit({ habit, onIncreasement, onDecreasement, onDelete }) {
  const Increasement = () => {
    onIncreasement(habit);
    // setCount(count + 1);
  };

  const Decreasement = () => {
    onDecreasement(habit);
  };

  const Delete = () => {
    onDelete(habit);
  };

  const { name, count } = habit; // 비구조적 할당

  return (
    <>
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={Increasement}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={Decreasement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={Delete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    </>
  );
}

export default React.memo(Habit);
