let arr=["Hi","this","is","soundar"];
let titleCase=(data)=>{
    output=data.map((str)=> str.charAt(0).toUpperCase()+str.slice(1).toLowerCase());
    console.log(output);
}
titleCase(arr);