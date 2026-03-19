export const formatPrice = (price) => {
  if (price < 1000) {
    return `£ ${price}`;
  } else if (price < 1000000) {
    return `£ ${(price / 1000).toFixed(2)}K`;
  } else if (price < 1000000000) {
    return `£ ${(price / 1000000).toFixed(2)}M`;
  } else {
    return `£ ${(price / 1000000000).toFixed(2)}B`;
  }
};