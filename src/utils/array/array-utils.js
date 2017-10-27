export const isNonEmptyArray = array => {
  if (!array) {
    return false;
  }
  if (array.constructor === Array && array.length > 0) {
    return true;
  }
  return (
    typeof array === 'object' && array.length !== undefined && array.length > 0
  );
};
