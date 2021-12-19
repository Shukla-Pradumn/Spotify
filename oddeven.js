// You need to return sorted array, not string
// arr: input array
// arrSize: size of array
var arr = [1,2,3,4,5,6];
sortEvenOdd(arr,6);
console.log(arr);
// oddsort(arr,0,3);
// evensort(arr,3,5);
console.log(arr);
// console.log(brr);
function sortEvenOdd(arr, arrSize)
  {
      // Your code here 
      var odd =0;
      var start = 0;
      var end =arrSize-1;
      while(start < end ){
        if(arr[start]%2!=0){
          start++;
          odd++;
        }
        if(arr[end]%2==0){
          end--;
        }
        if(arr[start]%2==0 && arr[end]%2!=0){
          var temp = arr[start];
          arr[start] = arr[end];
          arr[end] = temp;
          start++;
          odd++;
          end--;
        }
        
      } 
      if(arr[start]%2!=0){
        odd++;
      }
      oddsort(arr,0,3);
      evensort(arr,4,5);

      return arr;
            
  }
  function oddsort(arr,start,end){
    if(start>=end){
      return;
    }
     
     var s = start;
     var e = end;
     var mid = s + (e-s)/2;
     var pivot = arr[mid];

     while(s<=e){
       while(arr[s]>pivot){
         s++;
       }
       while(arr[e]<pivot){
         e--;
       }
       if(s<=e){
         var temp = arr[s];
         arr[s] = arr[e];
         arr[e] = temp;
        s++;
        e--;
       }
     }
     oddsort(arr,start,e);
     oddsort(arr,s,end);
  }
  function evensort(arr,start,end){
    if(start>=end){
      return;
    }
     
     var s = start;
     var e = end;
     var mid = s + (e-s)/2;
     var pivot = arr[mid];

     while(s<=e){
       while(arr[s]<pivot){
         s++;
       }
       while(arr[e]>pivot){
         e--;
       }
       if(s<=e){
         var temp = arr[s];
         arr[s] = arr[e];
         arr[e] = temp;
        s++;
        e--;
       }
     }
     evensort(arr,start,e);
     evensort(arr,s,end);
  }