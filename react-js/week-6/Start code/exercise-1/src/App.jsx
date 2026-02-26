import Header from "./components/Header";
import Scores from "./components/Scores";
import { HTML_RESULTS } from "./data";

function App() {
  return (
    <>
      <Header batchName="Batch 123" />

      <Scores courseName="HTML" courseResults={HTML_RESULTS} />
    </>
  );
}

export default App;
