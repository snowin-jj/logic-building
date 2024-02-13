function rgbToHex(r = 255, g = 255, b = 255) {
  r = Math.max(Math.min(r, 255), 0);
  g = Math.max(Math.min(g, 255), 0);
  b = Math.max(Math.min(b, 255), 0);

  const upperR = Math.floor(r / 16).toString(16);
  const lowerR = Math.floor(r % 16).toString(16);
  const upperG = Math.floor(g / 16).toString(16);
  const lowerG = Math.floor(g % 16).toString(16);
  const upperB = Math.floor(b / 16).toString(16);
  const lowerB = Math.floor(b % 16).toString(16);

  return `${upperR}${lowerR}${upperG}${lowerG}${upperB}${lowerB}`.toUpperCase();
}

console.log(rgbToHex(139, 87, 271));
