
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  return matrix.reduce((acc, value, index) => {
    value.sort((a, b) => !(index % 2) ? a - b : b - a).map(element => acc.push(element));
    return acc;
  }, [])
}
