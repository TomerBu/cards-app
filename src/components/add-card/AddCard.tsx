import { useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { v4 } from "uuid";
import { useAppDispatch } from "../../app/hooks";
import { Card, Category, addCard } from "../../features/cards/cardsSlice";

const AddCard = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [category, setCategory] = useState<Category>("breakfast");

  //dispatch:
  const dispatch = useAppDispatch();

  // 1) boolean state for the modal:
  const [isOpen, setOpen] = useState(false);
  Modal.setAppElement("#root");

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="d-flex">
        <button onClick={openModal} className="btn btn-primary mx-auto">
          Add Card
        </button>
      </div>
      <Modal onRequestClose={closeModal} isOpen={isOpen}>
        <div className="d-flex card">
          <h2 className="p-3">Add A Card:</h2>
          <button className="btn btn-danger text-light" onClick={closeModal}>
            Close modal
          </button>
        </div>
        <hr />
        name:
        <input value={name} onChange={(e) => setName(e.currentTarget.value)} />
        <br />
        description:
        <input
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        />
        <br />
        price:
        <input
          min="0"
          max="500"
          type="number"
          value={price}
          onChange={(e) => setPrice(+e.currentTarget.value)}
        />
        <br />
        vegetarian:
        <input
          type="checkbox"
          checked={vegetarian}
          onChange={(e) => setVegetarian(e.currentTarget.checked)}
        />
        <br />
        vegan:
        <input
          type="checkbox"
          checked={vegan}
          onChange={(e) => setVegan(e.currentTarget.checked)}
        />
        <br />
        <select
          value={category}
          name="category"
          id="category"
          onChange={(e) => {
            const cat = e.currentTarget.value as Category;
            setCategory(cat);
          }}
        >
          <option value="salads">salads</option>
          <option value="italian">italian</option>
          <option value="starters">starters</option>
          <option value="breakfast">breakfast</option>
          <option value="desserts">desserts</option>
          <option value="asian">asian</option>
          <option value="softDrink">softDrink</option>
          <option value="coffee">coffee</option>
        </select>
        <button
          onClick={() => {
            const card: Card = {
              id: v4(),
              name: name,
              description: description,
              price: price,
              category: category,
              vegan: vegan,
              vegetarian: vegetarian,
            };
            //dispatch addCard(card)
            dispatch(addCard(card));
            Swal.fire("success", "", "success").then((e) => closeModal());
          }}
        >
          Add Card:
        </button>
      </Modal>
    </>
  );
};

export default AddCard;

// create read update delete
