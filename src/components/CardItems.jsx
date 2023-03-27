import { useDispatch } from "react-redux";
import { removeCardFromBucket } from "../store/bucketSlice";
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

  return (
    <div className="card-bucket-items-wrapper">
      {cardItems.map(({ title, link, id }) => (
        <CardItem
          key={id}
          cardtitle={title}
          cardlink={link}
          itemId={id}
          handleDelete={removeItemFromBucket}
        />
      ))}
    </div>
  );
}
