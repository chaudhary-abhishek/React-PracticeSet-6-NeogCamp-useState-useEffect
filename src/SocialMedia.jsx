import { fakeFetch } from "./api/socialMediaFakefetch";
import { useEffect, useState } from "react";

export const SocialMedia = () => {
  const [socialDetail, setSocialDetails] = useState({});
  const [click, setClick] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const increaseFollowers = () => {
    setSocialDetails(
      (socialDetail) =>
        (socialDetail = {
          ...socialDetail,
          followers: socialDetail.followers++
        })
    );
    setClick((click) => (click = true));
  };
  const getData = async () => {
    try {
      setIsLoad((isLoad) => (isLoad = true));
      const { data, status } = await fakeFetch(
        "https://example.com/api/profile"
      );
      if (status === 200) {
        setSocialDetails((socialDetail) => (socialDetail = data.profile));
        setIsLoad((isLoad) => (isLoad = false));
      }
    } catch (error) {
      console.log(error);
      setIsLoad((isLoad) => (isLoad = false));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <hr />
      <h2>Question-10</h2>
      <h2>Social Media</h2>
      <div>{isLoad && "Loading..."}</div>
      <div>
        <p style={{ textAlign: "left" }}>
          <h3>{socialDetail.name}</h3>
          <p>
            <b>Age : </b>
            {socialDetail.age}
          </p>
          <p>
            <b>Gender : </b>
            {socialDetail.gender}
          </p>
          <p>
            <b>Email : </b>
            {socialDetail.email}
          </p>
          <p>
            <b>Occupation : </b>
            {socialDetail.occupation}
          </p>
          <p>
            <b>Followers : </b>
            {socialDetail.followers}
          </p>
          <p>
            <b>FollowedBy : </b>
            {socialDetail.followedBy}
          </p>
        </p>
        <button onClick={increaseFollowers} disabled={click}>
          Follow John
        </button>
      </div>
    </div>
  );
};
