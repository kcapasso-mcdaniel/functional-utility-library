// Your functions go here!
Array.prototype.myFilter = function (callback) {
   // A1: making a new array
   //R: the new array
   var newArray = [];
   for (let i = 0; i < this.length; i++) {
      if (callback(this[i]) === true) {
         newArray.push(this[i]);
      }
   }
   return newArray;
};

// Return Array Slice Function
// A1: slicing a portion of the array and making it a new array
// R: the new array
function arraySlice(array, beginSlice, endSlice) {
   selection = array.slice(beginSlice, endSlice);
   console.log(selection);
   return selection;
}

// Remove Element from Array Slice Function
// A1: input 1 and 2 define the parameters of the slice
// R: the element selection removed from the array
function arrayRemoveSlice(array, input1, input2) {
   selection = array.slice(input1, input2);
   console.log(selection);
   return selection;
}

// Combine two arrays using concat()
// A1: array1 and array2 are being calling to combine
// R: concatenated array
function concatMethod(array1, array2) {
   newArray = array1.concat(array2);
   console.log(newArray);
   return newArray;
}

// Add Elements to the End of an Array with concat()
// A1: the new item is being added to the end of the original
// R: the new array with the new item on the end
function concatAddEnd(originalItem, newItem) {
   newArray = originalItem.concat(newItem);
   console.log(newArray);
   return newArray;
}

// Reduce Method to Analyze Data
