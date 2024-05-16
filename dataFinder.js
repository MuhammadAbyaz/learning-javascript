function dataFinder(data) {
  return function find(min, max, value) {
    if (max > data.length) {
      throw new Error("Invalid range");
    }
    for (let i = min; i <= max; i++) {
      if (data[i] === value) {
        return true;
      }
    }
    return false;
  };
}
