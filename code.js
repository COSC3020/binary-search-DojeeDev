function binarySearch(list, element) {
  var low = 0;
  var high = list.length - 1;
  console.log("list: " + list);

  while (low <= high) {
    var mid = Math.floor(((low+high)/2));
    var me = list[mid];
    console.log("loop " + mid + " " + me);

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
