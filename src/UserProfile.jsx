import { fakeFetch } from "./api/userProfileFakeFetch";
import { useEffect, useState } from "react";

export const UserProfile = () => {
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const getUpdatedName = () => {
    setProfile((profile) => (profile = { ...profile, name: "Emily" }));
  };

  const getData = async () => {
    try {
      setIsLoading((isLoading) => (isLoading = true));
      const { data, status } = await fakeFetch(
        "https://example.com/api/profile"
      );
      if (status === 200) {
        setProfile((profile) => (profile = data.profiles));
        setIsLoading((isLoading) => (isLoading = false));
      }
    } catch (error) {
      console.log(error);
      setIsLoading((isLoading) => (isLoading = false));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <hr />
      <h2>Question-8</h2>
      <h2>User Profile</h2>
      <div>{isLoading && "Loading..."}</div>
      <ul>
        <li style={{ listStyle: "none", textAlign: "left" }}>
          <p>
            <b>Name :</b> {profile.name}
          </p>
          <p>
            <b>Email :</b> {profile.email}
          </p>
          <p>
            <b>Age :</b> {profile.age}
          </p>
          <p>
            <b>Gender :</b> {profile.gender}
          </p>
          <p>
            <b>Occupation :</b> {profile.occupation}
          </p>
        </li>
      </ul>
      <button onClick={getUpdatedName}>Update Name</button>
    </div>
  );
};
