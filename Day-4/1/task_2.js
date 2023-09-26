let arr=["hello","world","this","is","soundar"];
(function(data){

    let change=data.map((str)=>str.charAt(0).toUpperCase()+str.slice(1).toLowerCase());
    console.log(change);
})(arr);