import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <b>{description}</b><br/>
    Amount: {amount}<br/>
    Created At: {createdAt}<br/>
    <button onClick={() => {
      dispatch(removeExpense({ id }));
    }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);