import React from "react";
import AddForm from "../../components/add-form/AddForm";
import Topfold from "../../components/topfold/Topfold";
import "./addexpense.css";

const AddExpense = () => {
  return (
    <>
      <div className="add-expense">
        <Topfold />
        <AddForm />
      </div>
    </>
  );
};

export default AddExpense;
