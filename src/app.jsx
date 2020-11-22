import { useState, useEffect, useCallback } from "react";
import "./app.css";
import Createhabit from "./componets/createhabit";
import Habits from "./componets/habits";
import Navbar from "./componets/navbar";
function App() {
  const [input, setInput] = useState("");
  const [habits, setHabits] = useState([]);
  const [totalCount, setTotalCount] = useState();
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput(value);
  };

  const onCreate = useCallback(
    (name) => {
      const habit = {
        id: Date.now(),
        name: name,
        count: 0,
      };
      setHabits(habits.concat(habit));
    },
    [habits]
  );

  const handleIncreasement = (habit) => {
    setHabits(
      habits.map((data) =>
        data.id === habit.id ? { ...data, count: data.count + 1 } : data
      )
    );
  };

  const handleDecreasement = (habit) => {
    const { count } = habit;
    let temp = count - 1;
    if (temp < 0) return;
    setHabits(
      habits.map((data) =>
        data.id === habit.id ? { ...data, count: temp } : data
      )
    );
  };

  const handleDelete = (habit) => {
    const { id } = habit;
    console.log(id);
    setHabits(habits.filter((habit) => habit.id != id));
  };

  const hadleReset = () => {
    setHabits(habits.map((habit) => ({ ...habit, count: 0 })));
  };

  useEffect(() => {
    console.log("test");
    let total = 0;
    habits.forEach((habit) => (total += habit.count));
    setTotalCount(total);
  }, [habits]);

  return (
    <>
      <Navbar totalCount={totalCount}></Navbar>
      <Createhabit input={input} onCreate={onCreate}></Createhabit>
      <ul>
        <Habits
          habits={habits}
          onIncreasement={handleIncreasement}
          onDecreasement={handleDecreasement}
          onDelete={handleDelete}
        ></Habits>
      </ul>
      {habits.length > 0 && (
        <button className="habits-reset" onClick={hadleReset}>
          Reset All
        </button>
      )}
    </>
  );
}
export default App;
