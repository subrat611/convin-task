import { useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useDrag } from "react-dnd";

export default function CardItem({
  cardtitle,
  cardlink,
  itemId,
  bucketId,
  handleDelete,
  handleEdit,
}) {
  const [editItemInfo, setEditItemInfo] = useState({
    isEdit: false,
    text: cardtitle,
    link: cardlink,
  });

  const navigate = useNavigate();

  const [_, drag] = useDrag(() => ({
    type: "cardItem",
    item: {
      itemId,
      cardtitle,
      cardlink,
      bucketId,
    },
  }));

  const handleEditItem = (e) => {
    e.stopPropagation();
    setEditItemInfo((prev) => ({ ...prev, isEdit: true }));
  };

  const handleEditItemDone = (e) => {
    e.stopPropagation();
    console.log("y");
    setEditItemInfo((prev) => ({ ...prev, isEdit: false }));
    handleEdit(itemId, editItemInfo.text, editItemInfo.link);
  };

  return (
    <div
      ref={drag}
      className="card-item"
      onClick={() => navigate(`/${bucketId}/${itemId}`)}
    >
      {editItemInfo.isEdit ? (
        <input
          type="text"
          name="ItemTitle"
          id="inputTitle"
          className="card-item-title-edit"
          value={editItemInfo.text}
          onChange={(e) =>
            setEditItemInfo({ ...editItemInfo, text: e.target.value })
          }
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <p className="card-item-title">{cardtitle}</p>
      )}
      {editItemInfo.isEdit ? (
        <input
          type="text"
          name="ItemTitle"
          id="inputTitle"
          className="card-item-link-edit"
          value={editItemInfo.link}
          onChange={(e) =>
            setEditItemInfo({ ...editItemInfo, link: e.target.value })
          }
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <p className="card-item-link">{cardlink}</p>
      )}
      <div className="card-item-controller">
        {!editItemInfo.isEdit ? (
          <Button type="primary" className="btn-ant" onClick={handleEditItem}>
            Edit
          </Button>
        ) : (
          <Button
            type="primary"
            className="btn-ant"
            onClick={handleEditItemDone}
          >
            Done
          </Button>
        )}
        <Button
          type="primary"
          danger
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(itemId);
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
