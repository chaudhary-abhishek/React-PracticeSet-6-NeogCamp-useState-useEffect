import { fakeFetch } from "./api/videoAddLabelFakeFetch";
import { useEffect, useState } from "react";

export const AddLabelToVideo = () => {
  const [video, setVideo] = useState({});
  const [isClick, setIsClicked] = useState(false);
  const addLabel = () => {
    setIsClicked((isClick) => (isClick = true));
    setVideo((video) => (video = { ...video, label: "Self Motivational" }));
  };
  const getData = async () => {
    try {
      const { status, data } = await fakeFetch(
        "https://example.com/api/getvideo"
      );
      if (status === 200) {
        setVideo((video) => (video = data.videos));
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
      <h2>Question-9</h2>
      <h2>Add Label to Video</h2>
      <div>
        <p style={{ textAlign: "left" }}>
          <img src={video.thumbnail} alt="not found" />
          <p>
            <b>{video.title}</b>
          </p>
          <p>
            <b>Views : </b>
            {video.views}
          </p>
          <p>
            <b>Likes : </b>
            {video.likes}
          </p>
          <p style={{ display: isClick ? "" : "none" }}>
            <b>Label : </b>
            {video.label}
          </p>
        </p>
        <button onClick={addLabel}>Add Label</button>
      </div>
    </div>
  );
};
