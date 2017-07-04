const _evaluateTransactionHistory = (account, transactions) => {
  let balanceChanges = 0;
  transactions.forEach(transaction => {
    if (transaction.owner.toString() === account.id.toString()) {
      if (transaction.kind === "deposit") {
        balanceChanges += +transaction.amount;
      } else if (transaction.kind === "withdrawal") {
        balanceChanges -= +transaction.amount;
      }
    }

    if (transaction.kind === "transfer") {
      if (transaction.owner.toString() === account.id.toString()) {
        balanceChanges -= +transaction.amount;
      } else if (transaction.receiver.toString() === account.id.toString()) {
        balanceChanges += +transaction.amount;
      }
    }
  });
  return balanceChanges;
};

export function calculateBalances(accounts, transactions) {
  let results;
  if (Array.isArray(accounts)) {
    results = [];
    accounts.forEach(account => {
      let newBalance = _evaluateTransactionHistory(account, transactions);
      results.push({
        ...account,
        balance: account.balance + newBalance
      })
    });
  } else {
    let newBalance = _evaluateTransactionHistory(accounts, transactions);
    results = {
      ...accounts,
      balance: accounts.balance + newBalance
    };
  }
  return results;
};