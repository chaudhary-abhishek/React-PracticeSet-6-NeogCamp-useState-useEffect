import { fakeFetch } from "./api/habitTrackerFakefetch";
import { useEffect, useState } from "react";

export const HabitTracker = () => {
  const [getHabit, setHabit] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    try {
      setIsLoading((isLoading) => (isLoading = true));
      const { status, data } = await fakeFetch(
        "https://example.com/api/habits"
      );
      if (status === 200) {
        setHabit((getHabit) => (getHabit = data.habits));
        setIsLoading((isLoading) => (isLoading = false));
      }
    } catch (error) {
      setIsLoading((isLoading) => (isLoading = false));
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <hr />
      <h2>Question-3</h2>
      <h2 style={{ textAlign: "left" }}>Habit Tracker</h2>
      <div>{isLoading && "Loading..."}</div>
      <ul>
        {getHabit.map(({ title, desc, daysFollowed, daysSkipped }) => {
          return (
            <li style={{ textAlign: "left" }}>
              <h3>{title}</h3>
              <p>{desc}</p>
              <p>
                <b>Days Followed: </b>
                {daysFollowed}
              </p>
              <p>
                <b>Days Skipped: </b>
                {daysSkipped}
              </p>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
