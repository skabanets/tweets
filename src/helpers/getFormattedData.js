export const getFormattedData = num => {
  if (!num) return;

  let str = num.toString();

  let parts = str.split('.');
  let integerPart = parts[0];
  let decimalPart = parts.length > 1 ? '.' + parts[1] : '';

  let result = '';
  let count = 0;

  for (let i = integerPart.length - 1; i >= 0; i--) {
    result = integerPart[i] + result;
    count++;
    if (count % 3 === 0 && i !== 0) {
      result = ',' + result;
    }
  }

  result += decimalPart;

  return result;
};
