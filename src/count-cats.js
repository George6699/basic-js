module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(function(array){
    array.forEach(function(elem) {
      if (elem ==='^^'){
        count++;
      }
    });
  });
  return count;
};
