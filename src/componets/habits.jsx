import React, { useState } from "react";
import Habit from "./habit";

function Habits({ habits, onIncreasement, onDecreasement, onDelete }) {
  // const handleIncreasement = (habit) => {
  //   onIncreasement(habit);
  // };

  // const handleDecreasement = (habit) => {
  //   onDecreasement(habit);
  // };

  // const handleDelete = (habit) => {
  //   onDelete(habit);
  // };

  return (
    <ul>
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          habit={habit}
          onIncreasement={onIncreasement}
          onDecreasement={onDecreasement}
          onDelete={onDelete}
        ></Habit>
      ))}
    </ul>
  );
}

export default Habits;
