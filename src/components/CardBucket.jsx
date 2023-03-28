import { useState } from "react";
import { useDispatch } from "react-redux";

import { Button } from "antd";

import { renameBucket, updateBucketDragDrop } from "../store/bucketSlice";

import { useDrop } from "react-dnd";

import CardItems from "./CardItems";

export default function CardBucket({ title, cardItems, cardId, setInputForm }) {
  const [inputTitle, setinputTitle] = useState({ isEdit: false, text: title });
  const dispatch = useDispatch();

  const [collectedProps, drop] = useDrop(() => ({
    accept: "cardItem",
    drop: (item) => dragItemToBucket(item),
  }));

  const dragItemToBucket = ({ bucketId, itemId, cardtitle, cardlink }) => {
    collectedProps.dragInfo = {
      bucketFromId: bucketId,
      bucketToId: cardId,
      itemId,
      cardtitle,
      cardlink,
    };
    dispatch(updateBucketDragDrop(collectedProps.dragInfo));
  };

  const handleRename = () => {
    setinputTitle({ isEdit: true, text: title });
  };

  const handleEditDone = () => {
    setinputTitle((prev) => ({ ...prev, isEdit: false }));

    dispatch(
      renameBucket({
        id: cardId,
        text: inputTitle.text,
      })
    );
  };

  const handleAddCard = () => {
    setInputForm(cardId);
  };

  return (
    <div className="card-bucket-wrapper" ref={drop}>
      <div className="card-bucket-header">
        {inputTitle.isEdit ? (
          <input
            type="text"
            name="bucketTitle"
            id="inputTitle"
            className="card-bucket-title-edit"
            value={inputTitle.text}
            onChange={(e) =>
              setinputTitle({ ...inputTitle, text: e.target.value })
            }
          />
        ) : (
          <h2 className="card-bucket-title">{title}</h2>
        )}

        {!inputTitle.isEdit ? (
          <Button className="btn-rename" onClick={handleRename}>
            Rename Bucket
          </Button>
        ) : (
          <Button
            type="primary"
            className="btn-rename"
            onClick={handleEditDone}
          >
            Done
          </Button>
        )}
        <Button type="primary" className="btn-rename" onClick={handleAddCard}>
          Add card to bucket
        </Button>
      </div>
      <CardItems bucketId={cardId} cardItems={cardItems} />
    </div>
  );
}
