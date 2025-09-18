# JavaScript 第一步 [doc](https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/First_steps)
## JavaScript 第一步概述
---
## 什麼是 JavaScript？

### 它究竟可以做什麼呢?
> Browser APIs: 內建在 Browser 可直接使用。舉例來說，Google Map 的 `Geolocation` 物件是內建在 Chrome 裡面。換句話說，也可以理解成不同的瀏覽器有提供不同的實作功能。
> 
> Third-part APIs: 依照第三方服務的規則，使用該服務的功能。舉例來說，可以透過 twitter api 獲取使用者所有推文內容，並在自己的 web 中運用。

### 伺服器端與用戶端程式
> Backend: Node.js
> 
> JavaScript 不僅限於在瀏覽器上執行，現在流行的 web 開發工具即是透過 Node.js 來建構開發環境，甚至是伺服器也可以使用 Node.js 的框架來做。
```sh
# Example: 在 Terminal 透過 Node.js 執行 JavaScript
node run-script.js
```
### 補充：Java 和 JavaScript 有什麼關係？
---
## 初次接觸 JavaScript - [link](https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/First_steps/A_first_splash)
### 拆解需求
> 寫程式最重要的是將功能拆解，透過多個步驟或是小功能逐步建構出完整的程式。因此，在動手寫之前先進行拆解思考，是一件非常重要且需要訓練的事！

### 變數
> const? let?
### 函式
> function?
### 運算子
> 數學運算？ 等於？
### 條件
> if else
### 事件
> DOM Event?
### 迴圈
> for?
### 小試身手 [doc](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html)
> 嘗試從文檔中了解程式大概在做什麼。
---
## 出了什麼問題？JavaScript 疑難排解
---
## 儲存你所需的資訊 — 變數
### let (變數)
- 可重複宣告
- 可改變值
- 為什麼要用變數？

### const (常數)
- 不可重複宣告
- 不可改變值
- 為什麼要用常數？

### 關於命名
> 駝峰式命名？

### 型別！ [doc](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Data_structures)
> string? object? boolean? number?

### 補充：Scope 作用域 [doc](https://developer.mozilla.org/zh-CN/docs/Glossary/Scope)
> 什麼是「污染全域變數」？
---
## JavaScript 基礎概念 — 數字與運算子
### 算數運算符
> 數學的加減乘除
### 遞增遞減運算符
> ++, --
```js
// 在迴圈中常見的 ++ 符號
for (let i = 0; i < 10; i++) {
  // do something...
}
```
### 比較運算符
> ==? ===? !==?
> 
> 又是「型別」 [doc](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Data_structures)
```js
// 在判斷式中常見的比較運算符
if (x !== y) {
  // do something...
}
```
---
## 處理文字 — JavaScript 中的字串
### 跳脫字串
> \
### 數字 + 字串
> 在 Javascript 的世界中，不同型別也可以加在一起...
### String template: back-tick
> 非常實用的寫法，很推薦學習起來。
```js
const sentence = `Hi, my name is ${name}.`;
```
### 補充：\n 的用法
> css: white-space
---
## 有用的字串函式 [doc](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String)
> 儲存文本在變數中。
> String: 在 Javascript 中，提供了許多字串的功能，是十分常用與常見的功能，會再後續篇幅另外介紹。
---
## 陣列 [doc](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array)
> 儲存多筆資訊在陣列中。
> Array: 在 Javascript 中，提供了許多陣列的功能，是十分常用與常見的功能，會再後續篇幅另外介紹。
---

## 問題 [doc](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html)
> 回到前面 MDN 提供的小遊戲，觀察 `guessCount` 變數的變化。