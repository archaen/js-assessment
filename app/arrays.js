exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {

    var sum = arr.reduce(function(a,b) {
      return a + b;
    });
    return sum;
  },

  remove: function(arr, item) {
    var filtered = arr.filter(function(value){
      return value !== item;
    });
    return filtered;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = arr.length; i >= 0; i--) {
      if (item === arr[i]) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    const newArr = arr1.concat(arr2);
    return newArr;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var filtered = arr.filter(function(value) {
      return value === item;
    });
    return filtered.length;
  },

  duplicates: function(arr) {
    arr.sort(function(a, b) {
      return a - b;
    });
    var newArr = arr.filter((item, index, self) => {
      return item === self[index + 1];
    });
    var onlyUnique = newArr.filter((item, index, self) => {
      return index === self.indexOf(item);
    });
    return onlyUnique;
  },

  square: function(arr) {
    var squared = arr.map(function(value) {
      return value * value;
    });
    return squared;
  },

  findAllOccurrences: function(arr, target) {
    var indexArray = [];
    arr.forEach((value, index) => {
      if (value === target) {
        indexArray.push(index);
      }
    });
    return indexArray;
  }
};
