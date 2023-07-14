(function(){
    let arr=[1,2,3,4,5,6,7,8,9,10];
    let odd_numbers=function(data){
    odds=data.filter((num)=> num%2==1);
    console.log(odds);
    };
    odd_numbers(arr);
})();