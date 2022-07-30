import React from "react";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../context/BudgetsContext";
import BudgetCard from "./BudgetCard";

function TotalBudgetCard() {
  const { expenses, budgets } = useBudgets();
  const amount = expenses.reduce(
    (total, expenses) => total + expenses.amount,
    0
  );
  const max = budgets.reduce((total, budget) => total + budget.max, 0);

  if (max === 0) return null;
  return <BudgetCard name="Итого" amount={amount} gray max={max} hideButtons />;
}

export default TotalBudgetCard;
