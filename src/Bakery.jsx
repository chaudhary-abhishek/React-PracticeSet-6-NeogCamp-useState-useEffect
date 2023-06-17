import { fakeFetch } from "./api/bakeryFakeFetch";
import { useEffect, useState } from "react";

export const Bakery = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const filterBakery = () => {
    setPost(
      (post) => (post = post.filter(({ category }) => category === "Bakery"))
    );
  };
  const getData = async () => {
    try {
      setIsLoading((isLoading) => (isLoading = true));
      const { status, data } = await fakeFetch("https://example.com/api/posts");
      if (status === 200) {
        setPost((post) => (post = data.posts));
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
      <h2>Question-5</h2>
      <h2>Bakery</h2>
      <div>{isLoading && "Loading..."}</div>
      <ul style={{}}>
        {post.map(({ src, views, likes, category, caption }) => {
          return (
            <li style={{ listStyle: "none", textAlign: "left" }}>
              <img src={src} alt="img not found" />
              <p>
                <h3>{caption}</h3>
              </p>
              <br />
              <p>
                <b>Likes :</b>
                {likes}
              </p>
              <p>
                <b>Views :</b>
                {views}
              </p>
            </li>
          );
        })}
      </ul>
      <button onClick={filterBakery}>Show Bakery</button>
    </div>
  );
};
