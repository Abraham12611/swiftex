import React from 'react';
import '../styles/TransactionOverview.css'; 

const TransactionOverview = () => {
  const recentTransactions = [
    {
      date: '05/09/2024',
      currencyPair: 'USD to EUR',
      status: 'Completed',
      pfi: 'Bank of America'
    },
    {
      date: '02/09/2024',
      currencyPair: 'NGN to KES',
      status: 'Pending',
      pfi: 'Standard Chartered'
    },
    {
      date: '29/08/2024',
      currencyPair: 'GBP to JPY',
      status: 'Failed',
      pfi: 'HSBC'
    }
  ];

  const currencyConversionSummary = [
    {
      currencyPair: 'USD to EUR',
      totalVolume: '$1,500 USD',
      period: 'Last Month'
    },
    {
      currencyPair: 'NGN to KES',
      totalVolume: '₦500,000 NGN',
      period: 'Last Week'
    }
  ];

  return (
    <div className="transaction-overview">
      {/* Recent Transactions Section */}
      <div className="recent-transactions">
        <h2>Recent Transactions</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Currency Pair</th>
              <th>Status</th>
              <th>PFI</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.currencyPair}</td>
                <td>
                  <span className={`status ${transaction.status.toLowerCase()}`}>
                    {transaction.status}
                  </span>
                </td>
                <td>{transaction.pfi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Currency Conversion Summary Section */}
      <div className="currency-conversion-summary">
        <h2>Currency Conversion Summary</h2>
        <div className="conversion-summary-list">
          {currencyConversionSummary.map((summary, index) => (
            <div className="conversion-summary-item" key={index}>
              <p>{summary.currencyPair}</p>
              <p>Total Volume: {summary.totalVolume}</p>
              <p className="period">{summary.period}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="cta-button">
        <button>Start New Transaction</button>
      </div>
    </div>
  );
};

export default TransactionOverview;
