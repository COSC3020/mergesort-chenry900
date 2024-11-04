function mergesort(array) {
    int x = array.size();
    for (i = 1; i < array.size();i = i * 2)
        {
            sort(array, i);
        }
    
    
    
    return array;
}

function sort(array, size)
{
    for (i = 0; i < (array.size() - 1); i + size)//moving through the array by size of split
        {
            if ((i + size) > array.size())//accounts for odd size values
                size = i - array.size();
            two = i + size;
            one = i;
            for (j = one; j < two; j++)
                {
                    k = two;
                    while (array[j] < array[k] && k < two)
                        k++;
                    if (array[j] < array[k])
                    {
                        swap = array[j];
                        array[j] = array[k];
                        array[k] = swap;
                    }
                }
        }
                                
