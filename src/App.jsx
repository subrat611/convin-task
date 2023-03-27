import { useState } from "react";
import { useSelector } from "react-redux";

// componets
import CardBucket from "./components/CardBucket";
import CreateCardForm from "./components/CreateCardForm";

import "./app.scss";

function App() {
  const bucket = useSelector((state) => state.bucket);

  const [showInputForm, setInputForm] = useState(null);

  return (
    <div className="app-wrapper">
      {bucket.map(({ title, id, items }) => (
        <div key={id} className="card-buckets">
          {showInputForm === id ? (
            <CreateCardForm cardId={id} setInputForm={setInputForm} />
          ) : null}
          <CardBucket
            cardId={id}
            title={title}
            cardItems={items}
            setInputForm={setInputForm}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
