function humanReadableTime(sec) {
  if (sec < 0 || sec > 359999) return;

  let remainingSec = sec % 3600;
  let hr = String(Math.floor(sec / 3600)).padStart(2, `0`);
  let mins = String(Math.floor(remainingSec / 60)).padStart(2, `0`);
  let secs = String(Math.floor(remainingSec % 60)).padStart(2, `0`);

  return `${hr}:${mins}:${secs}`;
}

console.log(humanReadableTime(3600));
