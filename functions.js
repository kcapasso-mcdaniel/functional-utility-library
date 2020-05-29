// Your functions go here!

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

var watchList = [
   {
      Title: "Inception",
      Year: "2010",
      Rated: "PG-13",
      Released: "16 Jul 2010",
      Runtime: "148 min",
      Genre: "Action, Adventure, Crime",
      Director: "Christopher Nolan",
      Writer: "Christopher Nolan",
      Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      Metascore: "74",
      imdbRating: "8.8",
      imdbVotes: "1,446,708",
      imdbID: "tt1375666",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Interstellar",
      Year: "2014",
      Rated: "PG-13",
      Released: "07 Nov 2014",
      Runtime: "169 min",
      Genre: "Adventure, Drama, Sci-Fi",
      Director: "Christopher Nolan",
      Writer: "Jonathan Nolan, Christopher Nolan",
      Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      Metascore: "74",
      imdbRating: "8.6",
      imdbVotes: "910,366",
      imdbID: "tt0816692",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "The Dark Knight",
      Year: "2008",
      Rated: "PG-13",
      Released: "18 Jul 2008",
      Runtime: "152 min",
      Genre: "Action, Adventure, Crime",
      Director: "Christopher Nolan",
      Writer:
         "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      Metascore: "82",
      imdbRating: "9.0",
      imdbVotes: "1,652,832",
      imdbID: "tt0468569",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Batman Begins",
      Year: "2005",
      Rated: "PG-13",
      Released: "15 Jun 2005",
      Runtime: "140 min",
      Genre: "Action, Adventure",
      Director: "Christopher Nolan",
      Writer:
         "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      Metascore: "70",
      imdbRating: "8.3",
      imdbVotes: "972,584",
      imdbID: "tt0372784",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Avatar",
      Year: "2009",
      Rated: "PG-13",
      Released: "18 Dec 2009",
      Runtime: "162 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "James Cameron",
      Writer: "James Cameron",
      Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      Metascore: "83",
      imdbRating: "7.9",
      imdbVotes: "876,575",
      imdbID: "tt0499549",
      Type: "movie",
      Response: "True",
   },
];

// still need one more method here to finish the function missing the division of
// the movie avg and the directedBy.length
function reduceMethod(watchList) {
   var averageRating;
   var directedBy = watchList.filter(
      (film) => film["Director"] === "Christopher Nolan"
   ).length;
   console.log(directedBy);
   var ratingOf = watchList.map((rating) => parseInt(rating["imdbRating"]));
   console.log(ratingOf);
   var movieAvg = ratingOf.reduce(
      (sumRatingOf, rating) => sumRatingOf + rating
   );
   console.log(movieAvg);
   return averageRating;
}
console.log(reduceMethod(watchList));

// High Order-Functions to Solve Square of Array
// A1: using filter to remove negative numbers
// A2: using filter to remove decimals
// R: the square of only the positive numbers
function higherOrder(arr) {
   var newArr = arr.filter((num) => parseInt(num) > 0);
   console.log(newArr);
   var nonDecimalArr = newArr.filter((num) => Number.isInteger(num));
   console.log(nonDecimalArr);
   console.log(arr);
   return nonDecimalArr.map((num) => Math.pow(num, 2));
}

// Sort an Array Alphabetically
// A1: the callback function of alphabetically Order is being used for the array
// R: elements of the array are returned in alphabetical order
function alphabeticalOrder(array) {
   console.log(array);
   return array.sort();
}

// Split a string into an Array Using the split Method
// A1: the string is split into seprate strings - using the \W Character expression to define where to split the string
// R: the string is returned as an array with each word separate
function splitify(string) {
   var sepString = string.split(/\W/);
   console.log(sepString);
   return sepString;
}

// Convert a string into a sentence with Join Method
// A1: joining a string into a sentence - again using the \W to define where the separation should occur
// R: the string is returned as a sentence with no additional punctuation
function sentensify(string) {
   var sepString = string.split(/\W/).join(" ");
   console.log(sepString);
   return sepString;
}

// Apply Functional Programminig to Convert String to URL Slugs
// split function into each step and then achieve result - order should be
// lowercase, trim - this is the extra white space on the edges, split the array, filter for anything that is larger than zero, then join -
function convertStringUrl(title) {
   var newTitle = title.toLowerCase().trim().split(" ");
   // console.log(newTitle);
   var newerTitle = newTitle.filter((i) => i.length > 0).join("-");
   console.log(newerTitle);
   return newerTitle;
}

// Use the every() method to check that every element in the array meets a criteria
// A1: scans the element of the input to see if it meets the criteria
// - note the criteria for the below is for positive numbers in an array  -
// R: the function returns a boolean value
function everyMethod(input) {
   console.log(input);
   return input.every((value) => value > 0);
}

// Use the some() method to check that any element in an array meet a criteria
// A1: scans the element of the input to see if it meets the criteria
// - note the criteria for the below function is for negative numbers in an array
// R: the function returns a boolean value
function someMethod(input) {
   console.log(input);
   return input.every((value) => value < 0);
}
