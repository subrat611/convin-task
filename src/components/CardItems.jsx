import CardItem from "./CardItem";

export default function CardItems({ cardItems }) {
  return (
    <div className="card-bucket-items-wrapper">
      {cardItems.map(({ title, link, id }) => (
        <CardItem cardtitle={title} cardlink={link} key={id} />
      ))}
    </div>
  );
}
