import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddExpense from "./pages/add-expense/AddExpense";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add-expense" element={<AddExpense/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
