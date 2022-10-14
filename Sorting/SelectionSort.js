let arr=[11,3,4,345,55,77,2,2,2];

for(let i=0;i<arr.length;i++){
    let min_index=i;
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[min_index]){
            min_index=j;
        }
    }
    if(i!=min_index){
        temp=arr[i];
        arr[i]=arr[min_index];
        arr[min_index]=temp;
    }

}

console.log(arr);