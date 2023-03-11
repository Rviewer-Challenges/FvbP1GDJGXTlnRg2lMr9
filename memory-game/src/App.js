import { Layout } from "./pages/Layout";
import { LevelSelectionPage } from "./pages/levelSelectionPage/LevelSelectionPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <LevelSelectionPage />
      </Layout>
    </div>
  );
}

export default App;
