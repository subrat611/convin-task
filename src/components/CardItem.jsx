import { Button } from "antd";

export default function CardItem({
  cardtitle,
  cardlink,
  handleDelete,
  itemId,
}) {
  return (
    <div className="card-item">
      <p className="card-item-title">{cardtitle}</p>
      <p className="card-item-link">{cardlink}</p>
      <div className="card-item-controller">
        <Button type="primary" className="btn-ant">
          Edit
        </Button>
        <Button type="primary" danger onClick={() => handleDelete(itemId)}>
          Delete
        </Button>
      </div>
    </div>
  );
}
