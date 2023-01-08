import { Card, deleteCard } from "../../features/cards/cardsSlice";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import Swal from "sweetalert2";
const CardItem = (props: Card) => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div dir="rtl" className="card p-5 m-2">
      <h2>{props.name}</h2>
      <hr />
      <p>{props.description}</p>

      <button
        className="btn btn-info"
        onClick={() => {
          nav(`/cards/edit/${props.id}`);
        }}
      >
        <BsPencil />
      </button>

      <button
        className="btn btn-danger"
        onClick={() => {
          Swal.fire({
            title: "Are you sure you want to delete the card?",
            showDenyButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`,
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(deleteCard(props.id));
              Swal.fire("Deleted!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Keeping the card", "", "info");
            }
          });
        }}
      >
        <BsTrash />
      </button>

      <button
        className="btn btn-success"
        onClick={() => {
          nav(`/cards/details/${props.id}`);
        }}
      >
        פרטים נוספים
      </button>
    </div>
  );
};

export default CardItem;
