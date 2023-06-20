import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shopping from "./components/Store";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Shopping />} />
        <Route path="/checkout" element={<Cart />} />
        <Route path="/nav" element={<Header />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>404: Page Not Found</h2>
      <p>There are no pokemon in this region</p>
    </div>
  );
}

export default App;
