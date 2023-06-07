const deepEqual = (a, b) => {
  if (a === null && b === null) {
    return true;
  }

  if (a === undefined && b === undefined) {
    return true;
  }

  if (
    a !== null &&
    b !== null &&
    typeof a === "object" &&
    typeof b === "object"
  ) {
    if (Object.keys(a).length >= Object.keys(b).length) {
      return compareTwoObject(a, b);
    }
    return compareTwoObject(b, a);
  }

  return false;
};

const compareTwoObject = (a, b) =>
  Object.keys(a).every((k) =>
    a[k] === undefined && b[k] === undefined ? true : a[k] === b[k]
  );

module.exports = deepEqual;
