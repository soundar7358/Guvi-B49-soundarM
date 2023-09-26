let numbers=[1,2,3,4,5,6,7,8,9,10];

(function(arr){
    let odd_Numbers=arr.filter((num)=> num%2==1);
    console.log(odd_Numbers);
})(numbers);
    