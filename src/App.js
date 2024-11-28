import React, { useEffect, useState } from "react";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [rewardPoints, setRewardPoints] = useState({});

  const fetchTransactions = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { customerId: 1, amount: 120, date: "2024-01-15" },
          { customerId: 1, amount: 75, date: "2024-01-20" },
          { customerId: 2, amount: 200, date: "2024-02-05" },
          { customerId: 2, amount: 50, date: "2024-02-18" },
          { customerId: 1, amount: 150, date: "2024-03-12" },
        ]);
      }, 1000);
    });
  };

  const calculatePoints = (transactions) => {
    const points = {};

    transactions.forEach(({ customerId, amount, date }) => {
      const month = new Date(date).toLocaleString("default", { month: "long" });
      const customerPoints = points[customerId] || { total: 0 };

      let transactionPoints = 0;
      if (amount > 100) transactionPoints += 2 * (amount - 100);
      if (amount > 50) transactionPoints += 1 * Math.min(amount - 50, 50);

      customerPoints[month] = (customerPoints[month] || 0) + transactionPoints;
      customerPoints.total = customerPoints.total + transactionPoints;

      points[customerId] = customerPoints;
    });

    return points;
  };

  useEffect(() => {
    fetchTransactions().then((data) => {
      setTransactions(data);
      setRewardPoints(calculatePoints(data));
    });
  }, []);

  return (
    <div>
      <h1>Reward Points Calculator</h1>
      <h2>Transactions</h2>
      <ul>
        {transactions.map(({ customerId, amount, date }, index) => (
          <li key={index}>
            Customer {customerId}: ${amount} on {date}
          </li>
        ))}
      </ul>
      <h2>Reward Points</h2>
      {Object.keys(rewardPoints).map((customerId) => (
        <div key={customerId}>
          <h3>Customer {customerId}</h3>
          <ul>
            {Object.entries(rewardPoints[customerId]).map(([month, points]) =>
              month !== "total" ? (
                <li key={month}>
                  {month}: {points} points
                </li>
              ) : null
            )}
            <li>Total: {rewardPoints[customerId].total} points</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default App;
