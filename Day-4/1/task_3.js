let arr=[1,2,3,4,5,6,7,8,9,10];
(function(data){
    let sum=0;
    data.forEach((num)=> sum=sum+num)
    console.log("Sum of all numbers in the array is : "+sum);
}
)(arr);