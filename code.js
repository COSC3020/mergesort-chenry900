function mergesort(array) {
    int x = array.size();
    for (i = 0; i < array.size(); i + 2)
        {
            if ((i + 1) < array.size())
            {
                if (array[i] > array[i+1])
                {
                    int s = array[i];
                    array[i] = array[i+1];
                    array[i+1] = s;
                }
            }
        }
        
    
    
    
    return array;
}

function sort(array, size)
{
    for (i = 0; i < (array.size() - 1); i + size)//moving through the array by size of split
        {
            if ((i + size) > array.size())//accounts for odd size values
                odd = i - array.size();
            two = i + size;
            one = i;
            checkPlace = 0;
            checkSize = checkPlace;
            for (s = 0; s < size; s++)
                {
                    if (array[one] < array[two])
                    {
                        swap = array[one];
                        array[one] = array[two];
                        array[two] = swap;
                    }
                    else
                    {
                        check = two;
                        while (check < array.size() && checkSize < size)
                            {
                                if (array[one] < array[check])
                                {
                                    check = check + 1;
                                    checkSize = checkSize + 1;
                                }
                                
