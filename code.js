function mergesort(array) {
    var n = array.length;
     var temp = new Array(n);

     for (i = 1; i < n; i *= 2) 
          {
               for(first = 0; first < n; first += 2 * i)
                    {
                         var middle = Math.min(first + i, n);
                         var end = Math.min(first + 2 * i, n);
                         merge(array, temp, first, middle, end);
                    }
          }
     
    return array;
}

function merge(array, temp, first, middle, end) {
     var firstNum = first;
     var middleNum = middle;
     var tempNum = first;
     while (firstNum < middle && middleNum < end)
          {
               if(array[firstNum] <= array[middleNum])
                    temp[tempNum++] = array[firstNum++];
               else
                    temp[tempNum++] = array[middleNum++];
          }
     while (firstNum < middle)
        temp[tempNum++] = array[firstNum++];
     while (middleNum < end)
          temp[tempNum++] = array[middleNum++];
     for (i = first; i < end; i++)
          array[i] = temp[i];
     
}
