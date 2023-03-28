import { Button } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

// componets
import CardBucket from "./CardBucket";
import CreateCardForm from "./CreateCardForm";

export default function Bucket() {
  const bucket = useSelector((state) => state.bucket);

  const [showInputForm, setInputForm] = useState(null);
  return (
    <div className="main-wrapper">
      <div className="bucket-wrapper">
        <div className="bucket-header">
          <Link to="/history">
            <Button className="btn-history">History</Button>
          </Link>
        </div>
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
      <Outlet />
    </div>
  );
}
