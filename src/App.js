import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shopping from "./components/Shopping";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/nav" element={<Header />} />
        <Route path="*" element={<NoMatch />} />

      </Routes>
    </Router>
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
