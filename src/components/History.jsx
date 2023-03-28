import { useEffect } from "react";
import { useSelector } from "react-redux";

import "../history.scss";

export default function History() {
  const history = useSelector((state) => state.history);

  return (
    <div className="history-wrapper">
      <h2 className="history-title">History</h2>
      {history.map((item) => (
        <div className="history-card">
          <h2 className="history-card-title">{item.title}</h2>
          <p className="history-card-link">{item.link}</p>
          <p className="history-card-time">palyed time: {item.playtime}</p>
        </div>
      ))}
    </div>
  );
}
