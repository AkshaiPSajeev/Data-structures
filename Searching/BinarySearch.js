//works only on sorted array

function binarySearch(arr,left,right,searchNum){

      
    if(right<left){
        console.log('not found');
        return false;
    }
    let mid=Math.floor((left+right)/2);
    

    if(arr[mid]==searchNum){
        console.log('found');
        return true;
    }
  
    
     if(searchNum>arr[mid]){
        binarySearch(arr,mid+1,right,searchNum)
    }else if(searchNum<arr[mid]){
        binarySearch(arr,left,mid-1,searchNum)
    }
}

let arr=[1,3,4,5,77];
binarySearch(arr,0,arr.length-1,77);
