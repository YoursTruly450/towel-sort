
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = new Array;
  let direction = true;
  for (let i in matrix) {
    let subMatrix = matrix[i];
    if (direction) {
      direction = !direction;
    } else {
      subMatrix = matrix[i].reverse();
      direction = !direction;
    }
    for (let j in subMatrix) {
      arr.push(subMatrix[j]);
    }
  }
  return arr;
}
