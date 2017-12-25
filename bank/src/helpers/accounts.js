export function formatDate(date) {
  return `${ date.getMonth() + 1 }/${ date.getDate()}/${date.getFullYear()}`;
}

export function formatMoney(amount) {
  return `$${ (amount / 100).toLocaleString(undefined, {minimumFractionDigits: 2}) }`;
}
