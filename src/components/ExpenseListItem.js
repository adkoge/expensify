import React from "react";

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <b>{description}</b><br/>
    Amount: {amount}<br/>
    Created At: {createdAt}
  </div>
);

export default ExpenseListItem;