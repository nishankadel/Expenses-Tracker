import React, { useState } from "react";
import "./addform.css";
import { categories } from "../../constants/add-expense";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccessModal from "./SuccessModal";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const cat = categories;
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };

  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || amount === "" || !category) {
      const notify = () => {
        toast("Please enter valid data.");
      };
      notify();
      return;
    }

    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    setModalOpen(true);
  };

  return (
    <>
      <div className="add-form">
        <ToastContainer
          position="bottom-left"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
        />
        <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <div className="form-item">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Give a name to your expenditure"
            value={title}
            onChange={(e) => {
              handleTitle(e);
            }}
          />
        </div>
        <div className="form-item">
          <label htmlFor="amount">₹ Amount</label>
          <input
            className="amount-input"
            type="number"
            name="amount"
            id="amount"
            placeholder="Give a amount of your expenditure"
            value={amount}
            onChange={(e) => {
              handleAmount(e);
            }}
          />
        </div>
        <div className="category-container-parent">
          <div className="category">
            <div
              className="category-dropdown"
              onClick={() => setCategoryOpen(!categoryOpen)}
            >
              <label>{category ? category.title : "Select Category"}</label>
              <i className="fa-solid fa-caret-down"></i>
            </div>

            {categoryOpen && (
              <div className="category-container">
                {cat.map((category) => (
                  <div
                    className="category-item"
                    key={category.id}
                    style={{ borderRight: `5px solid ${category.color}` }}
                    onClick={() => handleCategory(category)}
                  >
                    <label>{category.title}</label>
                    <img src={category.icon} alt={category.title} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
    </>
  );
};

export default AddForm;
