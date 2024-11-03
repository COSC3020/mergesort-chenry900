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
    for (i = 0; i < array.size(); i + size)
        {
            if ((i + size) 
