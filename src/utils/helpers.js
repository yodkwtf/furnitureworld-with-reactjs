export const formatPrice = (num) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(num / 10);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === 'colors') {
    // convert array of arrays into a single array
    unique = unique.flat();
  }
  return ['all', ...new Set(unique)];
};
