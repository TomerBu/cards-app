import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardDetails from "./pages/card-details/CardDetails";
import CardList from "./pages/card-list/CardList";
import EditCard from "./pages/edit-card/EditCard";
import Modal from "react-modal";

function App() {
  Modal.setAppElement("#root");
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Nav */}
      <div className="d-flex">
        <button
          onClick={() => setOpen(true)}
          className="btn btn-primary mx-auto"
        >
          Show Modal
        </button>
      </div>

      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/cards" element={<CardList />} />
        <Route path="/cards/edit/:id" element={<EditCard />} />
        <Route path="/cards/details/:id" element={<CardDetails />} />
      </Routes>
    </>
  );
}

export default App;
