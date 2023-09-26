let input= [2, 3, 4, 5, 6, 7, 8, 9, 10];
(function(data){
primenumbers= data.filter((number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(primenumbers);
})(input);