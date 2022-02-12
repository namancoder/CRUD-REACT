import { useState } from "react";
import "./App.css";

import NavBar from "./Components/NavBar";
import AddContact from "./Components/AddContacts";
import AllContacts from "./Components/AllContacts";
import NotFound from "./Components/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<AllContacts />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
