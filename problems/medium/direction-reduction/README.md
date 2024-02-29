# Directions Reduction

Once upon a time, on a way through the old wild mountainous west, a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
How I crossed a mountainous desert the smart way.

The directions given to the man are, for example, the following (depending on the language):

```
["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
```

You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

```
["WEST"]
or
{ "WEST" }
or
[West]
```

**Other examples:**

In `["NORTH", "SOUTH", "EAST", "WEST"]`, the direction `"NORTH" + "SOUTH"` is going north and coming back right away.

The path becomes `["EAST", "WEST"]`, now `"EAST"` and `"WEST"` annihilate each other, therefore, the final result is `[]` (nil in Clojure).

In `["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]`, `"NORTH"` and `"SOUTH"` are not directly opposite but they become directly opposite after the reduction of `"EAST"` and `"WEST"` so the whole path is reducible to `["WEST", "WEST"]`.
Task

Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (`W<->E` or `S<->N` side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {North, East, West, South}.

See more examples in [Sample Tests](https://www.codewars.com/kata/550f22f4d758534c1100025a)

**Notes**

Not all paths can be made simpler. The path `["NORTH", "WEST", "SOUTH", "EAST"]` is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : `["NORTH", "WEST", "SOUTH", "EAST"]`.

# My Version

<details>
<summary>View Solution</summary>

```javascript
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
```

</details>
<br >

# AI's Review

**Functionality:**

- The code correctly removes opposite directional pairs ("NORTH" - "SOUTH", "EAST" - "WEST") from the input array, simplifying the directions sequence.

**Performance:**

- The time complexity is **O(n^2)** in the worst case, where n is the length of the input array. This is because the nested loop iterates potentially n times for each element, leading to quadratic complexity.

**Best Practices:**

- The code includes comments explaining the purpose and logic.
- It uses a separate object for storing opposite directions, offering clarity.
- However, the repeated logging within the loop can be inefficient and unnecessary for production code.

**Alternative Solution:**

Here's an alternative solution using a single loop and a stack with potentially improved performance and reduced complexity:

<details>
<summary>View AI's Solution</summary>
    
```javascript
function directionReduction(directions) {
    const stack = [];
    const oppositeDir = {
        NORTH: "SOUTH",
        SOUTH: "NORTH",
        WEST: "EAST",
        EAST: "WEST",
    };

    for (const direction of directions) {
        const top = stack[stack.length - 1];
        if (top && top === oppositeDir[direction]) {
            stack.pop();
        } else {
        stack.push(direction);
        }
    }

    return stack;

}

```
</details>
<br >

This approach uses a stack to keep track of the current direction sequence. If the current direction matches the top of the stack (opposite direction), both are removed. Otherwise, the current direction is pushed onto the stack.

**Comparison:**

| Feature           | Original Solution | Alternative Solution (Stack) |
|-------------------|-------------------|-------------------------------|
| Functionality     | Correct           | Correct                      |
| Performance       | O(n^2) worst case  | O(n)                          |
| Best Practices    | Good              | More efficient, less repetitive |
| Code Quality      | Readable          | Clear, potentially less verbose |

**Choosing the Right Solution:**

- The original solution might be preferred for its explicitness and ease of understanding, especially for beginners.
- The alternative solution offers significantly better performance for larger input arrays due to its linear complexity. It also reduces unnecessary logging and improves code conciseness.

Therefore, the choice depends on factors like the expected input size, performance requirements, and your preference for code clarity versus efficiency.



**Ref:** https://www.codewars.com/kata/550f22f4d758534c1100025a/
