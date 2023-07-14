(function(){
let arr=["hello","world","this","is","soundar"]
    let titileCase=function(data){
    let change=data.map((str)=>str.charAt(0).toUpperCase()+str.slice(1).toLowerCase());
    console.log(change);
}
titileCase(arr);
})();