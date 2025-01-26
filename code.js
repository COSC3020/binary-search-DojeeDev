function binarySearch(list, element) {
  var low = 0;
  var high = list.length - 1;

  while (!(low > high)) {
    var mid = Math.floor(((low+high)/2));
    var me = list[mid];

    if (me == element) {
      return mid;
    }
    else if ( me < element ) {
      low = mid + 1;
    }
    else {
      high = mid - 1;
    }
  }
  
  return -1;
}

//test case like this won't work despite it giving the correct result.
console.log(binarySearch([6,6,6],6)); 
console.log(binarySearch([6,6,6],5)); 
console.log(binarySearch([6,6,6],8)); 
