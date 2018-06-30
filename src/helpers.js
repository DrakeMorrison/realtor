const formatPrice = (dollars) => {
  return dollars.toLocaleString(
    'en-us',
    {
      style: 'currency',
      currency: 'USD',
    }
  );
};

export {formatPrice};
