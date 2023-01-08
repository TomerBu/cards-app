import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddCard from "./components/add-card/AddCard";
import CardDetails from "./pages/card-details/CardDetails";
import CardList from "./pages/card-list/CardList";
import EditCard from "./pages/edit-card/EditCard";

function App() {
  return (
    <>
      <AddCard/>
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
