function directionReduction(directions = []) {
  const oppositeDir = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    WEST: "EAST",
    EAST: "WEST",
  };

  for (let i = 0; i < directions.length; ) {
    const currentDirection = directions[i];
    const neighbour = directions[i + 1];
    if (neighbour === oppositeDir[currentDirection]) {
      directions.splice(i, 2);
      i = 0;
    } else {
      i++;
    }
  }

  return directions;
}

console.log(directionReduction(["EAST", "WEST"]));
