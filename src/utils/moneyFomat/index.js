export function moneyFormat(price, sign = 'VND') {
  const pieces = parseFloat(price).toFixed(1).split('');
  let ii = pieces.length - 2;
  while ((ii -= 3) > 0) {
    pieces.splice(ii, 0, ',');
  }
  return sign + ' ' + pieces.join('');
}
