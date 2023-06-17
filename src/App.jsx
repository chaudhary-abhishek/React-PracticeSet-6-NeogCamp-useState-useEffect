import "./styles.css";
import { ProductOnClick } from "./ProductOnClick";
import { ToDoList } from "./ToDoList";
import { HabitTracker } from "./HabitTracker";
import { VideoLibrary } from "./VideoLibrary";
import { Bakery } from "./Bakery";
import { Archive } from "./Archive";
import { Projects } from "./Projects";
import { UserProfile } from "./UserProfile";
import { AddLabelToVideo } from "./VideoAddLabel";
import { SocialMedia } from "./SocialMedia";

export default function App() {
  return (
    <div className="App">
      <h1>useEffect Practice Set - 2</h1>
      <ProductOnClick />
      <ToDoList />
      <HabitTracker />
      <VideoLibrary />
      <Bakery />
      <Archive />
      <Projects />
      <UserProfile />
      <AddLabelToVideo />
      <SocialMedia />
    </div>
  );
}
