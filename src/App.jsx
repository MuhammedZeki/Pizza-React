import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Success from "./pages/Success";
import OrderPizza from "./pages/OrderPizza";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/order-pizza" element={<OrderPizza />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
