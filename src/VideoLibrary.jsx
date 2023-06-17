import { useEffect, useState } from "react";
import { fakeFetch } from "./api/videoLibraryFakeFetch";

export const VideoLibrary = () => {
  const [getVideo, setVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  function getFilteredVideo(originalVideoList) {
    const videoToBeDeleted = originalVideoList.find(
      (currentVideo) => currentVideo.title !== null
    );

    setVideo(
      (getVideo) =>
        (getVideo = originalVideoList.filter(
          ({ title }) => title !== videoToBeDeleted.title
        ))
    );
  }
  const getData = async () => {
    try {
      setIsLoading((isLoading) => (isLoading = true));
      const { status, data } = await fakeFetch(
        "https://example.com/api/videos"
      );
      if (status === 200) {
        setVideo((getVideo) => (getVideo = data.videos));
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
      <h2>Question-4</h2>
      <h2>Video Library</h2>
      <div>{isLoading && "Loading..."}</div>
      <ul>
        {getVideo.map(({ title, thumbnail, views, likes }) => {
          return (
            <li style={{ display: "inline-block", listStyle: "none" }}>
              <img src={thumbnail} alt="" />
              <p>{title}</p>
              <p>
                <b>views :</b>
                {views}
              </p>
              <p>
                <b>likes :</b>
                {likes}
              </p>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          getFilteredVideo(getVideo);
        }}
      >
        Delete Video
      </button>
    </div>
  );
};
