import { useAppSelector } from "../../app/hooks";
import CardItem from "../card-item/CardItem";

const CardList = () => {
  //get all the cards from the store and show them?
  // החנות יכולה להכיל מידע של כל הקומפוננטות באתר   - נבחר מה שאנו רוצים להציג
  const cards = useAppSelector((s) => s.cards.cards);

  return (
    <div className="d-flex">
      {cards.map((card) => (
        <CardItem {...card} key={card.id} />
      ))}
    </div>
  );
};

export default CardList;
