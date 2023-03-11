import { useLevelContext } from "./context/gameContext";
import { BoardGamePage } from "./pages/boardGamePage/BoardGamePage";
import { Layout } from "./pages/Layout";
import { LevelSelectionPage } from "./pages/levelSelectionPage/LevelSelectionPage";

function App() {
  const {
    selectedLevel
  } = useLevelContext();
  return (
    <div className="App">
      <Layout>
        {!selectedLevel ? (
          <LevelSelectionPage />
        ) : (
          <BoardGamePage />
        )}
      </Layout>
    </div>
  );
}

export default App;
