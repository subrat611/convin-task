import { useDispatch } from "react-redux";
import {
  editCardItemFomBucket,
  removeCardFromBucket,
} from "../store/bucketSlice";
import CardItem from "./CardItem";

export default function CardItems({ cardItems, bucketId }) {
  const dispatch = useDispatch();

  const removeItemFromBucket = (itemId) => {
    dispatch(
      removeCardFromBucket({
        itemId,
        bucketId,
      })
    );
  };

  const editItemFromBucket = (itemId, itemTitle, itemLink) => {
    dispatch(
      editCardItemFomBucket({
        itemId,
        bucketId,
        itemTitle,
        itemLink,
      })
    );
  };

  return (
    <div className="card-bucket-items-wrapper">
      {cardItems.map(({ title, link, id }) => (
        <CardItem
          key={id}
          cardtitle={title}
          cardlink={link}
          itemId={id}
          bucketId={bucketId}
          handleDelete={removeItemFromBucket}
          handleEdit={editItemFromBucket}
        />
      ))}
    </div>
  );
}
