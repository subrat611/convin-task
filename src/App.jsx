import { Route, Routes } from "react-router-dom";

import Bucket from "./components/Bucket";
import PlayerModal from "./components/PlayerModal";
import History from "./components/History";
import "./app.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Bucket />}>
        <Route path="/:bucketId/:itemId" element={<PlayerModal />} />
      </Route>
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default App;
