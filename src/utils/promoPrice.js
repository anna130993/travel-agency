import {parseOptionPrice} from './parseOptionPrice';

export const promoPrice = (price, discount) => {
  let standardPrice;

  if (price && discount) {
    if (parseOptionPrice(price).type === 'number') {
      standardPrice = parseOptionPrice(price).value;
    } else return null;
  } else return null;

  if ( isNaN(discount) || standardPrice < 0 || discount < 0)
    return null;
  return (100 - discount) * 0.01 * standardPrice;
};
