export function setupAccountOptions(accounts, activeAccount) {
  let active
  accounts = accounts.filter((account) => {
    if (account.id === activeAccount) {
      active = account
    }
    return account.id !== activeAccount
  })
  accounts = accounts.map((account) => {
    return ({
      [account.id]: account.id + ' — $' + account.balance.toLocaleString()
    })
  })

  accounts.unshift({
    [active.id]: active.id + ' — $' + active.balance.toLocaleString()
  })

  return accounts
}

export function setupRecipientOptions(accounts, activeAccount) {
  accounts = accounts.filter((account) => {
    return account.id !== activeAccount
  })
  accounts = accounts.map((account) => {
    return ({
      [account.id]: account.id
    })
  })
  accounts.unshift({ NULL: 'Select an account' })
  return accounts
}
