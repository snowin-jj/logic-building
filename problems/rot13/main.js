function rot13(str) {
  return str.replace(/[a-zA-Z]/g, function (char) {
    var charCode = char.charCodeAt(0);
    var offset = charCode <= 90 ? 65 : 97;
    return String.fromCharCode(((charCode - offset + 13) % 26) + offset);
  });
}

console.log(rot13("ABR"));
