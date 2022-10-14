let arr=[11,3,4,345,55,77,2,2,2];


for(let i=1;i<arr.length;i++){
    let key=arr[i];
    j=i-1;

    while(j>=0 && arr[j]>key){
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=key;
    
}

console.log('sorted array');
console.log(arr);