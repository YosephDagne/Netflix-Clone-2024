import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
function App() {
  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL);
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
