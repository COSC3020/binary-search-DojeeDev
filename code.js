function binarySearch(list, element) {
  var low = 0;
  var high = list.length - 1;

  while (!(low > high)) {
    var mid = Math.floor(((low+high)/2));
    var me = list[mid];

    if (list[0] == list[list.length-1]) {
      if (me == element) {
        return 0;
      }
      else {
        return -1;
      }
    }
    else if (me == element) {
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

