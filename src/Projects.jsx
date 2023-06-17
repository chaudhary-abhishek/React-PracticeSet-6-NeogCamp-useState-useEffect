import { fakeFetch } from "./api/projectsFakefetch";
import { useEffect, useState } from "react";

export const Projects = () => {
  const [project, setProject] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [currentProject, setCurrentProject] = useState({});
  function ClickHandler(currentProjectObject) {
    setIsClicked((isClicked) => (isClicked = true));
    setCurrentProject(
      (currentProject) => (currentProject = currentProjectObject)
    );
  }
  const getData = async () => {
    try {
      const { status, data } = await fakeFetch(
        "https://example.com/api/projects"
      );
      if (status === 200) {
        setProject((project) => (project = data.projects));
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
      <h2>Question-7</h2>
      <h2>Project Page</h2>
      <ul>
        {project.map((singleProjectDetail) => {
          return (
            <li style={{ listStyle: "none", textAlign: "left" }}>
              <p>
                <b>Name :</b>
                {singleProjectDetail.title}
              </p>
              <p>
                <b>Description :</b>
                {singleProjectDetail.description}
              </p>
              <button
                onClick={() => {
                  ClickHandler(singleProjectDetail);
                }}
              >
                Show Details
              </button>
            </li>
          );
        })}
      </ul>
      <div style={{ display: isClicked ? "" : "none" }}>
        <h3>Project Details</h3>
        <ul>
          {
            <li style={{ listStyle: "none", textAlign: "left" }}>
              <p>
                <b>Name :</b>
                {currentProject.title}
              </p>
              <p>
                <b>Description :</b>
                {currentProject.description}
              </p>
              <p>
                <b>Technologies :</b>
                {currentProject.technologies}
              </p>
              <p>
                <b>Completed :</b>
                {currentProject.completed === true ? " true" : " false"}
              </p>
            </li>
          }
        </ul>
      </div>
    </div>
  );
};
