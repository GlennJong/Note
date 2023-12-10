## Pete, the baker 

### 題目原文參考連結 [[Link here](https://www.codewars.com/kata/525c65e51bf619685c000059)]
```
Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number...
```
大致上的意思是要寫一隻程式可以判斷材料足夠做出多少的蛋糕，這隻程式會長成這樣 => `cakes(recipe, available)`，然後輸出可完成的蛋糕數量 `0, 1, 2...`

### 可能會遇到的問題
1. 材料不能滿足食譜的話，那就做不出蛋糕。
2. 材料不論多寡只能取最小的數，表示最低能夠完成的蛋糕數量。
3. 材料可能不是 number，如果不能當作數字處理的話會出錯(這個題目測試沒有做這項檢查，所以我的答案沒處理 🙌)

### 我的答案
```javascript
function cakes(recipe, available) {
  // condition: availables could not satisfy recipe
  let isCondUnavailiable = false;
  const recipeElems = Object.keys(recipe);
  
  recipeElems.forEach(_elem => {
    if (!available[_elem]) {
      isCondUnavailiable = true;
    }
  })
  
  // stop function and return 0
  if (isCondUnavailiable) return 0;
  
  // count how much cake could made.
  const inputs = Object.keys(available);
  const result = []
  for (let i in inputs) {
    const _input = inputs[i];
    if (recipe[_input]) {
      const cond = recipe[_input];
      const value = available[_input];
      result.push(Math.floor(value/cond));
    }
  }

  // get the less number in the array.
  return Math.min(...result);
}
```

### Codewars 上最短的解法：
```javascript
const cakes = (needs, has) => Math.min(
  ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)
```
Nice 🫠

