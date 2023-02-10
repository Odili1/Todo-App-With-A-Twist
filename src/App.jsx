import Todo from "./Components/Todo";
import bgDesktop from "./assets/bg-desktop-dark.jpg";

function App() {
  return (
    <div
      className={`bg-dark-vdb min-h-screen w-full bg-hero-pattern bg-no-repeat bg-[length:100%_30%]`}
    >
      <Todo />
    </div>
  );
}

export default App;
