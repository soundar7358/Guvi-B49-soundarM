let input = ["Madam", "malayalam", "soundar", "mam", "dad", "prakash"];
(function (arr) {
  let out = [];

  arr.forEach((data) => {
    let str = data.split("").reverse().join("");
    if (str.toLowerCase() === data.toLowerCase()) {
      out.push(data);
    }
  });
  console.log(out);
})(input);
