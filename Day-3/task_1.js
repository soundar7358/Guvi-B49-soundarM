let json_1='{"name":"Person 1","age":5}';
let json_2='{"age":5,"name":"Person 1"}';
function Compare_Json(json_1,json_2){
//converting JSON string to Object.
    let obj1=JSON.parse(json_1);
    let obj2=JSON.parse(json_2);
// comparing no.of properties
if(Object.keys(obj1).length != Object.keys(obj2).length){
    return false;
}
// Comparing actual keys and values
for(let key in obj1){
    if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]){
        return false;
    }
}
return true;
}
result= Compare_Json(json_1,json_2);
console.log(result);