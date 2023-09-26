let input = ["Madam", "malayalam", "soundar", "mam", "dad", "arun","mani"];

let isPalindrome=(data)=>{
    let palindrome=[];
    data.forEach((str)=>{
        let reversedStr=str.split("").reverse().join("");
        if(reversedStr.toLowerCase() === str.toLowerCase()){
            palindrome.push(str);
        }
    })
    console.log(palindrome);
}
isPalindrome(input);
