import { fakeFetch } from "./api/archivedFakefetch";
import { useEffect, useState } from "react";

export const Archive = () => {
  const [habit, setHabit] = useState([]);

  function getFilteredHabit() {
    setHabit(
      (habit) => (habit = habit.filter(({ archived }) => archived === true))
    );
  }
  const getData = async () => {
    try {
      const { status, data } = await fakeFetch(
        "https://example.com/api/habits"
      );
      if (status === 200) {
        setHabit((habit) => (habit = data.habits));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <hr />
      <h2>Question-6</h2>
      <h2>UnArchive-Archive</h2>
      <ul>
        {habit.map(({ title, desc, daysFollowed, daysSkipped }) => {
          return (
            <li style={{ textAlign: "left", listStyle: "none" }}>
              <h3>{title}</h3>
              <p>{desc}</p>
              <p>
                <b>Day Followed :</b>
                {daysFollowed}
              </p>
              <p>
                <b>Day Skipped :</b>
                {daysSkipped}
              </p>
              <hr />
            </li>
          );
        })}
      </ul>
      <button onClick={getFilteredHabit}>Show Archive</button>
    </div>
  );
};
