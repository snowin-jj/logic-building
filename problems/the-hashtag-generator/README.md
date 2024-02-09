# The Hashtag Generator

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

- It must start with a hashtag (#).
- All words must have their first letter capitalized.
- If the final result is longer than 140 chars it must return false.
- If the input or the result is an empty string it must return false.

**Examples:**

```
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
```

# My Solution

<details>
<summary>View Solution</summary>

```javascript
function hashtagGenerator(value = "") {
  if (value === "") return false;

  let result = "";
  let nextHeadIdx = 0;

  for (let i = 0; i < value.length; i++) {
    const element = value[i];
    if (element === " ") {
      nextHeadIdx = i + 1;
    } else {
      if (i === nextHeadIdx) {
        result += element.toUpperCase();
      } else {
        result += element;
      }
    }
  }

  if (result.length >= 140 || result === "") return false;
  return `#${result}`;
}
```

</details>
<br >

# GPT's Solution

Unfortunately, the answers that GPT provided don't pass the test case as I expected. I try to explain the question, the test cases, and the error, but it doesn't seem to work.

If you find any better solution for this problem, please feel free to make a `pr`.

# My thoughts

I always try to avoid using built-in functions, such as split(). I am constantly considering adopting new languages or ecosystems. If you don't feel like that, feel free to write the code in your own personalized style.

**Ref:**
https://www.codewars.com/kata/52449b062fb80683ec000024/javascript
