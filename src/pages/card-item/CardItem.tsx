import { Card } from "../../features/cards/cardsSlice";
import { BsPencil, BsTrash } from "react-icons/bs";
const CardItem = (props: Card) => {
  return (
    <div className="card p-5 m-2">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      {/* TODO: handle clicks */}
      
      <button className="btn btn-info">
        <BsPencil />
      </button>

      <button className="btn btn-danger">
        <BsTrash />
      </button>
    </div>
  );
};

export default CardItem;
