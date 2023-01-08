import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useState } from "react";
import { Card, editCard } from "../../features/cards/cardsSlice";

const EditCard = () => {
  //get the id from the url:
  const { id } = useParams();
  const nav = useNavigate();
  //get all the cards from the store:
  const cards = useAppSelector((state) => state.cards.cards);

  //dispatch actions:
  const dispatch = useAppDispatch();

  const cardToEdit = cards.find((c) => c.id === id);

  const [name, setName] = useState(cardToEdit?.name ?? "");
  const [description, setDescription] = useState(cardToEdit?.description ?? "");
  const [price, setPrice] = useState(cardToEdit?.price ?? 0);
  const [vegan, setVegan] = useState(cardToEdit?.vegan ?? false);
  const [vegetarian, setVegetarian] = useState(cardToEdit?.vegetarian ?? false);

  if (cardToEdit === undefined) {
    // 404 page is better:
    return <Navigate to="/" />;
  }

  return (
    <div dir="rtl" className="d-flex card p-3 m-2">
      <h3>עריכת פרטים</h3>
      <div className="label-input d-flex flex-column">
        <label htmlFor="name">שם המנה:</label>
        <input
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
          placeholder="name"
        />
      </div>
      <br />
      <div className="label-input d-flex flex-column">
        <label htmlFor="description">תיאור המנה:</label>
        <input
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.currentTarget.value);
          }}
          placeholder="description"
        />
      </div>
      <br />
      <div className="label-input d-flex flex-column">
        <label htmlFor="price">מחיר המנה:</label>
        <input
          min="0"
          max="1000"
          type="number"
          id="price"
          value={price}
          onChange={(e) => {
            setPrice(+e.currentTarget.value);
          }}
          placeholder="price"
        />
      </div>

      <div className="label-input">
        <label htmlFor="vegan">טבעוני:</label>
        <input
          type="checkbox"
          id="vegan"
          checked={vegan}
          onChange={(e) => {
            setVegan(e.currentTarget.checked);
          }}
          placeholder="vegan"
        />
      </div>

      <div className="label-input">
        <label htmlFor="vegetarian">צמחוני:</label>
        <input
          type="checkbox"
          id="vegetarian"
          checked={vegetarian}
          onChange={(e) => {
            setVegetarian(e.currentTarget.checked);
          }}
          placeholder="vegetarian"
        />
      </div>
      <button
        className="btn btn-success"
        onClick={() => {
          //construct the edited Card object:
          const card: Card = {
            id: cardToEdit.id,
            category: cardToEdit.category,
            name: name,
            description: description,
            price: price,
            vegan: vegan,
            vegetarian: vegetarian,
          };
          dispatch(editCard(card));
          // send the user back to home page:
          nav(-1)
        }}
      >
        סיום עריכה
      </button>
    </div>
  );
};

export default EditCard;
