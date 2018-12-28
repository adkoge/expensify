import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <b>{description}</b><br/>
    </Link>
    Amount: {amount}<br/>
    Created At: {createdAt}<br/>
  </div>
);

export default ExpenseListItem;