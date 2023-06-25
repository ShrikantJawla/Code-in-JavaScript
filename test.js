var convertToTitle = function (cn) {
  let ans = ''

  while (cn > 0) {
    let code = (--cn) % 26
    ans = String.fromCharCode(code + 65) + ans
    cn = (cn - code) / 26
  }

  console.log(ans)
};

convertToTitle(1236)