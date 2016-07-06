/* Create a function that can be used with sort. 
This function should take two strings, and return a value 
that sort can use to determine which is the longest string.
Finally, create an array of strings and try to get it sorted 
using your new function.
*/



var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items.sort(function (a, b) {
  if (a.length > b.length) {
      return -1 ;
  }
  else if (a.length < b.length) {
      return 1 ;
  }
  else {
      return 0 ;
  }
});



